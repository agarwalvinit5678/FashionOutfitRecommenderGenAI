# API imports
from fastapi import FastAPI
from pydantic import BaseModel
import requests
import re
from fastapi.middleware.cors import CORSMiddleware
# Scraper imports
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import codecs
from webdriver_manager.chrome import ChromeDriverManager
driver=webdriver.Chrome(service=Service(ChromeDriverManager().install()))


# Hosted colab llm endpoint url
url = ""


# const arrays
fit = ["Top","Bottom","Foot","Acc"]
remove = ["in","or","a","or","like","the","light","neutral","color"]


# request type
class Item(BaseModel):
    text: str

app = FastAPI()

origins = ["http://localhost:3000"]  # Add other origins if needed

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Make sure to import the necessary modules (FastAPI and CORSMiddleware) at the beginning of your script.

# By adding the CORSMiddleware to your FastAPI application with the appropriate configuration, you'll allow requests from 'http://localhost:3000' to access your FastAPI endpoints without encountering CORS issues.

# Remember to replace 'http://localhost:3000' with the actual origin of your React application. This configuration allows requests from that origin to access your FastAPI resources.






# Check the AI response for whether it has suggested an outfit
def check(txt):

    lines = txt.splitlines()
    pat = "Outfit 1:"

    for line in lines:
        if len(line) >= len(pat) and line[0:len(pat)] == pat :
            return True
        
    return False
        

# Process the AI response to convert it only into array of dicts of names
def process(txt):
    
    lines = txt.splitlines()
    ind = 0
    ret = []

    # Check for outfits below lines which have Outfit no:
    while ind < len(lines):

        if re.search("Outfit [0-9]:*", lines[ind]) :

            ret_dict = {}
            ind += 1

            # For all clothes in fit
            for cloth in fit :

                # Reach initials such as top, bottom, etc.
                while lines[ind][0:len(cloth)] != cloth:
                    ind += 1

                # Skip initials and reach name
                ind1 = 0
                while ind1 < len(lines[ind]) and lines[ind][ind1] != ':':
                    ind1 += 1
                ind1 += 1

                # Create the name
                name = ""
                while ind1 < len(lines[ind]) and lines[ind][ind1] != ':' :
                    name += lines[ind][ind1]
                    ind1 += 1

                # Remove inital space
                if name[0] == ' ':
                    name = name[1:]

                # For accesories split into multiple from conjunctions
                if cloth == "Acc":

                    words = name.split(' ')
                    arr = []
                    curr = ""

                    for word in words:
                        if word == "and" or word == "or" or word == ',':
                            if curr[-1] == ' ':
                                curr = curr[0:-1]
                            arr.append(curr)
                            curr = ""
                        else :
                            curr += word
                            curr += ' '

                    if curr[-1] == ' ':
                        curr = curr[0:-1]

                    arr.append(curr)
                    ret_dict[cloth] = arr

                else : 
                    ret_dict[cloth] = name
            
            ret.append(ret_dict)

        ind += 1

    return ret


# Function to scrap product info from Myntra by name and number
def search(name, cnt) :
    s = "https://www.myntra.com/"
    words = re.split(r'-| ', name)
    for word in words:
        if word.lower() in remove:
            continue
        s += word.lower()
        s += '-'
    val = s[:-1]


    wait = WebDriverWait(driver, 10)
    driver.get(val)
    get_url = driver.current_url
    wait.until(EC.url_to_be(val))
    if get_url == val:
        page_source = driver.page_source

    soup = BeautifulSoup(page_source,'html5lib')
    table = soup.find('ul', attrs = {'class':'results-base'})

    arr = []

    if table == None:
        print(val)
        return arr

    print(name)
    for row in table.findAll('li', attrs= {'class':'product-base'}) :
        rDict = {}
        img = row.find('picture', attrs = {'class':'img-responsive'}).source['srcset'].split(" ,")[0]
        while img[0] != 'h':
            img = img[1:]
        rDict['img'] = img
        rDict['brand'] = row.find('h3', attrs={'class':'product-brand'}).text
        prod = row.find('h4', attrs={'class':'product-product'}).text
        if len(prod) > 25 :
            prod = prod[0:25]
            prod += "..."
        rDict['product'] = prod
        price = row.find('span', attrs={'class':'product-discountedPrice'})
        if price == None:
            price = row.find('div', attrs={'class':'product-price'})
        rDict['price'] = price.text
        link = "https://www.myntra.com/"
        link += row.find('a')['href']
        rDict['link'] = link
        arr.append(rDict)
        cnt -= 1
        if cnt == 0:
            break
    return arr


def to_links(outfits):
    fin = []
    for outfit in outfits:
        rDict = {}
        for cloth, name in outfit.items():
            curr = []
            if cloth == "Acc":
                for a in name:
                    arr = search(a,4)
                    curr.extend(arr)
            else:
                curr = search(name, 8)
            rDict[cloth] = curr
        fin.append(rDict)
    return fin



@app.post("/prompt")
def create(item: Item):
    dt = item.dict()
    # res = requests.post(url,item)
    res = ""
    print("Enter/Paste your content. Ctrl-D or Ctrl-Z ( windows ) to save it.")
    while True:
        try:
            line = input()
        except EOFError:
            break
        res += line
        res += '\n'
    
    if check(res) == True :
        processed = process(res)

        links = to_links(processed)

        return {
            "message":res,
            "suggest":"true",
            "links":links
        }
    else :
        return {
            "message":res,
            "suggest":"false"
        }
    
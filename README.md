## Made for Flipkart GRiD 5.0 - Software Development Track
### Team: Triplex
• Vinit Agarwal (Indian Institute of Information Technology (IIIT), Pune)<br />
• Arvind Khandelwal (Indian Institute of Information Technology (IIIT), Pune)<br />
• Ishan Upadhyaua (Indian Institute of Information Technology (IIIT), Pune)<br />

[Github Link](https://github.com/agarwalvinit5678/FashionOutfitRecommenderGenAI) &emsp;
[Pitch Deck](https://github.com/agarwalvinit5678/FashionOutfitRecommenderGenAI/blob/main/TripleX%20Level%202%20Submission.pdf)&emsp;
[Video Demo](https://youtu.be/BSG21PgW1E8)
# FashionOutfitRecommenderGenAI
#### To start backend server:
`pip install -r requirements.txt`

`uvicorn main:app --reload`

#### To start frontend server:
`npm i`

`npm run start`
***
### Tech Stack / Libraries Used :
#### • For Scrapper :<br />
&nbsp;Python , Google , BeautifulSoup , NLTK , Transformers , Selenium, rembg, Pil<br />
&nbsp;(Model Used: openai – clip) , (Pipeline: Zero Shot Image classification)<br />
#### • LLM :<br />
&ensp;Gen–AI Model , Torch , LangChain , Transformers , Bits and Bytes.<br />
&ensp;(Model Used: arvind2626/f6 {Falcon 7B Fine Tuned})<br />
&ensp;(For Fine Tuning: qLoRA)<br />
#### • FrontEnd :<br />
&ensp;React , Axios<br />
#### • BackEnd :<br />
&ensp;Python , FastAPI<br />
***
### Deliverables
• GenAI-powered outfit generator.<br />
• Implement natural conversational interface for personalized outfits.<br />
• Use purchase history and preferences for tailored recommendations.<br />
• Include social media trends (Instagram, Pinterest) for current fashion ideas.<br />
• Analyze style, color, and brands for unique outfit suggestions.<br />
• Generate complete outfits, including clothing, accessories, footwear.<br />
• Consider body type, occasion, region, and age for diverse suggestions.<br />
• Enable user interaction for customization and feedback.<br />
• Provide seamless, confidence-boosting user experience.<br />
### Flowchart
<img src="https://github.com/agarwalvinit5678/FashionOutfitRecommenderGenAI/assets/92209640/0258f355-b415-4e23-913d-7e2ec3b72bf6"  width="100%" >

### Screenshot of Webapp
<img src="https://github.com/agarwalvinit5678/FashionOutfitRecommenderGenAI/assets/92209640/be7be6c7-30c6-44ea-b9e7-3c2de7e29dd0"  width="100%" >

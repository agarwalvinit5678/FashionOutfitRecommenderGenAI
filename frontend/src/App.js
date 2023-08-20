import logo from './logo.svg';
import './App.css';
import Inputbox from './components/Inputbox';
import PreviousChat from './components/Previouschat';
import ProductBox from './components/ProductBox';
const products=
{
    "message": "Sure! Baggy clothes work well for your body type. You can try a short-sleeve t-shirt in a light color like white or light blue. The t-shirt should be loose and comfortable.\n\nOutfit 1:\nTop: Short-sleeve t-shirt in white or light blue\nBottom: Baggy jeans in dark wash\nFootwear: White sneakers\nAccessories: A black baseball cap and a leather bracelet\n\nOutfit 2:\nTop: Crew neck t-shirt in a neutral color like gray or black\nBottom: Baggy chinos in a light color like khaki or beige\nFootwear: Brown loafers\nAccessories: A leather belt and a watch\n\nOutfit 3:\nTop: V-neck t-shirt in a light color like light blue or white\nBottom: Baggy shorts in a neutral color like khaki or beige\nFootwear: White sneakers\nAccessories: A canvas backpack and a beanie\n",
    "suggest": "true",
    "links": [
        {
            "Top": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22809162/2023/4/18/08ef3e14-7f2e-4f59-abe3-ae429f10c05d1681809041089MenSolidCrewNeckRegularFitLoungeT-shirt1.jpg",
                    "brand": "max",
                    "product": "Round Neck Lounge Ts...",
                    "price": "Rs. 198"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22221566/2023/3/3/831b737b-2363-417d-9402-8241e31798c21677858011217Tshirts1.jpg",
                    "brand": "Bonkers Corner",
                    "product": "Printed Short Sleeve...",
                    "price": "Rs. 799"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23493376/2023/6/28/f1af8dc1-6d81-414b-83d2-73c4735075521687953036801-UA-Tech-Vent-Short-Sleeve-9001687953036387-1.jpg",
                    "brand": "UNDER ARMOUR",
                    "product": "Tech Vent Short Slee...",
                    "price": "Rs. 2239"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23493296/2023/6/28/1ec4e8af-7095-4f5f-ad31-6130b26237ab1687948451462-UA-Logo-Embroidered-Heavyweight-Short-Sleeve-712168794845107-1.jpg",
                    "brand": "UNDER ARMOUR",
                    "product": "Logo Embroidered T-s...",
                    "price": "Rs. 2639"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21871218/2023/2/9/155fbb32-38a6-4a84-81d1-0f927cbc8c0e1675885075097LacosteMenNavyBlueHighNeckDrop-ShoulderSleevesT-shirt1.jpg",
                    "brand": "Lacoste",
                    "product": "Polo Collar Casual T...",
                    "price": "Rs. 7750"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22809160/2023/4/18/1e3a0812-7ac4-4b1d-bcf8-30844bf9a14c1681811556330MenSolidCrewNeckRegularFitLoungeT-shirt1.jpg",
                    "brand": "max",
                    "product": "Round Neck Lounge Ts...",
                    "price": "Rs. 198"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23493374/2023/6/28/aa3bf822-ea81-4dfa-be7f-63d62e9803bb1687953394053-UA-I-Will-Short-Sleeve-961687953393728-1.jpg",
                    "brand": "UNDER ARMOUR",
                    "product": "Men Typography Print...",
                    "price": "Rs. 1999"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/24111180/2023/7/20/1b81538b-13ee-4656-b02b-b092b9796fea1689835230034NikeDri-FITStrikeMensShort-SleeveFootballTop1.jpg",
                    "brand": "Nike",
                    "product": "Dri-FIT Football T-S...",
                    "price": "Rs. 2495"
                }
            ],
            "Bottom": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21807896/2023/7/11/843309e7-0831-4409-961b-b30409f8a0911689055655992-Moda-Rapido-Men-Jeans-2981689055655481-1.jpg",
                    "brand": "Moda Rapido",
                    "product": "Men Mid-Rise Baggy F...",
                    "price": "Rs. 1299"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21807884/2023/7/11/a5f6e3e7-810a-4077-8ba1-d6a3038669d01689055646183-Moda-Rapido-Men-Jeans-2221689055645629-1.jpg",
                    "brand": "Moda Rapido",
                    "product": "Men Baggy Fit Mid-Ri...",
                    "price": "Rs. 1119"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23837460/2023/7/1/962689e4-1192-4bb5-854b-e50576a27c0b168819060166290sBaggyRegularJeans1.jpg",
                    "brand": "H&M",
                    "product": "90s Baggy Regular Je...",
                    "price": "Rs. 2699"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21565478/2023/7/31/47a7d201-c252-4072-9070-e64be30d50571690777120467-Kook-N-Keech-Men-Classy-Black-Loose-Baggy-Ombre-Street-Look--1.jpg",
                    "brand": "Kook N Keech",
                    "product": "Men Street Look Digi...",
                    "price": "Rs. 1126"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21565452/2023/6/9/6296d80d-c3e3-4f1e-84e0-fe2567ee4dcb1686309833086-Kook-N-Keech-Men-Jeans-1591686309832709-2.jpg",
                    "brand": "Kook N Keech",
                    "product": "Men Vintage Straight...",
                    "price": "Rs. 797"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18903292/2022/9/26/e312d65d-d6cf-48d5-9130-85fdbadf07721664183443258-Levis-Womens-Dark-Blue-Relaxed-Fit-Mid-Rise-Baggy-Jeans-2921-1.jpg",
                    "brand": "Levis",
                    "product": "Women Relaxed Fit Je...",
                    "price": "Rs. 2519"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21285974/2023/2/21/89acd1ab-4ce3-400a-ad62-0a61a184179e1676962205331-Mast--Harbour-Women-Jeans-9501676962204531-1.jpg",
                    "brand": "Mast & Harbour",
                    "product": "Women Baggy Fit Jean...",
                    "price": "Rs. 923"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21486180/2023/2/27/637995a0-7a1e-4a0c-a1e6-618451b337391677488586826-Tommy-Hilfiger-Men-Mid-Rise-Dad-Fit-Baggy-Jeans-621677488586-1.jpg",
                    "brand": "Tommy Hilfiger",
                    "product": "Mid-Rise Dad Fit Bag...",
                    "price": "Rs. 5849"
                }
            ],
            "Foot": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg",
                    "brand": "U.S. Polo Assn.",
                    "product": "Men Clarkin Sneakers",
                    "price": "Rs. 1349"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg",
                    "brand": "Mast & Harbour",
                    "product": "Men Striped Sneakers",
                    "price": "Rs. 836"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg",
                    "brand": "Roadster",
                    "product": "Men Sneakers",
                    "price": "Rs. 796"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20982442/2022/11/29/d4c004ad-d941-447e-9f3a-e496ea748d381669728094821CasualShoes1.jpg",
                    "brand": "Kook N Keech",
                    "product": "Men Colourblocked Sn...",
                    "price": "Rs. 674"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15601232/2021/12/20/7086fa3f-e7bf-487c-bb2d-eaad71ddc1e41640011616775RoadsterMenWhiteSneakers1.jpg",
                    "brand": "Roadster",
                    "product": "Men Sneakers",
                    "price": "Rs. 790"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12068006/2021/2/2/827fc0dc-1c8f-4e1d-8d51-b264d6bde9761612240207017-HIGHLANDER-Men-White-Sneakers-7941612240205832-6.jpg",
                    "brand": "HIGHLANDER",
                    "product": "Men Solid Sneakers",
                    "price": "Rs. 696"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18458460/2022/5/28/c28d223f-6a82-46be-8922-6a21172bd2841653714541319AfroJackWomenWhiteSneakers1.jpg",
                    "brand": "AfroJack",
                    "product": "Women Sneakers",
                    "price": "Rs. 721"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18827962/2022/7/22/be57426d-31b4-4623-8cdc-09b0bcfc7f471658463700290ElPasoMenWhiteColourblockedSneakers1.jpg",
                    "brand": "El Paso",
                    "product": "Men Colourblocked Sn...",
                    "price": "Rs. 838"
                }
            ],
            "Acc": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/30/a2adfa2a-3246-48c9-878d-21b57b083a141609320341561-1.jpg",
                    "brand": "Puma",
                    "product": "Unisex Solid Basebal...",
                    "price": "Rs. 279"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12666458/2020/11/4/48a7a023-dff1-465e-868c-b56a7a5a03941604491013537-WROGN-Unisex-Caps-5741604491012978-1.jpg",
                    "brand": "WROGN",
                    "product": "Unisex Solid Basebal...",
                    "price": "Rs. 599"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15175748/2021/8/17/8bfdc7bb-be3d-4969-abb7-6c7bd2ea63131629220327525na1.jpg",
                    "brand": "Jack & Jones",
                    "product": "Men Printed Baseball...",
                    "price": "Rs. 799"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/24138118/2023/7/22/cda5c700-9ae7-434d-87c9-935c60f351b51690016421985NEWERAUnisexBlackWhitePrintedBaseballCap1.jpg",
                    "brand": "New Era",
                    "product": "Unisex Printed Baseb...",
                    "price": "Rs. 2399"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/3/2e745934-7a60-4d0f-a311-3b71bc890a431601682498999-1.jpg",
                    "brand": "Yellow Chimes",
                    "product": "Men Leather Bracelet",
                    "price": "Rs. 311"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16321000/2021/12/1/c86dd346-3296-4820-a802-05c5f8ba1f451638353153601YellowChimesUnisexBrown1.jpg",
                    "brand": "Yellow Chimes",
                    "product": "Unisex Brown Leather...",
                    "price": "Rs. 295"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23255152/2023/5/18/25fc5e0a-0cae-41f8-a1d2-d83b63fd28cd1684409789506FossilJewelryBlackBraceletJF043430401.jpg",
                    "brand": "Fossil",
                    "product": "Men Leather Link Bra...",
                    "price": "Rs. 4995"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23696354/2023/6/20/f3d7c333-17d5-402b-a712-0f5c923bafd81687274538133MYKIMenBlackWraparoundBracelet1.jpg",
                    "brand": "MYKI",
                    "product": "Men Leather Bracelet",
                    "price": "Rs. 369"
                }
            ]
        },
        {
            "Top": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996792/2019/11/22/27d198b2-3014-40a5-a1cf-8c3109a3ebce1574427973032-Roadster-Men-Black-Solid-Raw-Edge-Round-Neck-T-shirt-1521574-1.jpg",
                    "brand": "Roadster",
                    "product": "Contrast Pocket T-sh...",
                    "price": "Rs. 209"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13675240/2021/3/5/f8a1b5b0-a357-4ae8-9fae-d40cbb0cc81c1614934885989-Mr-Bowerbird-Men-Tshirts-6381614934884332-1.jpg",
                    "brand": "Mr Bowerbird",
                    "product": "Philosophy Oversized...",
                    "price": "Rs. 704"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12826072/2020/12/12/b0ba5dec-c63c-41f3-b04a-62e89b8112421607762747390-Crew-Neck-Tee-8231607762745967-1.jpg",
                    "brand": "Van Heusen",
                    "product": "Women Crew Neck Loun...",
                    "price": "Rs. 599"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23351130/2023/5/29/0d3ff472-ef98-4c08-8139-49519e6f83741685340542054-HERENOW-Men-Tshirts-9061685340541629-1.jpg",
                    "brand": "HERE&NOW",
                    "product": "Crew Neck Solid T-sh...",
                    "price": "Rs. 299"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23726680/2023/6/22/54098fbf-db02-4a38-9fc2-5d0a75c035541687441951519RBMenBlackV-NeckRawEdgeT-shirt1.jpg",
                    "brand": "R&B",
                    "product": "Crew Neck Cotton T-s...",
                    "price": "Rs. 629"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5661654/2018/6/4/723b7aeb-a814-4e29-95e8-f8452ba3899b1528104638868-CAP-SLEEVE-BASIC-CREW-NECK-SLIM-FIT-TEE-4221528104637721-1.jpg",
                    "brand": "Enamor",
                    "product": "Lounge T-shirt",
                    "price": "Rs. 599"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22036236/2023/2/18/95eb60a6-e0f7-41d5-a6b0-c751ede2c02e1676714033150JackJonesMenBlackPrintedAppliqueSlimFitT-shirt1.jpg",
                    "brand": "Jack & Jones",
                    "product": "Printed Slim Fit T-s...",
                    "price": "Rs. 714"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22099154/2023/2/23/d0ec856b-cac8-4b82-8a43-c4a43b4570f41677154924348JackJonesMenBlackPrintedSlimFitT-shirt1.jpg",
                    "brand": "Jack & Jones",
                    "product": "Slim Fit Cotton T-sh...",
                    "price": "Rs. 1679"
                }
            ],
            "Bottom": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11201232/2020/1/27/f9c153a4-e700-4bb0-94c0-aa03b82e5fa81580102430584-Roadster-Men-Trousers-4621580102428018-1.jpg",
                    "brand": "Roadster",
                    "product": "Men Chinos",
                    "price": "Rs. 799"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19438204/2022/8/8/f3d872c8-a47b-446c-a155-293a26eb8eb91659963121594MAXMenSolidSlimFitChinosTrousers1.jpg",
                    "brand": "max",
                    "product": "Men Chinos Trouser",
                    "price": "Rs. 898"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19366274/2022/8/3/a1c652d2-b2ff-440e-a6d5-040ea4207ad61659528774677Trousers1.jpg",
                    "brand": "BYFORD by Pantaloons",
                    "product": "Men Chinos Trousers",
                    "price": "Rs. 909"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20772936/2022/11/16/88399c07-3608-4c29-beb3-a5884bb524991668592280198CantabilMenPrintedKhakiRegularFitTrouser1.jpg",
                    "brand": "Cantabil",
                    "product": "Men Cotton Chinos Tr...",
                    "price": "Rs. 1319"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1390618/2019/3/15/765e2b64-792d-4ffd-ac9d-1f588ecacdc51552638965248-Highlander-Men-Khaki-Slim-Fit-Chinos-7471552638964323-1.jpg",
                    "brand": "HIGHLANDER",
                    "product": "Men Slim Fit Chinos",
                    "price": "Rs. 749"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18821734/2022/9/23/d9a69598-e9ff-4142-acca-7480b8b803851663909481903FlipFlopsTommyHilfigerMenFlipFlopsTommyHilfigerMenFlipFlopsT1.jpg",
                    "brand": "Tommy Hilfiger",
                    "product": "Men Solid Chinos",
                    "price": "Rs. 3299"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15995832/2021/11/3/2b4d9b49-b716-402b-8bcf-2078b1f5a6231635922111963RedChiefMenKhakiChinosTrousers1.jpg",
                    "brand": "Red Chief",
                    "product": "Men Chinos Trousers",
                    "price": "Rs. 1349"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20962260/2022/11/29/0a6a14e2-fa25-47de-ab0a-72c1a32033831669667423034CelioMenKhakiClassicChinosTrousers1.jpg",
                    "brand": "Celio",
                    "product": "Men Chinos Trousers",
                    "price": "Rs. 1349"
                }
            ],
            "Foot": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18494300/2022/6/6/3130c255-b7be-495b-8b4b-1651fe6c40671654534319883AnoukMenBrownLoafers11.jpg",
                    "brand": "Anouk",
                    "product": "Men Loafers",
                    "price": "Rs. 988"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18028928/2022/5/23/c9d736d9-98bd-4e5e-9d76-3c3b96fc5bc21653283932758INVICTUSMenBrownLoafers1.jpg",
                    "brand": "INVICTUS",
                    "product": "Men Loafers",
                    "price": "Rs. 964"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12349500/2020/8/27/cb9685a8-1b6b-45c3-944a-63abaecbf33f1598532954676na1.jpg",
                    "brand": "Prolific",
                    "product": "Men Textured Loafers",
                    "price": "Rs. 758"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15579290/2022/3/23/77287434-1267-4833-97e5-1d229d2894121648017312186-Prolific-Men-Brown-Solid-Formal-Loafers-2781648017311871-1.jpg",
                    "brand": "Prolific",
                    "product": "Men Solid Formal Loa...",
                    "price": "Rs. 900"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16016374/2021/11/8/e33be4bc-1f8c-4282-be75-713dfe067fba1636355321162MactreeMenBrownTexturedFormalLoafers1.jpg",
                    "brand": "Mactree",
                    "product": "Men Textured Formal ...",
                    "price": "Rs. 698"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16468684/2021/12/10/dd2925cd-fb45-4c54-9a8c-2b2a8019c9241639149350071AfroJackMenBrownLoafers1.jpg",
                    "brand": "AfroJack",
                    "product": "Men Brown Loafers",
                    "price": "Rs. 799"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20446332/2022/10/18/0a50d265-4edb-4e90-8d34-ab37fd936d1b1666086829871CasualShoes1.jpg",
                    "brand": "Bata",
                    "product": "Men PU Loafers",
                    "price": "Rs. 1977"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19755728/2022/9/2/e379aad6-ed73-4794-9895-1ed687b795ef1662108539792KhadimsMenBrownDrivingShoes1.jpg",
                    "brand": "Khadims",
                    "product": "Men Loafers",
                    "price": "Rs. 899"
                }
            ],
            "Acc": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23599658/2023/6/12/a8fe220a-b191-4891-8925-aca2df8123bd1686543733082KAEZRIBestQuality100GenuineLeatherBeltformenKATA022KBBD00031.jpg",
                    "brand": "KAEZRI",
                    "product": "Men Leather Formal B...",
                    "price": "Rs. 359"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12661588/2022/12/8/8431b44a-de8d-48f2-afb7-8e9e8bb28d711670474607207LouisPhilippeMenBlackBrownReversibleLeatherBelt1.jpg",
                    "brand": "Louis Philippe",
                    "product": "Reversible Leather B...",
                    "price": "Rs. 1179"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20222206/2022/9/29/32c26851-12a0-408e-ae6e-941f1df8b6171664471828531AllenSollyMenBlackLeatherFormalBelt1.jpg",
                    "brand": "Allen Solly",
                    "product": "Men Leather Formal B...",
                    "price": "Rs. 909"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23697608/2023/6/20/24edeacd-3a87-47de-8147-92d3a9270ea01687275235398VanHeusenMenBlackLeatherBelt1.jpg",
                    "brand": "Van Heusen",
                    "product": "Men Leather Formal B...",
                    "price": "Rs. 1334"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16934964/2022/1/25/3a498e2e-7250-4e5e-aa33-1876b6d813741643102245729SmartWatches1.jpg",
                    "brand": "NOISE",
                    "product": "ColorFit Icon Buzz S...",
                    "price": "Rs. 1499"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22770560/2023/4/21/0e113bff-0905-4bc9-af94-fcebfab3ba8b1682075076722-Fire-Boltt-Unisex-Smart-Watches-7601682075076097-1.jpg",
                    "brand": "Fire-Boltt",
                    "product": "Ninja Call Ultra Sma...",
                    "price": "Rs. 1399"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22459208/2023/5/26/afc9612a-48ca-4ae1-8e21-576f06bbab001685077732375-boAt-Wave-Flex-connect-183-HD-smartwatch-7001685077732158-1.jpg",
                    "brand": "boAt",
                    "product": "Wave Flex Connect Sm...",
                    "price": "Rs. 2299"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12870712/2022/4/19/29982552-6e3d-41db-b17d-68b3d9f3f5e21650343618738-Titan-Men-Black-Analogue-Watch-1391650343618651-4.jpg",
                    "brand": "Titan",
                    "product": "Men Analogue Watch",
                    "price": "Rs. 5176"
                }
            ]
        },
        {
            "Top": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21082338/2022/12/6/8a0011ea-45f7-43bd-b757-dac60692e86a1670266247912Tshirts1.jpg",
                    "brand": "The Souled Store",
                    "product": "Women V-Neck T-shirt",
                    "price": "Rs. 629"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2306176/2018/7/9/7834ecea-4d30-4a7e-ae84-55811a8ffa081531130384528-Roadster-Men-Maroon-Striped-V-Neck-T-shirt-561531130382512-1.jpg",
                    "brand": "Roadster",
                    "product": "V-Neck T-shirt",
                    "price": "Rs. 279"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22432550/2023/3/20/8efb572a-de9c-494e-988c-f5e3788a926c1679305185015WomenSolidV-neckT-shirt1.jpg",
                    "brand": "max",
                    "product": "V-Neck Short Sleeves...",
                    "price": "Rs. 198"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10778710/2020/1/24/d1e1d3dd-c77f-48d4-8cc4-4cf8ab1d767f1579864774492-Roadster-Women-Tshirts-8221579864772681-1.jpg",
                    "brand": "Roadster",
                    "product": "Solid V-Neck T-shirt",
                    "price": "Rs. 269"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11294002/2020/3/13/49beced7-f1cf-4ab9-b4fd-559d088d56a91584075359891-Roadster-Men-Tshirts-8901584075358345-1.jpg",
                    "brand": "Roadster",
                    "product": "Solid V-Neck T-shirt",
                    "price": "Rs. 244"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18810724/2022/6/21/1605bf0e-ec22-47f4-9ea3-456296080b821655826413244Tshirts1.jpg",
                    "brand": "Jack & Jones",
                    "product": "Boys V-Neck T-shirt",
                    "price": "Rs. 519"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23263280/2023/5/18/c5c16a54-ec0c-48aa-bbde-c42af72a38fd1684429920213RegularFitV-neckT-shirt1.jpg",
                    "brand": "H&M",
                    "product": "Regular Fit V-Neck T...",
                    "price": "Rs. 499"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21264322/2023/6/6/100ecae7-99ba-4a60-97e6-07d3509d8e5e1686042893293-Nautica-Men-Tshirts-6491686042892910-1.jpg",
                    "brand": "Nautica",
                    "product": "Men Pure Cotton V-Ne...",
                    "price": "Rs. 636"
                }
            ],
            "Bottom": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11351594/2020/9/16/7cf685f3-8160-4509-989f-bebb2f7199dd1600255209975-Moda-Rapido-Men-Khaki--Beige-Printed-Slim-Fit-Regular-Shorts-1.jpg",
                    "brand": "Moda Rapido",
                    "product": "Men Slim Fit Regular...",
                    "price": "Rs. 755"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2387568/2018/2/15/11518676575856-Roadster-Men-Beige-Printed-Regular-Fit-Chino-Shorts-9301518676575548-1.jpg",
                    "brand": "Roadster",
                    "product": "Men Regular Fit Chin...",
                    "price": "Rs. 764"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12302822/2020/9/25/fac792cb-5e2b-495e-93b9-22f6a3f5ae001601025100141-Enamor-Women-Beige-941601025097710-1.jpg",
                    "brand": "Enamor",
                    "product": "Women Solid Lounge S...",
                    "price": "Rs. 299"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/24008592/2023/7/13/144d5bef-7753-4152-b072-ccd322fe2e271689259701559MarksSpencerMenKhakiShorts1.jpg",
                    "brand": "Marks & Spencer",
                    "product": "Men Mid-Rise Cotton ...",
                    "price": "Rs. 2999"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/24002306/2023/7/13/e388dae6-0430-4cbf-b6c0-c09b4f17b9871689238968251RBMenGreenShorts1.jpg",
                    "brand": "R&B",
                    "product": "Men Mid-Rise Cotton ...",
                    "price": "Rs. 629"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23080106/2023/6/30/66f5968f-08e0-44f4-ab3d-27567129f4b81688115426792-RADCAL-Mens-Shorts-5821688115426069-1.jpg",
                    "brand": "Puma",
                    "product": "Men RAD/CAL Outdoor ...",
                    "price": "Rs. 2449"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18212614/2022/5/10/0404c966-1ba6-4994-bdc8-3d27223d93d21652174205247RegularFitsweatshirtshorts1.jpg",
                    "brand": "H&M",
                    "product": "Regular Fit Sweatshi...",
                    "price": "Rs. 999"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23111730/2023/5/10/722c1418-04dc-4c50-9463-9c641ea6cd4c1683708377813DaMENSCHStatementTextureRegularFitWaffleSolidShortsForMen1.jpg",
                    "brand": "DAMENSCH",
                    "product": "Waffle Texture Cotto...",
                    "price": "Rs. 1364"
                }
            ],
            "Foot": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg",
                    "brand": "U.S. Polo Assn.",
                    "product": "Men Clarkin Sneakers",
                    "price": "Rs. 1349"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg",
                    "brand": "Mast & Harbour",
                    "product": "Men Striped Sneakers",
                    "price": "Rs. 836"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg",
                    "brand": "Roadster",
                    "product": "Men Sneakers",
                    "price": "Rs. 796"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20982442/2022/11/29/d4c004ad-d941-447e-9f3a-e496ea748d381669728094821CasualShoes1.jpg",
                    "brand": "Kook N Keech",
                    "product": "Men Colourblocked Sn...",
                    "price": "Rs. 674"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15601232/2021/12/20/7086fa3f-e7bf-487c-bb2d-eaad71ddc1e41640011616775RoadsterMenWhiteSneakers1.jpg",
                    "brand": "Roadster",
                    "product": "Men Sneakers",
                    "price": "Rs. 790"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12068006/2021/2/2/827fc0dc-1c8f-4e1d-8d51-b264d6bde9761612240207017-HIGHLANDER-Men-White-Sneakers-7941612240205832-6.jpg",
                    "brand": "HIGHLANDER",
                    "product": "Men Solid Sneakers",
                    "price": "Rs. 696"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18458460/2022/5/28/c28d223f-6a82-46be-8922-6a21172bd2841653714541319AfroJackWomenWhiteSneakers1.jpg",
                    "brand": "AfroJack",
                    "product": "Women Sneakers",
                    "price": "Rs. 721"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18827962/2022/7/22/be57426d-31b4-4623-8cdc-09b0bcfc7f471658463700290ElPasoMenWhiteColourblockedSneakers1.jpg",
                    "brand": "El Paso",
                    "product": "Men Colourblocked Sn...",
                    "price": "Rs. 838"
                }
            ],
            "Acc": [
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21416306/2023/2/3/c4c3a8ab-1787-403a-9044-a088bf66c4c41675423580449-Mona-B-Canvas-Backpack-5851675423579628-1.jpg",
                    "brand": "Mona B",
                    "product": "Canvas Backpack",
                    "price": "Rs. 2510"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21806606/2023/2/2/17b677aa-b46c-447c-9491-b46a6829a2c91675326019406TIGERMARRONUnisexBrownBlackBackpack1.jpg",
                    "brand": "TIGER MARRON",
                    "product": "Climacool  Canvas Ba...",
                    "price": "Rs. 12400"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21416312/2023/2/3/bba63ab6-454d-427e-9c10-f4b6773f54a81675423598526-Mona-B-Canvas-Backpack-2481675423597732-1.jpg",
                    "brand": "Mona B",
                    "product": "Canvas Backpack",
                    "price": "Rs. 2510"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21416308/2023/1/4/ef34156e-98a8-4117-bb2f-ada62a36fe771672856316415CanvasBackPackforOfficeSchoolandCollegeDelta1.jpg",
                    "brand": "Mona B",
                    "product": "Canvas Backpack",
                    "price": "Rs. 2417"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7463646/2019/1/4/f95e6324-a2b5-4e75-890b-7569e6b015fe1546584904607-Roadster-Unisex-Black-Self-Design-Beanie-7181546584903528-1.jpg",
                    "brand": "Roadster",
                    "product": "Unisex Self Design B...",
                    "price": "Rs. 382"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7463648/2019/1/4/7994736a-49cf-456c-b0b2-f37e3154f87a1546584956826-Roadster-Unisex-Navy-Blue-Solid-Beanie-8461546584955552-1.jpg",
                    "brand": "Roadster",
                    "product": "Unisex Solid Beanie",
                    "price": "Rs. 359"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9962701/2019/10/17/f21367f9-99df-4cc8-852c-55c6fd459a591571315786155-Roadster-Unisex-Black-Solid-Beanie-491571315785081-1.jpg",
                    "brand": "Roadster",
                    "product": "Unisex Solid Beanie",
                    "price": "Rs. 382"
                },
                {
                    "img": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23822160/2023/6/30/ae4d74ef-3eef-4381-a53c-bc2429bcb4c81688103630893GajrajUnisexCottonSlouchyBeaniecapsBlackBlack1.jpg",
                    "brand": "Gajraj",
                    "product": "Unisex Pack of 2 Cot...",
                    "price": "Rs. 398"
                }
            ]
        }
    ]
};

function App() {
  return (
    <div className="App">
      {/* <PreviousChat text="bnm,"></PreviousChat> */}
      {/* <ProductBox products={products}></ProductBox> */}
      {/* <PreviousChat text="bnmjnjnfjnfjnj"></PreviousChat> */}
      <div className='Prompt'>
        <Inputbox></Inputbox>
      </div>
      
    </div>
  );
}

export default App;

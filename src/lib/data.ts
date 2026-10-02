import destinationsImage from "@/assets/wanderly-destinations.jpg";
import packagesImage from "@/assets/wanderly-packages.jpg";
import hotelsImage from "@/assets/wanderly-hotels.jpg";

export type TravelItem = { id: string; name: string; country: string; image: string; crop: string; price: number; rating: number; reviews: number; category: string; description: string };

const places = [
  ["paris","Paris","France",1290,4.8,"Cultural","Boulevards, art and candlelit evenings along the Seine."],
  ["dubai","Dubai","UAE",1590,4.7,"Luxury","Futuristic skylines, desert adventures and remarkable hospitality."],
  ["bali","Bali","Indonesia",890,4.9,"Nature","Temple mornings, emerald rice terraces and warm island life."],
  ["maldives","Maldives","Maldives",2190,4.9,"Beach","Private lagoons, coral gardens and overwater serenity."],
  ["london","London","United Kingdom",1390,4.6,"Cultural","Royal landmarks, neighborhood markets and world-class theatre."],
  ["singapore","Singapore","Singapore",1190,4.8,"Family","Garden city energy, inspired food and effortless discovery."],
  ["tokyo","Tokyo","Japan",1690,4.9,"Cultural","Neon nights, quiet shrines and extraordinary seasonal cuisine."],
  ["switzerland","Swiss Alps","Switzerland",1890,4.9,"Adventure","Panoramic railways, alpine lakes and storybook villages."],
  ["new-york","New York","USA",1490,4.7,"Cities","Iconic art, skyline views and endless neighborhood discoveries."],
  ["rome","Rome","Italy",1190,4.8,"Cultural","Ancient wonders, lively piazzas and timeless Italian flavor."],
  ["bangkok","Bangkok","Thailand",790,4.6,"Budget","Golden temples, vivid markets and legendary street food."],
  ["kerala","Kerala","India",690,4.8,"Nature","Backwater journeys, green highlands and restorative traditions."],
] as const;

export const destinations: TravelItem[] = places.map((p,i)=>({id:p[0],name:p[1],country:p[2],price:p[3],rating:p[4],category:p[5],description:p[6],reviews:184+i*37,image:destinationsImage,crop:i%2?"right":"left"}));

export const packages = destinations.slice(0,8).map((d,i)=>({...d,id:`escape-${d.id}`,name:["Parisian Art & Table","Desert to Skyline","Bali Soul Journey","Barefoot Maldives","London Icons","Singapore Family Discovery","Japan in Bloom","Alpine Grand Tour"][i],image:packagesImage,crop:i%2?"right":"left",price:d.price+400,duration:[6,5,8,7,6,5,9,8][i],includes:["Boutique stays","Daily breakfast","Local guide"]}));

export const hotels = destinations.slice(0,8).map((d,i)=>({...d,id:`hotel-${d.id}`,name:["Maison Lumière","The Palm Atelier","Ubud Canopy House","Azure Reef Villas","The Kensington Row","Marina Garden Hotel","Kumo Tokyo","Alpenhof Retreat"][i],image:hotelsImage,crop:i%2?"right":"left",price:[280,420,190,650,310,270,340,390][i],amenities:["Pool","Breakfast","Wi-Fi","Spa"],stars:i%3+3}));

export const flights = [
  {id:"WY218",airline:"Wander Airways",from:"JFK",to:"CDG",depart:"08:25",arrive:"21:10",duration:"7h 45m",stops:"Nonstop",price:684},
  {id:"SQ411",airline:"Singapore Airlines",from:"LAX",to:"SIN",depart:"12:40",arrive:"19:20 +1",duration:"16h 40m",stops:"Nonstop",price:924},
  {id:"EK202",airline:"Emirates",from:"JFK",to:"DXB",depart:"23:00",arrive:"19:45 +1",duration:"12h 45m",stops:"Nonstop",price:812},
  {id:"JL006",airline:"Japan Airlines",from:"JFK",to:"HND",depart:"10:55",arrive:"14:10 +1",duration:"14h 15m",stops:"Nonstop",price:1058},
];

export const reviews = [
  {id:"r1",name:"Maya Chen",item:"Bali Soul Journey",rating:5,date:"Sep 18, 2026",title:"The trip we will talk about forever",text:"Every transfer was smooth, our guide knew the quietest temples, and the sunrise hike was magical."},
  {id:"r2",name:"Jon Bell",item:"Alpine Grand Tour",rating:5,date:"Sep 10, 2026",title:"Impeccably paced",text:"A wonderful balance of scenic rail journeys and free afternoons. The lake-view room was exceptional."},
  {id:"r3",name:"Amara Okafor",item:"Maison Lumière",rating:4,date:"Aug 29, 2026",title:"Beautiful base in Paris",text:"Thoughtful staff, perfect location and a breakfast worth waking up early for."},
];

export const adminUsers = ["Aarav Shah","Maya Chen","Jon Bell","Amara Okafor","Sofia Rossi","Noah Williams"].map((name,i)=>({id:`U-${1024+i}`,name,email:`${name.toLowerCase().replace(" ",".")}@example.com`,phone:`+1 415 555 0${120+i}`,joined:`Sep ${18-i}, 2026`,role:i===0?"Admin":"Traveler",status:i===4?"Inactive":"Active",bookings:i+1}));

export const gallery = [...destinations,...packages,...hotels].slice(0,18);
import express from "express";
import bodyParser from "body-parser";
import e from "express";

const app = express();
const port = 3000;

app.use(express.static("public"))





app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {

  const randomAdj = adj[Math.floor(Math.random() * adj.length)]
  const randomNoun = noun[Math.floor(Math.random() * noun.length)]
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "Dost", "Masti", "Pyaar", "Swag", "Funda", "Jhakaas", "Bakwaas", "Bindass", "Jugaad", "Fukra", "Pataka", "Tashan", "Shaandar", "Sundar", "Badhiya", "Chill", "Bindaas", "Chikna", "Hawa Hawai", "Chintu", "Lafda", "Funda", "Mazak", "Tota", "Matlabi", "Jhakaas", "Bawaal", "Shaana",
  "Tapka", "Faltu", "Ghissu", "Chatur", "Phokat", "Locha", "Tota", "Phodu", "Dhasu", "Jhakaas", "Bhaisaab", "Chintu", "Bantai", "Latak", "Jhakjhor", "Lukkha", "Jhagda", "Maamu", "Tashanbaaz", "Kadak", "Fattu", "Pakao", "Diljale", "Chikna", "Langda", "Takkar", "Bakra", "Laayak", "Jungli", "Raada", "Machau", "Patli gali", "Bhukkad", "Nautanki", "Phirki", "Dhaasu", "Thulla", "Chomu", "Chipku", "Nashedi", "Tandoori", "Bheja fry", "Fekna", "Lallu", "Chhapri", "Bhaigiri", "Kamina", "Senti", "Dheet", "Lukkha", "Gyaan", "Fultoo", "Jhakaas", "Golmaal", "Pagalpanti", "Tingu", "Buddhu", "Khiladi", "Dumdar", "Pakau", "Satrangi", "Jhakaas", "Nawabi", "Thik hai", "Dosti", "Fart", "Bindaas", "Chikni", "Ghanta", "Takkar", "Jhol", "Locha", "Shaan", "Kamina", "Bakra", "Phattu", "Maaza", "Nakhra", "Phirki", "Raita", "Chamak", "Lafandar", "Hawa Hawai", "Dum", "Sasta", "Garam", "Phirki", "Panga", "Suno", "Nashili", "Kahani", "Khudgarz", "Dharam", "Mazaak", "Patla", "Fankaar", "Dilon", "Bhookha", "Bachcha", "Chakna", "Jaan"
]

const noun = [
  "Yatra", "Khushi", "Dukh", "Bachpan", "Samasya", "Sanjivani", "Bhaavna", "Sangharsh", "Aasha", "Dostana", "Sneh", "Anubhav", "Samay", "Parivaar", "Astitva", "Rasoi", "Rang", "Nazar", "Chahat", "Bhavna", "Vishwaas", "Dharma", "Prerna", "Udaan", "Samarthya", "Bhawna", "Swasthya", "Aakansha", "Safar", "Sukh", "Parivar", "Umeed", "Sankalp", "Rishtaa", "Arman", "Saathi", "Saman", "Manzil", "Vishwas", "Ankhein", "Prakash", "Ghar", "Duniya", "Khwaab", "Zindagi", "Samaj", "Vichaar", "Saman", "Chashma", "Dard", "Kahani", "Jeevan", "Umeed", "Khilona", "Dil", "Zaroorat", "Anjaan", "Manzil", "Raasta", "Sathi", "Sanjog", "Dharohar", "Aakaar", "Kismat", "Duniya", "Jagdamba", "Sukh", "Chand", "Bhojan", "Bhagwan", "Prathvi", "Samudra", "Taal", "Gaan", "Nadi", "Aangan", "Chidiya", "Parindaa", "Shanti", "Sampatti", "Chakra", "Safar", "Koshish", "Kaaran", "Samriddhi", "Aarambh", "Naman", "Bhagya", "Kahani", "Manthan", "Udaan", "Sagar", "Rangmanch", "Shakti", "Umang", "Prerna", "Samanvay", "Parivartan", "Sukoon", "Sampoorna", "Tarang", "Moksha", "Surya", "Chhaya", "Gyaan", "Dharam", "Chal", "Dharma", "Astitva", "Samarthya", "Utsav", "Parivar", "Gyaan", "Vikash", "Aakarshan", "Kshetra", "Mahaan", "Sankalp", "Aasha", "Vikas", "Yatra", "Pragati", "Sanskriti", "Vishwas", "Samajik", "Anand", "Sadhana", "Samarasa", "Rasoi", "Khiladi", "Aarogya", "Umeed", "Parmanand", "Samarthan", "Dhan", "Vishesh", "Bhavna", "Aakar", "Ravi", "Prithvi", "Nadi", "Surya", "Sagar", "Sankalp", "Masti", "Asha", "Chahat", "Vishram", "Jivan", "Pyaar", "Saman", "Sthiti", "Jeevansathi", "Bachpan", "Kahani", "Sahas", "Sambhavna", "Chand", "Vigyan", "Sajag",
]

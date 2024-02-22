const name = "thiru";
const repoCount = 69;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)


let gameName = new String('thirumalai');
gameName = gameName.toUpperCase(); // Reassigning to the variable
console.log(gameName); // This will print "THIRUMALAI"


const newStringone = "  thiru  ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://thiru.com/thiru%20malainambi";


console.log(url.replace('%20', '-'));

url.includes('thiru');
console.log(url.includes('dn'));


const gamer = new String("thiru-luffy-tbag");
console.log(gamer.split('-'));
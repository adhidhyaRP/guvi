let json = {
    "name" : "adhidhya",
    "college" : "kumaraguru",
    "town" : "madurai"
}

let key = Object.keys(json);
let value = Object.values(json)

for(let i = 0;i<key.length;i++){
    console.log("keys: "+ key[i] + " ,values :" + value[i])
}

for(let off of key){
    console.log("keys :" + off + " ,values :" + json[off])
}

Object.keys(json).forEach(key => {
    console.log("Key: " + key + ", Value: " + json[key]);
});

for (let key in json) {
    if (json.hasOwnProperty(key)) {
        console.log("Key: " + key + ", Value: " + json[key]);
    }
}

//
// resume

let myresume = {
    "name" : "adhidhya R P",
    "college" : "kumaraguru",

    "town":"madurai",
    
    "role":"student",
    "course ":"fullstack development",
    "institute":"guvi",
    "skills":"probems solving and logical thinking"

}

console.log(myresume)
// -------------Write a “person” class to hold all the details.--------------------------

class Person{
    constructor(name,age,gender,town){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.town = town;
        this.intro = function(){
            console.log(`NAME : ${this.name}
                         AGE : ${age} 
                         GENDER :${this.gender}`)
        }

    }

    gethistown(){
        console.log(`${this.name} is located in ${this.town}`)
    }
}

let person1 = new Person("adhidhya",20,"male","madurai")
let person2 = new Person("abishek",40,"male","chennai")
person1.gethistown()
person2.intro()


// -----------------write a class to calculate the Uber price.----------------------------

class Uber{
    constructor(passengername,kmstravelled){
        this.passengername = passengername
        this.basefare = 20;
        this.costperkm = 5;
        this.kmstravelled = kmstravelled

    }

    providebill(){
        console.log(`${this.passengername} have to pay ${this.basefare +this.kmstravelled*this.costperkm}`)

    }
}

let passenger1 = new Uber("archana",50)
passenger1.providebill()

//-----------------------------------movie-------------------------------------------------

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}


let myMovie = new Movie("Casino Royale", "Eon Productions");
console.log(myMovie);

//--------------------------------CIRCLE--------------------------------------------------------

class Circle{
    constructor(radius){
        this.radius= radius
    }

    setradius(radius){
         this.radius = radius
    }

    setcolor(color){
        this.color = color;
    }

    getcircumference(){
        return 2*Math.PI*this.radius
    }
}


let cir1 = new Circle(52)
console.log(cir1.getcircumference())

//-------------------------------------------------------------------------------------------
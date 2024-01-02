let xml = new XMLHttpRequest()
// console.log(xml)
xml.open("GET","https://restcountries.com/v3.1/all")
xml.send()
xml.onload=function(){
    const data = JSON.parse(xml.response)
    console.log(data)
}
console.log(xml.response)

xml.onload = function() {
    const data = JSON.parse(xml.response);

    // Get all the countries from Asia continent /region using Filter function
    let asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    let smallCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallCountries);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
        console.log('Name:', country.name, ', Capital:', country.capital, ', Flag:', country.flag);
    });

    // Print the total population of countries using reduce function
    let totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    console.log('Total population:', totalPopulation);

    // Print the country that uses US dollars as currency.
    let usdCountries = data.filter(country => country.currencies.includes('USD'));
    console.log('Countries that use US Dollars:', usdCountries);
}

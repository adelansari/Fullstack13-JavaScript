// /*
// 1. Fix the bugs in the codes below, to make the console print out different numbers
// from 0 to 100
//  */

// // Answer: declaring the variable as 'let' instead of 'var'
// const printNum = () => {
//     for (let i = 0; i <= 100; i++) {
//         setTimeout(() => console.log(i), 1000)
//     }
// }

// printNum()


/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
const fixDate = (array) => {
    /* provide your code here */
    for (let iDate = 0; iDate < myArr.length; iDate++) {
        const dateSplit = myArr[iDate].split('-');
        dateSplit.sort(function (a, b) { return a - b });
        const dataOrder = [dateSplit[1], dateSplit[0], dateSplit[2]].join("-");
        myArr[iDate] = dataOrder;
    }
    return myArr;
}
let newArr = fixDate(myArr)
console.log(newArr)

/*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
const dateFrom = new Date(500000)
const dateTo = new Date(1000000000)
const counter = (from, to) => {
    /* provide your code here */
    const dataDays = Math.floor((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24));
    const dataHours = dateTo.getHours() - dateFrom.getHours();
    const dataMinutes = dateTo.getMinutes() - dateFrom.getMinutes();
    const dataSeconds = dateTo.getSeconds() - dateFrom.getSeconds();
    const timerText = dataDays + " days - " + dataHours + " hours - " + dataMinutes + " minutes - " + dataSeconds + " seconds"

    return timerText
}
const timer = counter()
console.log(timer)

/* 
4. Check the url and read documentation: https://restcountries.com
- Write a function to get all countries, sorted in alphabetical order
- Write a function to find one country based on the search input
The data fetched from url should be displayed in index.html.
*/

const getAllCountries = () => {
    /* provide your code here */
    const allCountriesUrl = "https://restcountries.com/v3.1/all?fields=name"
    fetch(allCountriesUrl)
        .then(res => res.json())
        .then((data) => {
            let countryNames = [];  // initializing an array to store country names
            data.forEach(dataObj => {
                countryNames.push(...[dataObj.name.common]);  // separating country name from the rest of the data and appending it to countryNames array
            });
            const countriesSorted = countryNames.sort(); // sorting country names alphabetically in the array
            console.log(countriesSorted)
        })
        .catch(() => {
            console.log("There was an error in fetching the country names.")
        });
}

const getSingleCountry = (countryInput) => {
    /* provide your code here */
    const singleCountryUrl = "https://restcountries.com/v3.1/name/" + countryInput  // adding the searched country name to url
    fetch(singleCountryUrl)
        .then(res => res.json())
        .then((data) => {
            const countryName = data[0].name.common;
            const countryFullName = data[0].name.official;
            const countryFlag = data[0].flags.png;

            // To embed google map based on the countryName. For the sake of this assignment, I have decided to remove the api key.
            // const googleMapUrl = "https://www.google.com/maps/embed/v1/place?q=" + countryName + "&key=" + googleApiKEY;
            // googleMapFrame = document.getElementById("googleMap");
            // googleMapFrame.src = googleMapUrl;
        })



}

getAllCountries()

// /*
// 5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
// it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
// If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
// to array, and so on.
// */

// const generateNewFolderName = (existingFolders) => {
//     /*  provide your code here */
// }

// let folder = []
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// generateNewFolderName(folder)
// console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

// /*
// 6. Complete class Book:
// - class Book should have 3 properties: title (read-only, must be a string but cannot be empty), cost (private, must be positive number) and profit (private, positive number > 0 and =< 0.5)
// (error should be thrown if data is not valid)
// - give the logic to get book's price and profit separately.
// - give the logics to increase and decrease the price with a certain amount
// - give the logic to calculate price based on cost and profit. For example: cost 14, profit 0.3 => expected price is 20.

// Complete class TaxableBook:
// - inherit Book, but have 1 more private parameter in the constructor: taxRate.
// - give the logic to calculate price with taxRate. For example:
// cost 14, profit 0.3 , tax 24% => expected price is 30.43
// */
// class Book {
//     _title
//     constructor(title, cost, profit) {
//     }
// }

// class TaxableBook {
//     /* provide your code here */
// }

// const book1 = new Book("The Power of Habits", 14, 0.3)
// const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24)
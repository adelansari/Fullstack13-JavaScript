/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

// Answer: declaring the variable as 'let' instead of 'var'
const printNum = () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

printNum()


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
    const dataDays = to.getDate() - from.getDate();
    const dataHours = to.getHours() - from.getHours();
    const dataMinutes = to.getMinutes() - from.getMinutes();
    const dataSeconds = to.getSeconds() - from.getSeconds();
    const timerText = `${dataDays} days - ${dataHours} hours - ${dataMinutes} minutes - ${dataSeconds} seconds`;

    return timerText
}
const timer = counter(dateFrom, dateTo)
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
                countryNames.push(dataObj.name.common);  // separating country name from the rest of the data and appending it to countryNames array
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

            // To embed google map based on the countryName
            const googleMapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${countryName}&output=embed`;
            console.log(googleMapUrl)
            googleMapFrame = document.getElementById("googleMap");
            googleMapFrame.src = googleMapUrl;
        })
        .catch(() => {
            console.log("Please enter a correct country name.")
        });

}

getAllCountries()

/*
5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

const generateNewFolderName = (existingFolders) => {
    /*  provide your code here */
    const folderExist = existingFolders.includes('New Folder');
    if (!folderExist) {
        folder.push('New Folder')
    } else {
        for (let i = 0; i < existingFolders.length; i++) {
            if (!existingFolders.includes(`New Folder (${i + 1})`)) {
                folder.push(`New Folder (${i + 1})`);
                break;
            }
        }
    }
}

let folder = []
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
generateNewFolderName(folder)
console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

/*
6. Complete class Book:
- class Book should have 3 properties: title (read-only, must be a string but cannot be empty), cost (private, must be positive number) and profit (private, positive number > 0 and =< 0.5)
(error should be thrown if data is not valid)
- give the logic to get book's price and profit separately.
- give the logics to increase and decrease the price with a certain amount
- give the logic to calculate price based on cost and profit. For example: cost 14, profit 0.3 => expected price is 20.

Complete class TaxableBook:
- inherit Book, but have 1 more private parameter in the constructor: taxRate.
- give the logic to calculate price with taxRate. For example:
cost 14, profit 0.3 , tax 24% => expected price is 30.43
*/
class Book {
    _title;
    #cost;
    #profit;
    #price;
    constructor(title, cost, profit) {
        if (typeof title !== 'string' || title.length === 0) {
            throw new Error("⛔️ title property cannot be empty/must be a string.")
        } else if (!(cost > 0)) {
            throw new Error('⛔️ cost must be a positive number');
        } else if (!(profit > 0 && profit <= 0.5)) {
            throw new Error('⛔️ profit must stonks and be a positive number > 0 and <= 0.5');
        } else {
            this._title = title;
            this.#cost = cost;
            this.#profit = profit;
            this.#price = this.calculatePrice().toFixed(2);
        }

    }
    calculatePrice() {
        return this.#cost / (1 - this.#profit);
    }
    get bookTitle() {
        return this._title
    }
    get bookPrice() {
        return this.#price
    }
    get bookProfit() {
        return this.#profit
    }
    set increasePrice(amount) {
        this.#price += amount;
    }
    set decreasePrice(amount) {
        this.#price -= amount;
    }
}

class TaxableBook extends Book {
    #taxRate;
    #price;

    constructor(title, cost, profit, taxRate) {
        super(title, cost, profit);
        if (!(taxRate > 0)) {
            throw new Error("⛔️ taxRate must be a positive number");
        } else {
            this.#taxRate = taxRate;
            this.#price = (cost / (1 - profit - this.#taxRate / 100)).toFixed(2);
        }
    }
    get textableBookTitle() {
        return this._title
    }
    get taxRate() {
        return this.#taxRate;
    }
    get priceTaxed() {
        return this.#price;
    }
}

const book1 = new Book("The Power of Habits", 14, 0.3)
console.log(`${book1.bookTitle} price = ${book1.bookPrice}`);
console.log(`${book1.bookTitle} price = ${book1.bookProfit}`);
book1.increasePrice = 3;
console.log(`${book1.bookTitle} new price= ${book1.bookPrice}`);
book1.decreasePrice = 2;
console.log(`${book1.bookTitle} new price ${book1.bookPrice}`);

const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24)
console.log(`${book2.textableBookTitle} price with ${book2.taxRate}% tax is ${book2.priceTaxed}`);
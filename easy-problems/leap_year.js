// Check if the year is leapYear or not. If not then return false. Otherwise return true.
//  ==> year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)

function leapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)
}

let terget_year = 2021; 

console.log(leapYear(terget_year))
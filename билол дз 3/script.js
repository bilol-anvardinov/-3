function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true; 
    } else if (year % 400 !== 0) {
        return false; 
    } else {
        return true; 
    }
}

console.log(isLeapYear(2000));  
console.log(isLeapYear(2004));
console.log(isLeapYear(2100)); 
console.log(isLeapYear(2021));
//////////////////////////////////////////////
//Checking if a number is big
//////////////////////////////////////////////

const isBiggerThan100 = number => number > 100

console.log(isBiggerThan100(50))
console.log(isBiggerThan100(150))





//////////////////////////////////////////////
//Bouncer at a club
//////////////////////////////////////////////

const clubBouncerSays = (maxNumOfPeople, currentNumOfPeople, age) => {

    if (currentNumOfPeople >= maxNumOfPeople) {
       return "it's too busy now, come back later"
    } 
    if (age < 18) {
        return "this is a club for adults"
    } else {
        return "come in"
    }
}

console.log(clubBouncerSays(500, 501, 17));
console.log(clubBouncerSays(300, 100, 10));
console.log(clubBouncerSays(100, 120, 18));
console.log(clubBouncerSays(50, 13, 21));





//////////////////////////////////////////////
//Calculating the average
//////////////////////////////////////////////

const ages = [22, 64, 2, 17, 15];
const luckyNumbers = [4, 8, 22, 99, 555];
const russianGrades = [1, 2, 3, 4, 5];

const getAverageOf = numbers => {
    return Math.round(numbers.reduce((a, b) => a + b, 0) / numbers.length)
}

console.log(getAverageOf(ages));
console.log(getAverageOf(luckyNumbers));
console.log(getAverageOf(russianGrades));
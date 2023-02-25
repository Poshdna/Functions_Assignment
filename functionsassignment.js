//1. Write a program to check if a year is leap year or not.
//Nb: If a year is divisible by 4, then it is leap year.
function isLeapYear(year){
  if (year%4 === 0){
    return true
  }
  else{
    return false
  }
}
//Sample below
console.log(isLeapYear(2000)) // - True
console.log(isLeapYear(1998)) // - False

// 2. Write a function that accepts 2 parameters,length and breadth 
// of a rectangle, then checks if it is square or not.
function isSquareOrRectangle(length, breadth){
  if (length === breadth){
    return "This is a square"
  }
  else{
    return "This is a rectangle"
  }
}

//Sample below
console.log(isSquareOrRectangle(5,9))// - This is a rectangle
console.log(isSquareOrRectangle(8,8)) // - This is a Square


// 3. Write a function that allows a shop to give a discount of 10% 
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the  quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user.
function totalCost(quantity){
  let cost = quantity*100
  let discount = cost*0.1
  if (cost > 1000){
    return cost - discount
  }
  else {
    return cost
  }
}
console.log(totalCost(1))
console.log(totalCost(10))
console.log(totalCost(12))

// 4.  Profitable Gamble
// Create a function that takes three arguments prob, prize, pay 
// and returns true if prob * prize > pay; otherwise return false.
  
function profitableGamble(prob, prize, pay){
  if (prob * prize > pay){
    return true
  }
  else{
    return false
  }
}
//sample below
console.log(profitableGamble(0.2, 50, 9)) // ➞ true
console.log(profitableGamble(0.9, 1, 2)) // ➞ false
console.log(profitableGamble(0.9, 3, 2)) // ➞ true

// 5. Two Makes Ten
// Create a function that takes two arguments.
//  Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(intA, intB){
  if ((intA === 10 || intB === 10) || (intA + intB === 10)){
    return true
  }
  else {
    return false
  }
}
//sample below
console.log(makesTen(9, 10)) // ➞ true
console.log(makesTen(9, 9))// ➞ false
console.log(makesTen(1, 9))// ➞ true

// 6. Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(input1, input2){
  if (input1.length === input2.length){
    return true
  }
  else {
    return false
  }
}
//Sample below
console.log(comp("AB", "CD")) // ➞ true
console.log(comp("ABC", "DE")) // ➞ false
console.log(comp("hello", "edabit")) // ➞ false


// 7. Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised){
  if ((age >= 15) || (isSupervised === true)) //|| ((age >= 15) && (isSupervised === false)))
  { 
    return true
  }
  else {
    return false
  }
}
//Sample below
console.log(acceptIntoMovie(14, true)) //➞ true
console.log(acceptIntoMovie(14, false)) //➞ false
console.log(acceptIntoMovie(16, false))// ➞ true
console.log(acceptIntoMovie(18, true))// ➞ true


// 8. Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.
function oddOrEven(input){
  if (input.length%2  === 0){
    return true
  }
 else {
   return false
 }
}
//Sample below
console.log(oddOrEven("apples")) // ➞ true
console.log(oddOrEven("pears")) // ➞ false
console.log(oddOrEven("cherry")) // ➞ true

// 9. Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(strName){
  if (strName.charAt(strName.length - 1) === "n"){
    return true
  }
  else {
    return false
  }
}
//Sample below
console.log(isLastCharacterN("Aiden")) // ➞ true
console.log(isLastCharacterN("Piet")) // ➞ false
console.log(isLastCharacterN("Bert")) // ➞ false
console.log(isLastCharacterN("Dean")) // ➞ true


// 10. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word){
  if (word.charAt(word.length - 1) === "s"){
    return true
  }
  else {
    return false
  }
}
//Sample Below
console.log(isPlural("changes")) // ➞ true
console.log(isPlural("change")) //➞ false
console.log(isPlural("dudes")) // ➞ true
console.log(isPlural("magic")) // ➞ false


// 11. The Fifth Argument
// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
function fifth(){
  if (arguments.length >= 5) {
    return typeof(arguments[4])
  }
  else {
    return "Not enough arguments"
  }
}
//Sample below
console.log(fifth(1, 2, 3, 4, 5)) // ➞ "number"
console.log(fifth("a", 2, 3, true, "five")) // ➞ "string"
console.log(fifth()) // ➞ "Not enough arguments"


// 12.Taxi Journey
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

function journeyDistance(cost){
  if ((cost-3 === 0) || (cost-3 < 0)){
    return 1
  }
  if (cost-3 > 0) {
    return (cost-3) /2 + 1
  }
}
//Examples
console.log(journeyDistance(3)) //➞ 1
// The first kilometer costs $3
console.log(journeyDistance(9)) // ➞ 4
// The first kilometer costs $3 plus the other three kilometers (costing $2 each)
console.log(journeyDistance(5)) // ➞ 2



// 13. Days in a Month
// Create a function that takes the month and year (as integers) and returns the number of days in that month.
function days(month, year){
    return new Date(year, month, 0).getDate()
  }
  //Sample below
  console.log(days(2, 2018)) // ➞ 28
  console.log(days(4, 654)) // ➞ 30
  console.log(days(2, 200)) // ➞ 28
  console.log(days(2, 1000)) // ➞ 28
  
  
  // 14. Word without First Character
  // Create a function that takes a word and returns the new word without including the first character.
  function newWord(oldWord){
    return oldWord.substring(1)
  }
  //Sample below
  console.log(newWord("apple")) // ➞ "pple"
  console.log(newWord("cherry")) // ➞ "herry"
  console.log(newWord("plum")) // ➞ "lum"
  

  // 15. Concatenating First and Last Character of a String
  // Create a function that takes a string and returns the concatenated first and last character.
  function firstLast(strInput){
    result = `${strInput.charAt(0)}${strInput.charAt(strInput.length-1)}`
    console.log(result)
    return result
  }
  //Sample below
  firstLast("ganesh") //➞ "gh"
  firstLast("kali") //➞ "ki"
  firstLast("shiva") //➞ "sa"
  firstLast("Salman") //➞ "Sn"
  firstLast("Adeyemi") //➞ "ai"

  // 16. The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).
function wumbo(input){
    result = input.replaceAll("M", "W")
    return result.toUpperCase()
  }
  //Sample below
  console.log(wumbo("I LOVE MAKING CHALLENGES")) // ➞ "I LOVE WAKING CHALLENGES"
  console.log(wumbo("MEET ME IN WARSAW")) // ➞ "WEET WE IN WARSAW"
  console.log(wumbo("WUMBOLOGY")) // ➞ "WUWBOLOGY"
  
  
  // 17. Reverse the Order of a String
  // Create a function that takes a string as its argument and returns the string in reversed order.
  function reverse(strInput){
    result = strInput.split("").reverse().join("")
    console.log(result)
    return result
  }
    
  //Sample below
  reverse("Hello World") //➞ "dlroW olleH"
  reverse("The quick brown fox.") // ➞ ".xof nworb kciuq ehT"
  reverse("Edabit is really helpful!") // ➞ "!lufpleh yllaer si tibadE"

  // 18. Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2){
    if (str1.endsWith(str2)){
      return true
    }
    else{
      return false
    }
  }
  
  //Examples
  console.log(checkEnding("abc", "bc")) //➞ true
  console.log(checkEnding("abc", "d")) //➞ false
  console.log(checkEnding("samurai", "zi")) // ➞ false
  console.log(checkEnding("feminine", "nine")) // ➞ true
  console.log(checkEnding("convention", "tio")) //➞ false

  // 19. Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
function getMiddle(strInput){
    if (strInput.length % 2 === 0){
      return strInput.charAt(strInput.length/2 -1) + strInput.charAt(strInput.length/2) 
    }
    else {
      return strInput.charAt(strInput.length/2)
    }
  }
  //Sample below
  console.log(getMiddle("test"))// ➞ "es"
  
  console.log(getMiddle("testing")) //➞ "t"
  
  console.log(getMiddle("middle")) //➞ "dd"
  
  console.log(getMiddle("A")) //➞ "A"
  
  
  // 20. Is the Word Singular or Plural? solved already!
  // Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
  
  // Sample below
  // isPlural("changes") ➞ true
  // isPlural("change") ➞ false
  // isPlural("dudes") ➞ true
  // isPlural("magic") ➞ false
arr=('1,2,3,4,5')
console.log(arr)
console.log(arr.length)
newArr = arr.split(',')
console.log(newArr)
console.log(newArr.length)
newArr.shift()
newArr.pop()
console.log(newArr)
let newerArr = newArr.join(" ")
console.log(newerArr)

let data =[]
data.push(3,4,5,6,7)
console.log(data)
data.pop()
console.log(data)
data.unshift(0,1,2)
console.log(data)
data.shift()
console.log(data)
data.push(7)
console.log(data)


function array(arr){
 let newArr = arr.split(',')
if (newArr.length < 3){
  return null
}else if (arr.length === 0){
  return null
}else{
newArr.shift()
 newArr.pop()
 return newArr.join(" ")
}
}
console.log(array('1,2,3,4,5'))


let numbers = [2,3,4]
let newNumber=[]
  numbers.forEach(function (number) {
  let result = ''
  for (let i=1; i<=10; i++){
    result = result + `${number} * ${i} = ${i*number}\n`
  }
    newNumber.push(result)
  return result
})
console.log(newNumber)



// for looping -iteration
str=""
for (i=0; i<= 10; i++){
  result = `str * i = str + i`
}

result = ""
function countSheep(num){
  for (let i=1; i <= num; i++){
   //result += i + "sheep..."
   result = result + i + "sheep..."
  }
   return result
}
console.log(countSheep(5))


function multiTable(number) {
  let result = ''
  for (let i=1; i<=10; i++){
    result = result + `${i} * ${number} = ${i*number}\n`
  }
  return result
}
console.log(multiTable(5))


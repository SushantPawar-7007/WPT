let arr = [12,"www" , true, 34.5]

arr.push(10)
arr.push(20,30,40)

console.log(arr,typeof(arr),arr.length)

//access array element 
console.log(arr[3])
//let v =arr.pop()
//console.log(v)

arr.splice(3)
console.log("final array",arr)

//to search whether element is in the array 
let index = arr.indexOf('www')
if(index < 0)
    console.log("not found")
else
    console.log("first occurence on index",index)

arr.splice(1,0,"alpha","beta","theta")
console.log(arr)




arr = [1,2,3,4,5]

console.log(arr.join('-'))

console.log(arr)

arr = [1,2,3,4,5]

console.log(arr.shift())


arr = [1,2,3,4,5]

console.log(arr.splice(1,3))


arr = [1,2,3,4,5]
console.log(arr.push(101010))
console.log(arr)
console.log()

arr1 = [1,2,3]
arr2 = [4,5,6]

arr3 = [arr1,arr2]
console.log(arr3);
console.log(...arr3);

p = [123,7,5,46,3,2,111,2,3,4,4,444]
console.log(p.sort((a,b) => b-a)); // gede depan
console.log(p.sort((a,b) => a-b)); // gede depan


for (let index of p) console.log(index)

p.map((value,index)=>{
    console.log(value, ' ini looping map index', index)
})
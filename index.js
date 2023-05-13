// console.log(5===4);

// let test1 = true && "banana";

// console.log(test1);


// let test2 = undefined ?? "banana2";
// // let test2 = null ?? "banana2";
// console.log((3>2)===true);

// console.log("---Animal Checker Program---");

// let animal = "Dog";
// if(animal === "Cat"){
//     console.log("Meow");
// }else if(animal==="Dog"){
//     console.log("Woof");
// }else{
//     console.log("Must be an alien");
// }

// console.log("---Animal Check Complete")

// let chill = ()=>{
//     console.log("Doing some chilling");
//     for(let i =1;i<=10;i++){
//         console.log(`Chill...${i}`);
//     }
//     console.log("That was ice cold");
// }
// chill();


// let arr = ["Venus","Mercury","Earth","Mars"]
// console.log(arr);
// arr.push("Jupiter");
// console.log(arr);
// arr.unshift("Sun");
// console.log(arr);
// // arr.pop();
// arr.pop();
// console.log(arr);

// let multiple = 5;
// let arr = [10,11,12,13,14,15];

// for(let i=0;i<arr.length;i++){
//     console.log(`${arr[i]} X ${multiple} = ${arr[i]*multiple}`);
// }

// for(let i of arr) {
//     console.log(`${i} x ${multiple} = ${i*multiple}`);
// }

// let bools = [true,true,false,true,false,false]

// let newArr = bools.map((bool)=>{
//     if(bool===true){
//         return Math.ceil(Math.random()*10);
//     }else{
//         return 0
//     }
// })
// console.log(bools);
// console.log(newArr);


// const prices= [1.23, 19.99, 85.2, 32.87, 8, 5.2]
// let taxedPrices = prices.map((price)=>{
//     if(price>10){
//         return price+(price/5)
//     }
//     return price;
// })
// console.log(prices);
// console.log(taxedPrices);

// const items =["light", "banana","phone","book","mouse"]

// let plural = items.map((item)=>{
//     if(item==="mouse")
//     return "mice";
//     return item+'s';
// })
// console.log(items);
// console.log(plural)

// let row = [10,20,30,40,50]

// let matrix = row.map((ele)=>{
//     ele = [ele]
//     return ele
// })
// console.log(matrix)


// const practice =[10,11,12,13,14,15,16,17,18,19,20];

// const filterArr = practice.filter(num=>num%2===0);

// console.log(practice);
// console.log(filterArr);


// const countries = ["France", "South Africa", "United States", "Brazil", "Sweden"];

// const newCountries = countries.filter(country=>country.includes(" "))

// console.log(newCountries)


// const values = [[1,2,3],[0,0,1],[3,6,9],[0,1,2]];

// const hasTwo = values.filter((value)=>{
//     if(value.includes(2)){
//         return true;
//     }
// })

// console.log(hasTwo)

// const nums = [10,20,30,40,50]
// .map(num=>num*2)
// .filter(num=>num>50)

// const timesTwo = nums.map(num=>num*2);

// const over50 = timesTwo.filter(num=>num>50);
// console.log(nums)
// console.log(timesTwo)
// console.log(over50)


// find sum using reduce method
// const practice =[10,11,12,13,14,15,16,17,18,19,20];

// const sum = practice.reduce((result,item) => {
//     console.log(result,item);
//     return result + item;
// },0)



let myMap = new Map();
myMap.set(1,"Uno");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");
console.log(myMap);



myMap.forEach((value,key)=>{
    console.log(key,value);

}
)



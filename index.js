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


// const myMap = new Map();
// console.log(myMap);

// myMap.set("name","Abhishek");
// myMap.set("age",19);

// console.log(myMap.values());

// console.log(myMap.size);

// console.log(myMap.delete("age"));
// console.log(myMap.size)

// myMap.set(["name","hello"],["abhu","abhishek","abhi"]);
// console.log(myMap);


// const mexico = new Map();

// mexico.set("id",24);
// mexico.set("name","Mexico");
// mexico.set("capital","Mexico City");
// mexico.set("neighbours",["USA","Guatemala","Belize"]);

// console.log(mexico);
// mexico.set("id",25);
// console.log(mexico);

// mexico.get("neighbours").push("Honduras");

// console.log(mexico);

// const banana = {name : "banana", quantity: 1, price: 1.95}
// const apple = {name : "apple", quantity: 1, price: 1.45}
// const candy = {name : "candy", quantity: 1, price: 3.50}

// const store = new Map();

// store.set("storeNumber",5)
// store.set("lacationCity","Milan")
// store.set("lacationCountry","Italy")
// store.set("products",[banana,apple,candy])

// console.log(store.get("products"));
// console.log(store.get("products")[2]);
// store.get("products")[0]["price"]= 1.75

// console.log(store , banana);
// candy.price = 4.9
// console.log(store, candy);



// const houseForSale = new Map();

// houseForSale.set("area",90);
// houseForSale.set("Value",320000);
// houseForSale.set("streetName","Fifth Street");
// houseForSale.set("built","2012");
// houseForSale.set("owner",{name: "Blake",age:29});
// houseForSale.set("offer",[290000,295000,315000,312000]);

// console.log(houseForSale);

// houseForSale.delete("built");
// console.log(houseForSale);


// const newF = houseForSale.get("offer").reduce((result,price)=> {
//     if(result>price) return result;
//     else return price
// },0)
// console.log(newF);

// houseForSale.set("sale price", 312000);
// console.log(houseForSale);



// const myConsole = new Map();

// myConsole.set("log",(message)=>{console.log(message)})

// myConsole.get("log")("What's upp");


// myConsole.set(1,"number one");
// myConsole.set("1","string one");

// console.log(myConsole.get(1));
// console.log(myConsole.get("1"));


// console.log(myConsole);








//------------------------------------- THE  BEST  QUESTION-------------------------------------------------------------------------



// const numbers = [10, 20, 15 ,30, 15, 20, 35 ,60, 10]

/*
find the duplicate value in "numbers" and prnint out the index
of that value as well as the index of where it was first found in "numbers"
*/


// const map = new Map();
// const dup = new Map();
// let dup = [];
// numbers.forEach((value,index)=>{
//     if(map.has(value)) {
//      console.log(index,map.get(value));
//     } else{
//         map.set(value,index);
//     }
// });
// for(let i = 0; i< numbers.length;i++){
//     if(map.has(numbers[i])){
//         console.log(i,map.get(numbers[i]));
//         break;
//     }else{
//         map.set(numbers[i],i)
//     }
// }

// console.log(map);
// console.log(map);





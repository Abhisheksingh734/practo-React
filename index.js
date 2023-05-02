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

let multiple = 5;
let arr = [10,11,12,13,14,15];

for(let i=0;i<arr.length;i++){
    console.log(`${arr[i]} X ${multiple} = ${arr[i]*multiple}`);
}

// for(let i of arr) {
//     console.log(`${i} x ${multiple} = ${i*multiple}`);
// }
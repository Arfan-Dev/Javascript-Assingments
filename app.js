//  Question No 1

// function closureFun(num1) {
//     return function inner(num2) {
//         console.log(num1+num2);
//     }
// }
//  let add= closureFun(7)
//  add(5)

// function first(num1) {
//     return function (num2) {
//         console.log(num1+num2);
//         }
// }

// let second= first(10);
// second(6)

//  Question No 2
// let furite=["Apple", "Banana","Orange", "Grapess"]
// function details(arr, val) {
    
// }
// details(furite,"Apple")
// function recSearch(arr, l, r, x) 
// { 
//     if (r < l) 
//         return -1; 
//     if (arr[l] == x) 
//         return l; 
//     if (arr[r] == x) 
//         return r; 
//      return recSearch(arr, l+1, r-1, x); 
// } 
    
//     // Driver Code 
//     let arr = [12, 34, 54, 2, 3]; 
//     let i; 
//     let n = arr.length; 
//     let x = 23; 
//     let index = recSearch(arr, 0, n - 1, x); 
  
//     if (index != -1){
//       document.write(`Element ${x} is present at index ${index}`); 
//     }
//     else{
//         document.write("Element is not present " + x); 
//     }
//  Question No 3

// let myPara = document.querySelector("div");
// myPara.innerHTML = "<p>Pakistan Zindabad<p>"
// console.log(myPara);

// function addHtml(text) {
//     let myPara = document.querySelector("div");
//     myPara.innerHTML =  text//"<p>Pakistan Zindabad<p>"
// }

// addHtml("<p>Pakistan Zindabad<p>")

//  Question No 4

// function addHtml(text) {
//     let myListItem = document.querySelector("ul");
//     myListItem.innerHTML =  text //"<p>Pakistan Zindabad<p>"
// }

// addHtml("<li>Pakistan Zindabad<li>")

//  Question No 5

// function addHtml(value,text) {
//     let myListItem = document.querySelector(value);
//     myListItem.style.backgroundColor = "#192";
//     myListItem.innerHTML = "<h1>"+ text+ "</h1>" //"<p>Pakistan Zindabad<p>"
// }

// addHtml("div", "Pakistan" )

//  Question No 6
// let employee= {
//     name: "Arfan",
//     age:29,
//     designation: "Operator",
//     isMarried: false
// }

// function toStore(key, obj) {
    // let stringify = JSON.stringify(obj);
    // localStorage.setItem(key, stringify); 
// }

// toStore("employeeRecord", employee)
// let prevRecord = localStorage.getItem("employeeRecord");
// console.log(prevRecord);

// Question No 7

// function toGetGata(key) {
//     let record = localStorage.getItem(key);
//     let localRecord =JSON.parse(record);
//     return localRecord
// }
// let getRecord=toGetGata("employeeRecord")
// console.log(getRecord);

// Question No 8
let human= {
    name: "Arfan",
    age:30,
    eyeColor: "Black",
    hieght: 5.7
}
const keys = Object.keys(human);
const value = Object.values(human);
const entries=Object.entries(human);
function saveData(obj){
    Object.entries(obj).forEach(([keys, value]) => {
        let stringify = JSON.stringify(value);
        localStorage.setItem(keys, stringify); 
    });
    let recordKey = localStorage.getItem(keys);
    let localRecordKey =JSON.parse(recordKey);
    let recordValue = localStorage.getItem(this.stringify);
    let localRecordValue =JSON.parse(recordValue);
    let object=  (`${localRecordKey}: ${localRecordValue}`)
    console.log(localRecordValue);
    console.log(localRecordKey);
    return object
   
    
}
let newObj=saveData(human)
console.log(newObj);
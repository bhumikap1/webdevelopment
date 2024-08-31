console.log("Bhumika Pawar");
fullName="bhumika pawar";
console.log(fullName);
instaFollow = true;
console.log(instaFollow);
//var can be re-decleared which is not a good practice for writing code:-
var Sec="cst spl";
var Sec="cst"
console.log(Sec);
//let is the best way of initializing a variable:-
let age=21;
age=44;
console.log(age);
const price=50;
//price=10;
console.log(price);
let a;
console.log(a);
//const need to be initialized with declearation.
//let is a block scope variable eg:-
{
    let b=10;
    console.log(b);
}
{
    let b=24;
    console.log(b);
}
let x=BigInt("123");
let y=Symbol("hi!");

//object creation in js:-
const student = {
    fullName1: "Bhumika Pawar",
    age1: 21,
    cgpa: 9.5,
    ispass: true,
};
//to change the variable values:-
student["fullName1"] = "rahul sharma";
console.log(student["fullName1"]);

student["cgpa"] = 10;
// Task 1: Employee Bonus Calculator
console.log("TASK 1");

let name ="soundar";
let salary = 40000;
let experience = 5;
let bonus;
if(experience >= 5){
    bonus = salary * 0.20;
}
else if (experience >= 2 ){
    bonus = salary * 0.10;
}
else{
    bonus = salary *0.05;
}
console.log("Employee Name:", name);
console.log("Salary:", salary);
console.log("Experience:", experience, "years");
console.log("Bonus : ",bonus);
console.log("Final Salary : ",salary+bonus);



// Task 2: College Admission System
console.log("\nTASK 2");

let studentName = "Ravi";
let age = 24;
let percentage = 70;

if (age >= 17){
    if(percentage >= 60){
           console.log ("Admission Approved");
    }
    else{
    console.log ("Admission Rejected");
}
    
}
else{
    console.log ("Admission Rejected");
}



// Task 3: Food Delivery Menu
console.log("\nTASK 3");

let choice = 1;

switch(choice) {

    case 1:
    console.log("Order Confirmed : Pizza");
    break;

    case 2:
    console.log("Order Confirmed : Burger");
    break;

    case 3:
    console.log("Order Confirmed : Shawarma");
    break;

    case 4:
    console.log("Order Confirmed : Fried Rice");
    break;

    default:
    console.log("Invalid Menu Selection");

};



//Task 4: Attendance Tracker
console.log("\nTASK4");

let studentnames = [
    "Soundar",
    "Ravi",
    "Priya",
    "Sakthi",
    "Selvi",
    "Swetha",
    "Arul",
    "Sam",
    "Priya",
    "Siva"
]
      
for (let students of studentnames){
    console.log(students);
}

console.log("\nTotal Students:", studentnames.length);



//Task 5: E-Commerce Cart
console.log("\nTASK 5");

let cart = [
   { product: "Mobile", price: 15000 },
   { product: "Headset", price: 2000 },
   { product: "Charger", price: 1000 }
]

for(let products of cart){
    console.log(products.product);
}

let totalcartValue = 0;
for(let products of cart){
    totalcartValue += products.price;
}
console.log("\ntotal cart value : " ,totalcartValue);

let expensive = cart[0];

for (let products of cart) {
    if (products.price > expensive.price) {
        expensive = products;
    }
}
console.log("Most Expensive Product:", expensive.product +"-"+expensive.price);




// Task 6: Bank Account Management
console.log ("\nTASK 6");

let balance = 10000;

// Deposit function
function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}

// Withdraw function
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance");
    }
}
//Display remaining balance
function checkBalance() {
    console.log("Current Balance:", balance);
}

checkBalance();
deposit(5000);       
withdraw(3000);      
checkBalance();      




//Task 7: Movie Ticket Booking
console.log("\nTASK7");


let Age =19;

if(Age < 5 ){
    console.log("Free Ticket");
}
else if (Age >= 5 && Age <= 18 ){
    console.log("Ticket Price is ₹100");
}
else if (Age > 18 && Age <= 60){
    console.log("Ticket Price is ₹200");
}
else{
    console.log("Ticket Price is ₹120");
}



//Task 8: Online Shopping Discount
console.log("\nTASK 8");

let Purchase = 7000;
console.log("Original Amount : ",Purchase );

let discount = 0;

if(Purchase > 5000 ){
    discount = Purchase * 0.20;
    console.log("Discount : ",discount);
}
else if(Purchase > 3000 ){
    discount = Purchase * 0.10;
    console.log("Discount : ",discount);
}
else if(Purchase > 1000){
    discount = Purchase * 0.05;
    console.log("Discount : ",discount);
}
else{
    console.log("NO Discount");
}

let FinalAmount = Purchase - discount;
console.log("Final Amount : ",FinalAmount);



//Task 9: Food Inventory System
console.log("\nTASK 9");

let Foods = ["Rice","Oil","Sugar","Milk","Egg"]

// Add 2 items
Foods.push("Bread");
Foods.push("Salt");

// Remove first item
Foods.shift();

// Remove last item
Foods.pop();

// Check whether "Milk" exists
if (Foods.includes("Milk")) {
    console.log("Milk exists");
} else {
    console.log("Milk does not exist");
}

// Print final inventory
console.log("Final Inventory:");
for (let food of Foods) {
    console.log(food);
}




//Task 10: Hospital Patient Management
console.log("\n TASK 10");

let details ={
  patientName : "Siva",
  agE : 27,
  disease : "Skin",
  doctor  : "Dr.Subash"
}

for (let key in details) {
    console.log(key + ":", details[key]);
}

//Use destructuring to extract values.
let { patientName,agE,disease,doctor} = details ;

console.log("\nUsing Destructuring:");
console.log("Patient Name:", patientName);
console.log("Age:", agE);
console.log("Disease:", disease);
console.log("Doctor:", doctor);



//Task 11: Amazon Order Tracker
console.log("\n TASK 11");

function  sendSMS(){
         console.log("SMS Sent To Customer");
       
}

function  placeOrder(callback){
          console.log("Order Placed Successfully");
          callback();
}

placeOrder(sendSMS);



//Task 12: Cashback Offer Generator
console.log("\n TASK 12");


function* gen(){
    yield "10% Cashback"
    yield "20% Cashback"
    yield "Free Delivery"
    yield "Buy 1 Get 1"
}

let allVal = gen()

 console.log(allVal.next().value);
 console.log(allVal.next().value);
 console.log(allVal.next().value);
 console.log(allVal.next().value);



 //Task 13: Employee Database
console.log("\n TASK 13");

 let employee = [
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kavin",salary:30000},
 {id:3,name:"John",salary:40000}
]

for (let employees of employee){
    console.log(employees.name)
}

TotalSalary =0;
for (let employees of employee){
    TotalSalary +=employees.salary;
}
console.log("Total Salary : ", TotalSalary);

let highestSalary = employee[0];

for (let employees of employee) {
    if (employees.salary > highestSalary.salary) {
        highestSalary = employees;
    }
}

console.log(
    "Highest Salary Employee:",
    highestSalary.name + " - " + highestSalary.salary
);



//Task 14: Railway Reservation System
console.log("\n TASK 14")


let totalSeats = 50;

// Book seats using function.
function bookSeats(seats) {
    if (seats <= totalSeats) {
        totalSeats -= seats;
        console.log(seats + " seats booked successfully.");
        console.log("Available Seats:", totalSeats);
    } else {
        console.log("Booking Rejected! Seats unavailable.");
    }
}


bookSeats(10);
bookSeats(50);


//Task 15: Mobile Store Billing System
console.log("\n TASK 15");

let products = {
    Mobile: 20000,
    Laptop: 55000,
    Headphone: 2500,
    Smartwatch: 5000
};

// Customer selects products
let selectedProducts = ["Mobile","Laptop", "Headphone", "Smartwatch"];

let totalAmount = 0;

console.log("\nSelected Products:");

for (let i = 0; i < selectedProducts.length; i++) {
    let item = selectedProducts[i];
    console.log(item + " - ₹" + products[item]);
    totalAmount += products[item];
}

// GST Calculation
let gst = totalAmount * 18 / 100;
let finalBill = totalAmount + gst;

// Print Bill
console.log("\nTotal Amount: ₹" + totalAmount);
console.log("GST (18%): ₹" + gst);
console.log("Final Bill: ₹" + finalBill);


//
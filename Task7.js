// Task 1: Traffic Signal Management
console.log("   Task 1");

let signal = "Red";

switch (signal.toLowerCase()){
    case "red":
        console.log("Stop");
        break;
    
    case "yellow":
        console.log("Get ready");
        break;
        
    case "green":
        console.log("Go");
        break;    

    default:
        console.log ("Invalid signal color");  
}



// Task 2: Employee Attendance Report
console.log("\n   TASK 2");

for(let i = 1; i <= 30 ; i++){
    console.log("Employee",i, "Present");
}



// Task 3: ATM Cash Withdrawal
console.log("\n   TASK 3");

let balance = 10000;

while(balance >= 500){
     balance -= 500;
     console.log("Remaining Balance: ₹" + balance);
}



//Task 4: College Admission Eligibility
console.log("\n   TASK 4");

let age = 18;
let percentage = 75;
let entranceExamPassed = true;


if ( age >=18 ){
    if ( percentage >= 70){
        if (entranceExamPassed){
            console.log("Admission Approved");
        }
        else{
            console.log("Admission Rejected: Entrance exam not passed");
        }
    }
    else{
        console.log("Admission Rejected: Percentage is below 70");
    }
}
else{
     console.log("Admission Rejected: Age is below 18");
}



// Task 5: Food Delivery Status
console.log("\n  TASK 5");


function Fooddeliverydetails(customerName,foodItem,deliveryAddress){
    console.log("Delivery Confirmation");
    console.log("Customer Name: " + customerName);
    console.log("Food Item: " + foodItem);
    console.log("Delivery Address: " + deliveryAddress);
    console.log("Your order has been successfully placed and will be delivered soon.");
}

Fooddeliverydetails("soundar","Pizza","Salem");



// Task 6: Salary Processing System
console.log("\n TASK 6");

function calculateSalary(basicSalary ,allowance){
     let totalSalary = basicSalary + allowance;
     return totalSalary;
}

function calculateBonus(salary){
     return salary * 0.10;
}

let salary = calculateSalary(30000, 5000);
let bonus = calculateBonus(salary);

console.log("Total Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Final Salary: ₹" + (salary + bonus));


//Task 7: E-commerce Discount Engine
console.log("\n   TASK 7");


function applyDiscount(totalAmount, callback){

     let discount = totalAmount * 0.10;
     let FinalAmount = totalAmount - discount;

     console.log("Original amount : ₹"+ totalAmount);
     console.log("Discount : ₹" + discount);
     callback (FinalAmount);
}

function generateInvoice(FinalAmount){
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + FinalAmount);
}


applyDiscount( 5000, generateInvoice)


// Task 8: Promotional Offers
console.log("\n  TASK8");

function* Offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = Offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Task 9: Student Database Merge
console.log("\n   TASK 9");


let scienceStudents = ["soundar","anbu","siva"]
let commerceStudents = ["swetha", "harini","gokila"]

let students =[...scienceStudents, ...commerceStudents]

console.log(students);

// Task 10 Online Exam System
console.log("\n   TASK 10");


function totalMarks(studentName, ...marks){
    let total = 0;
    
    for (let mark of marks){
        total += mark;
    }

    console.log("student Name : ",studentName);
    console.log("Total Marks : ", total);
}

totalMarks("Soundar", 85, 90, 78, 88, 95);

//Task 11: Employee Profile
console.log("\n  TASK 11");


let employees = {
    name : "Soundar",
    department : "CSE",
    Salary : 40000,
    experience : "1 year"
}

let {name,department,Salary,experience} = employees ;
console.log (name,department,Salary,experience);


//Task 12: Product Inventory Filter
console.log("\n   TASK 12");

let products = [
    { name: "Laptop", price: 55000  },
    { name: "Mouse", price: 800  },
    { name: "Mobile", price: 18000 },

];

let expensiveProducts = products.filter(product => product.price > 5000);
console.log(expensiveProducts);


//Task 13: Find First Premium Customer
console.log("\n   TASK 13");


let customers = [
    { name: "Soundar", purchaseAmount: 25000 },
    { name: "Anbu", purchaseAmount: 45000 },
    { name: "Siva", purchaseAmount: 60000 },
    { name: "Harini", purchaseAmount: 80000 }
];

let premiumCustomer = customers.find(customer => customer.purchaseAmount > 50000 );

console.log(premiumCustomer);


//Task 14: Company Expense Tracker
console.log("\n   TASK 14");

let expenses = [5000, 12000, 8000, 15000, 10000];

let totalExpenses = expenses.reduce((acc, expense) => {return acc + expense;}, 0);

console.log("Total Company Expenses: ₹" + totalExpenses);

//Task 15: Gaming Tournament Verification
console.log("\n    TASK 15");

let Players = [
    { name: "Soundar", age: 20 },
    { name: "Anbu", age: 22 },
    { name: "Siva", age: 19 },
    { name: "Harini", age: 21 }
];

let allAbove18 = Players.every(player => player.age >= 18);

console.log("All players above 18:", allAbove18);



//Task 16: Job Portal Search
console.log("\n   TASK 16");

let candidates = [
  { name: "Arun", skills: ["HTML", "CSS"] },
  { name: "Bala", skills: ["JavaScript", "React"] },
  { name: "Charan", skills: ["Python"] }
];

let knowsReact = candidates.some(candidate => candidate.skills.includes("React"));

console.log(knowsReact);

//Task 17: Mobile Number Validator
console.log("\n TASK 17")


let str = "7810074750"

if (
  str.length === 10 &&
  (str.startsWith("6") ||
   str.startsWith("7") ||
   str.startsWith("8") ||
   str.startsWith("9"))
) {
  console.log("Valid number");
} 
else {
  console.log("Invalid number");
}


//Task 18: URL Slug Generator
console.log("\n TASK 18")


let str1 = "Learn JavaScript Complete Course";

let a = str1
  .toLowerCase()
  .split(" ")
  .join("-");

console.log(a);


//Task 19: Employee Sorting Dashboard
console.log ("\n   TASK 19")


let salarY = [70000,50000,100000,23000,10000,30000]

let lowToHigh = salarY.sort((a,b)=> a - b);

console.log("Low → High",lowToHigh);

let highToLow = salarY.sort((a,b)=> b - a);

console.log("High → Low",highToLow);


//Task 20: Movie Booking System
console.log("\n    TASK 20");

let movies = ["Leo", "Jawan", "KGF", "Vikram"];

let bookingId = movies.map((movie, index) => {
  return movie + "-BOOKING-" + (index + 1);
});

console.log(bookingId);
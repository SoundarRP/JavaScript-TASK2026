// Task 1: Employee Salary Calculator Scenario

let BasicSalary = 25000;
let HRA = BasicSalary * 0.20;
let Bonus = BasicSalary * 0.10;
let Tax = (BasicSalary + HRA + Bonus) * 0.05;

let finalsalary = (BasicSalary + HRA + Bonus) - Tax;

console.log("Basic Salary : ",BasicSalary);
console.log("HRA : ",HRA);
console.log("Bonus : " , Bonus);
console.log("Tax : " ,Tax);
console.log("Final Salary : " ,finalsalary);


// Task 2: Student Grade System Scenario

let marks = Number(prompt("Enter Marks:"));

if (marks <= 100 && marks >= 90 ){
    console.log("Grade: A+");
}
else if (marks >= 80 && marks <= 89 ) {
    console.log("Grade: A");
}
else if (marks >= 70 && marks <= 79 ) {
    console.log("Grade: B");
}
else if (marks >= 60 && marks <= 69 ) {
    console.log("Grade: C");
}
else{
    console.log("Fail");
}


// Task 3: Login Authentication System Scenario

let username = "admin";
let password = "12345";

if ( username === "admin" ) {
          if (password === "12345"){
            console.log("Login Success");
          }
          else{
            console.log (" Invalid Password");
          }
    }
    else{
        console.log("  Invalid Username ");
    }

// Task 4: ATM Withdrawal Machine Scenario    

let Amount = Number(prompt("Enter withdrawal amount"));
let Balance = 5000;

if(Amount <= Balance){
    console.log("Withdrawal Success")
    console.log("Remaining balance: ", Balance - Amount);
}
else{
    console.log(" Insufficient Balance");
}

// Task 5: E-Commerce Discount System Scenario

let purchase = Number(prompt("Enter your Purchase Amount"));
let discount = 0;

if(purchase >= 10000){
    discount = purchase * 0.20 ;
}
else if(purchase >= 5000){
    discount = purchase * 0.10 ;
}
else if(purchase >= 2000){
    discount = purchase * 0.05;
}
else{
    console.log(" No Discount ");
}

let finalAmount = purchase - discount;
console.log("Original Amount : ",purchase);
console.log("Discount : ", discount);
console.log("Final Amount : ", finalAmount);


//Task 6: Traffic Fine Checker Scenario

let helmet = prompt("Do you have a helmet? (yes/no)");
let license = prompt("Do you have a license? (yes/no)");

if (helmet === "no" && license === "no"){
    console.log("Fine: ₹3000");
}
else if (helmet === "no"){
    console.log("Fine: ₹1000");
}
else if (license === "no"){
    console.log("Fine: ₹2000");
}
else {
    console.log("No Fine");
}

// Task 7: Employee Attendance Tracker Scenario

let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++){
    if (attendance[i] === "P") {
        presentDays++;
    }
    else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);

// Task 8: Product Inventory Management Scenario

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};
for ( let key in product){
    console.log(key + " : " + product[key]);
}


//Task 9: Cab Fare Calculator Scenario

let km = Number(prompt("Enter Distance in km"));
let fare = 0;

if (km <= 5){
    fare = km * 20;
}
else if (km <= 10){
    fare = (5 * 20) + ((km - 5) * 15);
}
else{
    fare = (5 * 20) + (5 * 15) + ((km - 10) * 10);
}

console.log("Total Fare :", fare);



// Task 10: Mini Employee Management System (Real Company Task) Requirements

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

for (let i = 0; i < employees.length; i++) {
    console.log(
    employees[i].id,
    employees[i].name,
    employees[i].salary
);
}

let highest = employees[0];
let lowest = employees[0];

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }
    totalSalary += employees[i].salary;
}

let totalEmployees = employees.length;

console.log("Highest Salary Employee:", highest.name, "-", highest.salary);
console.log("Lowest Salary Employee:", lowest.name, "-", lowest.salary);
console.log("Total Employees:", totalEmployees);
console.log("Total Salary Expenditure:", totalSalary);

// 
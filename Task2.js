// Task 1: Student Result Checker

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

if (marks >= 90) {
    console.log("Grade A");
} 
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}

// Task 2: Employee Bonus Calculator

let salary = 25000;
let bonus = salary * 0.10;
salary += bonus;

console.log("Original Salary : 25000");
console.log("Bonus : " , bonus);
console.log("Final Salary : " , salary);

//Task 3: User Login Validation

let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345")
     {
    console.log("Login Success");
} 
else{
    console.log("Login Failed");
}

//Task 4: Product Discount Calculator

let price = 2000;

let discount = price > 1000 ? price * 0.20 : 0;
let finalAmount = price - discount;

console.log("Price : ", price); 
console.log("Discount : ", discount);
console.log("Final Amount : ", finalAmount);

//Task 5: Array Product Management

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

// Task 6: Employee Object

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log(employee);
console.log("Employee Name:", employee.name);
console.log("Salary:", employee.salary);

// Task 7: E-Commerce Cart Total

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let Discount = totalBill * 0.10;
let FinalAmount = totalBill - Discount;

console.log("Total Bill:", totalBill);
console.log("Discount:", Discount);
console.log("Final Amount:", FinalAmount);

// Task 8: Age Eligibility Checker

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible");
}

// Task 9: Increment Decrement Practice

let a = 10;

console.log("Initial Value:", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);


// Task 10: Mini Employee Attendance System

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} 
else {
    console.log("Not Eligible");
}


// Bonus Company-Level Task Employee Management Console App

let Employee = {
    id: 101,
    name: "John",
    department: "Development",
    Salary: 35000,
    experience: 2
};

console.log("Employee ID :", Employee.id);
console.log("Employee Name :", Employee.name);
console.log("Department :", Employee.department);
console.log("Salary :", Employee.Salary);
console.log("Experience :", Employee.experience, "Years");

let Bonus = Employee.Salary * 0.10;
let finalSalary = Employee.Salary + Bonus;
console.log("\nBonus :", Bonus);
console.log("Final Salary :", finalSalary);

let performanceStatus = Employee.experience >= 2 ? "Good" : "Average";
console.log("\nPerformance Status :", performanceStatus);
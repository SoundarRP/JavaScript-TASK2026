// Task 1: Employee Salary Management
console.log("   TASK 1");

let employee = [
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kavin",salary:50000},
 {id:3,name:"John",salary:75000}
];

// Find employees whose salary is above ₹40,000.
let highSalary = employee.filter(emp => emp.salary >= 40000);
console.log(highSalary);

// Find the first employee whose salary is above ₹60,000.
let firstHighSalary = employee.find(emp => emp.salary >= 60000);
console.log(firstHighSalary);

// Calculate total company salary expense.

let totalCalcSalary = employee.reduce((acc,c,i,t)=>{
return acc + c.salary
},0)

console.log("total company salary expense : ",totalCalcSalary);


//   Create a new array containing only employee names.

let employeeNames = employee.map(emp => emp.name);

console.log(employeeNames);


// Task 2: College Admission Form
console.log("\n   Task 2");

let student = { 
                name :"Soundar",
                age : 20,
                percentage : 65,}

function checkAdmission(student) {
    if (student.age >= 18 && student.percentage >= 60) {
        return "Admission Approved";
    } else {
        return "Admission Rejected";
    }
}

console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("Percentage:", student.percentage);
console.log("Status:", checkAdmission(student));

//Task 3: E-Commerce Cart
console.log("\n   Task 3");

let productDetails = [
 {product:"Shoes",price:2000,qty:2},
 {product:"Watch",price:1500,qty:1},
 {product:"Bag",price:1000,qty:3}
];

//Calculate total bill.
let totalBill = productDetails.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill:", totalBill);

//Find the most expensive product
let expensiveProduct = productDetails.reduce((max, item) => {
    return item.price > max.price ? item : max;
});
console.log("Most Expensive Product:", expensiveProduct.product);


//Display all product names.
let productNames = productDetails.map(item => item.product);
console.log("Product Names:", productNames);


// Task 4:( Traffic Fine System
console.log("\n    Task 4");
let signal = "red";      
let violation = true;   

let fine = 0;

switch (signal.toLowerCase()) {
    case "red":
        console.log("Action: Stop");
        if (violation) {
            fine = 1000;
        }
        break;

    case "yellow":
        console.log("Action: Get Ready");
        if (violation) {
            fine = 500;
        }
        break;

    case "green":
        console.log("Action: Go");
        fine = 200;
        break;

    default:
        console.log("Invalid Signal");
}

console.log("Fine Amount: ₹" + fine);


//Task 5: Student Result Processing
console.log("\n     Task 5");


let students = [
 {name:"A",mark:95},
 {name:"B",mark:45},
 {name:"C",mark:80},
 {name:"D",mark:30}
];

// Find passed students 
let passedStudents = students.filter(student => student.mark >= 35);
console.log("Passed Students:", passedStudents);

// Find failed students
let failedStudents = students.filter(student => student.mark < 35);
console.log("Failed Students:", failedStudents);

// Create grade list
let gradeList = students.map(student => {
    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 70) {
        grade = "B";
    } else if (student.mark >= 35) {
        grade = "C";
    } else {
        grade = "F";
    }

    return {
        name: student.name,
        mark: student.mark,
        grade: grade
    };
});

console.log("Grade List:", gradeList);


//Task 6: Online Food Delivery
console.log("\n    Task 6");


function placeOrder(customerName,...items){
    console.log("customerName : ", customerName);
    console.log("Order items : ", items);
    console.log("items count : ", items.length);
}

placeOrder("Soundar","Apple","Orange","Banana");


// Task 7: Bank Account System

console.log("\n     Task 7");

let balance = 5000;

// Deposit Function
function deposit(amount) {
    balance = balance + amount;
    return balance;
}

// Withdraw Function
function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
    } else {
        console.log("Insufficient Balance");
    }
    return balance;
}

// Check Balance Function
function checkBalance() {
    return balance;
}

console.log("Initial Balance: ₹" + checkBalance());
console.log("After Deposit: ₹" + deposit(2000));
console.log("After Withdraw: ₹" + withdraw(1500));
console.log("Current Balance: ₹" + checkBalance());


//Task 8: Movie Ticket Booking
console.log("\n Task 8");

// Store booked seats
let bookedSeats = ["A1", "A3", "B2"];

let seatToCheck = "A2";

let isBooked = false;

// Check seat availability using loop
for (let i = 0; i < bookedSeats.length; i++) {
    if (bookedSeats[i] === seatToCheck) {
        isBooked = true;
        break;
    }
}

if (isBooked) {
    console.log(seatToCheck + " is already booked.");
} else {
    console.log(seatToCheck + " is available.");
}

// Print all booked seats
console.log("Booked Seats:");
for (let i = 0; i < bookedSeats.length; i++) {
    console.log(bookedSeats[i]);
}


//Task 9: User Login Validation
console.log("\n    Task 9");

let username = "soundar";
let password = "612345699";
let email = "soundar@406gmail.com";

// Username validation
if (username.includes(" ")) {
    console.log("Invalid Username: Username should not contain spaces.");
} else {
    console.log("Username is valid.");
}

// Password validation
if (password.length >= 8) {
    console.log("Password is valid.");
} else {
    console.log("Password must be at least 8 characters.");
}

// Email validation
if (email.includes("@")) {
    console.log("Email is valid.");
} else {
    console.log("Invalid Email: '@' is missing.");
}


// Task 10: Product API Dashboard
console.log("\n     Task 10");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    // Display product titles
    console.log("Product Titles:");
    products.forEach(product => {
      console.log(product.title);
    });

    // Find products above ₹1000
    console.log("\nProducts Above ₹1000:");
    products.forEach(product => {
      if (product.price > 1000) {
        console.log("\n",product.title + " - ₹" + product.price);
      }
    });

    // Count total products
    console.log("\nTotal Products:", products.length);

  })
  .catch(error => {
    console.log("Error:", error);
  });



//Task 11: Birthday Day Finder
console.log("\n   Task 11");


let dob = "2003-02-09";
let birthDate = new Date(dob);


let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


console.log("Day:", birthDate.getDate());
console.log("Month:", birthDate.getMonth() + 1); // Months start from 0
console.log("Year:", birthDate.getFullYear());
console.log("Weekday:", weekDays[birthDate.getDay()]);
   

//Task 12: Netflix Subscription System
console.log("\n Task 12");

let plan = "mobile";


let benefit =
    plan.toLowerCase() === "mobile"
        ? "Watch on 1 mobile device."
        : plan.toLowerCase() === "basic"
        ? "Watch on 1 device in HD."
        : plan.toLowerCase() === "standard"
        ? "Watch on 2 devices in Full HD."
        : plan.toLowerCase() === "premium"
        ? "Watch on 4 devices in Ultra HD."
        : "Invalid Plan";

console.log("Selected Plan:", plan);
console.log("Benefit:", benefit);


// Task 13: Hospital Patient Management

console.log("\n    Task 13");

let patients = [
    { id: 101, name: "Ravi", status: "Critical" },
    { id: 102, name: "Priya", status: "Stable" },
    { id: 103, name: "Arun", status: "Critical" },
    { id: 104, name: "Meena", status: "Stable" }
];

// Find critical patients
let criticalPatients = patients.filter(patient => patient.status === "Critical");
console.log("Critical Patients:", criticalPatients);

// Find patient by ID
let patient = patients.find(patient => patient.id === 103);
console.log("Patient :", patient);

// Count total patients
let totalPatients = patients.length;
console.log("Total Patients:", totalPatients);



// Task 14: Inventory Management System
console.log("\n     Task 14");

// Inventory 1
let inventory1 = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mouse", price: 1000 }
];

// Inventory 2
let inventory2 = [
    { id: 3, product: "Keyboard", price: 2000 },
    { id: 4, product: "Monitor", price: 15000 }
];

// Merge two inventory arrays using spread operator
let allInventory = [...inventory1, ...inventory2];
console.log("Merged Inventory:",allInventory);


// Extract product details using destructuring
let { id, product, price } = allInventory[0];
console.log("Product ID:", id);
console.log("Product Name:", product);
console.log("Product Price:", price);

// Add a new product using spread operator
let updatedInventory = [
    ...allInventory,
    { id: 5, product: "Printer", price: 8000 }
];

console.log("Updated Inventory: ",updatedInventory);




// Task 15: WhatsApp Group Management

console.log("\n    Task 15");

// Initial group members
let group = ["soundar", "Priya", "Arun"];

console.log("Initial Group:", group);

// Add member at the beginning
group.unshift("Kumar");

// Add member at the end
group.push("Meena");

// Remove first member
group.shift();

// Remove last member
group.pop();

// Insert member at a specific position 
group.splice(2,0,"Suresh");

// Display final group list
console.log("Final Group: ",group);








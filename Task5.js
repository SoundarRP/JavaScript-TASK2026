// Task 1: Student Management System

let students =[
    {
        id : 1,
        name : "soundar", 
        department : "CSS",
        mark : 90
    },
    {
        id : 2,
        name : "siva" ,
        department : "Mech",
        mark : 75
    },
    {
        id : 3 ,
        name : "ramesh",
        department : "EEE",
        mark : 85
    },
    {
        id : 4,
        name : "swathi", 
        department : "ECE",
        mark : 65
    },
    {
        id : 5 ,
        name : "keerthi", 
        department : "Law",
        mark : 40
    }
];

//1 ,Display all student names.
for (let student of students) {
    console.log(student.name);
}

// 2,Calculate total marks.
let totalMarks = 0;
for (let student of students) {
    totalMarks += student.mark;
}
console.log("\nTotal Marks:", totalMarks);

// 3,Find students who scored above 80.
console.log("\nStudents Scored Above 80:");
for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name, "-", student.mark);
    }
}

// 4,Display grade:

function getGrade(mark) {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 75) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}
for (let student of students) {
    console.log(student.name, "-", getGrade(student.mark));
}

// 5,Create a function to print student details.

function printStudentDetails(student) {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.department);
    console.log("Mark:", student.mark);
    console.log("Grade:", getGrade(student.mark));
}
for (let student of students) {
    printStudentDetails(student);
    console.log("----------------");
}



// Task 2: Employee Payroll System

let employees = [
    { id: 1, name: "Arun", salary: 25000, department: "HR" },
    { id: 2, name: "Priya", salary: 35000, department: "IT" },
    { id: 3, name: "Karthik", salary: 45000, department: "Finance" },
    { id: 4, name: "Divya", salary: 28000, department: "HR" },
    { id: 5, name: "Vijay", salary: 55000, department: "IT" }
];

// 1. Print all employee names
console.log("\nEmployee Names:");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

// 2. Calculate total company salary expense
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}
console.log("\nTotal Salary Expense: ₹" + totalSalary);

// 3. Display employees earning above ₹30,000
console.log("\nEmployees earning above ₹30,000:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 30000) {
        console.log(employees[i].name, "-", employees[i].salary);
    }
}

// 4. Use switch statement for department descriptions.
for (let i = 0; i < employees.length; i++) {
    switch (employees[i].department) {
        case "HR":
            console.log(employees[i].name + " - Human Resources");
            break;
        case "IT":
            console.log(employees[i].name + " - Information Technology");
            break;
        case "Finance":
            console.log(employees[i].name + " - Finance Department");
            break;
        default:
            console.log(employees[i].name + " - Unknown Department");
    }
}

// 5.Create a callback function to generate payroll reports.
function payrollReport(empArray, callback) {
    callback(empArray);
}

function generateReport(empArray) {
    console.log("\nPayroll Report:");
    for (let i = 0; i < empArray.length; i++) {
        console.log(
            empArray[i].id,
            empArray[i].name,
            empArray[i].salary,
            empArray[i].department
        );
    }
}

payrollReport(employees, generateReport);



// Task 3: Online Food Order System

let foods = [
    { id: 1, foodName: "Biryani", price: 250, category: "Main Course" },
    { id: 2, foodName: "Burger", price: 180, category: "Fast Food" },
    { id: 3, foodName: "Pizza", price: 300, category: "Fast Food" },
    { id: 4, foodName: "Ice Cream", price: 120, category: "Dessert" },
    { id: 5, foodName: "Fried Rice", price: 220, category: "Main Course" }
];

// 1. Display all food names
console.log("\nFood Names:");
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i].foodName);
}

// 2. Calculate total menu value
let totalValue = 0;
for (let i = 0; i < foods.length; i++) {
    totalValue += foods[i].price;
}
console.log("\nTotal Menu Value: ₹" + totalValue);

// 3. Show foods above ₹200
console.log("\nFoods Above ₹200:");
for (let i = 0; i < foods.length; i++) {
    if (foods[i].price > 200) {
        console.log(foods[i].foodName + " - ₹" + foods[i].price);
    }
}

// 4.Use Switch statement for category descriptions
console.log("\nCategory Descriptions:");
for (let i = 0; i < foods.length; i++) {
    switch (foods[i].category) {
        case "Main Course":
            console.log(foods[i].foodName + " - Full Meal Item");
            break;

        case "Fast Food":
            console.log(foods[i].foodName + " - Quick Snack Item");
            break;

        case "Dessert":
            console.log(foods[i].foodName + " - Sweet Dish");
            break;

        default:
            console.log(foods[i].foodName + " - Unknown Category");
    }
}

// 5. Create an order confirmation callback function.
function placeOrder(foodList, callback) {
    callback(foodList);
}

function orderConfirmation(foodList) {
    console.log("\nOrder Confirmed!");
    for (let i = 0; i < foodList.length; i++) {
        console.log(foodList[i].foodName);
    }
}

placeOrder(foods, orderConfirmation);




// Task 4: Movie Ticket Booking System

let movies = [
    { movieName: "Leo", ticketPrice: 200, availableSeats: 50 },
    { movieName: "Pushpa 2", ticketPrice: 250, availableSeats: 30 },
    { movieName: "Red", ticketPrice: 300, availableSeats: 20 },
    { movieName: "Jawan", ticketPrice: 220, availableSeats: 30 },
    { movieName: "GOAT", ticketPrice: 180, availableSeats: 0 }
];

// 1. Display all movie names
console.log("\nMovie Names:");
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].movieName);
}

// 2. Calculate total available seats
let totalSeats = 0;
for (let i = 0; i < movies.length; i++) {
    totalSeats += movies[i].availableSeats;
}
console.log("\nTotal Available Seats:", totalSeats);

// 3. Check whether booking is possible
console.log("\nBooking Status:");
for (let i = 0; i < movies.length; i++) {
    if (movies[i].availableSeats > 0) {
        console.log(movies[i].movieName + " - Booking Available");
    } else {
        console.log(movies[i].movieName + " - House Full");
    }
}

// 4. Use Switch statement for movie language
console.log("\nMovie Language:");
for (let i = 0; i < movies.length; i++) {
    switch (movies[i].movieName) {
        case "Leo":
        case "Red":
        case "GOAT":
            console.log(movies[i].movieName + " - Tamil movie");
            break;

        case "Pushpa 2":
            console.log(movies[i].movieName + " - Telugu movie");
            break;

        case "Jawan":
            console.log(movies[i].movieName + " - Hindi movie");
            break;

        default:
            console.log(movies[i].movieName + " - Other Language");
    }
}

// 5. Generate booking confirmation using callback
function bookTicket(movieList, callback) {
    callback(movieList);
}

function bookingConfirmation(movieList) {
    console.log("\nBooking Confirmation:");
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].availableSeats > 0) {
            console.log(movieList[i].movieName + " - Ticket Booked Successfully");
        } else {
            console.log(movieList[i].movieName + " - House Full");
        }
    }
}

bookTicket(movies, bookingConfirmation);




//Task 5: Hospital Patient Records


let patients = [
    {
        patientId: 101,
        patientName: "Ravi",
        age: 65,
        disease: "Heart"
    },
    {
        patientId: 102,
        patientName: "Priya",
        age: 25,
        disease: "Skin"
    },
    {
        patientId: 103,
        patientName: "Kumar",
        age: 70,
        disease: "Bone"
    },
    {
        patientId: 104,
        patientName: "Anitha",
        age: 30,
        disease: "Eye"
    }
];

// 1,Display all patient names
console.log("\nPatient Names:");
for (let patient of patients) {
    console.log(patient.patientName);
}

// 2,Count total patients
console.log("\nTotal Patients:", patients.length);

//3,Print patients above age 60
console.log("\nPatients Above Age 60:");
for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }
}

//4,Use switch statement for disease departments.
console.log("\nDisease Departments:");
for (let patient of patients) {
    let department;

    switch (patient.disease) {
        case "Heart":
            department = "Cardiology";
            break;

        case "Skin":
            department = "Dermatology";
            break;

        case "Bone":
            department = "Orthopedics";
            break;

        case "Eye":
            department = "Ophthalmology";
            break;

        default:
            department = "General";
    }

    console.log(patient.patientName + " - " + department);
}

//5,Create a callback function for appointment confirmation.

function confirmAppointment(patientName, callback) {
    console.log("\nBooking appointment for " + patientName);
    callback(patientName);
}

function appointmentMessage(name) {
    console.log("Appointment confirmed for " + name);
}

confirmAppointment("Ravi", appointmentMessage);




// Task 6: Library Management System

let books = [
    { bookId: 101, bookName: "JavaScript Basics", author: "John", price: 450 },
    { bookId: 102, bookName: "Python Programming", author: "David", price: 600 },
    { bookId: 103, bookName: "Data Structures", author: "James", price: 750 },
    { bookId: 104, bookName: "Web Development", author: "Smith", price: 500 }
];

// 1. Display all book names
console.log("\nBook Names:");
for (let book of books) {
    console.log(book.bookName);
}

// 2. Calculate total book value
let TotalValue = 0;

for (let book of books) {
    TotalValue += book.price;
}

console.log("\nTotal Book Value: ₹" + TotalValue);

// 3. Display books above ₹500
console.log("\nBooks Above ₹500:");
for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName);
    }
}

// 4. Use switch statement for book categories
console.log("\nBook Categories:");
for (let book of books) {
    let category;

    switch (book.bookName) {
        case "JavaScript Basics":
        case "Python Programming":
            category = "Programming";
            break;

        case "Data Structures":
            category = "Computer Science";
            break;

        case "Web Development":
            category = "Technology";
            break;

        default:
            category = "General";
    }

    console.log(book.bookName + " - " + category);
}

// 5. Create a function to issue a book
function issueBook(bookName) {
    console.log("\n" + bookName + " has been issued successfully.");
}

issueBook("Python Programming");





 // Task 7: E-Commerce Product Dashboard

let products = [
    { productId: 101, productName: "Laptop", price: 50000, stock: 5 },
    { productId: 102, productName: "Mobile", price: 20000, stock: 15 },
    { productId: 103, productName: "Headphones", price: 3000, stock: 8 },
    { productId: 104, productName: "Keyboard", price: 1500, stock: 20 }
];

// 1. Display all products
console.log("\nProducts:");
for (let product of products) {
    console.log(product.productName);
}

// 2. Calculate inventory value
let inventoryValue = 0;

for (let product of products) {
    inventoryValue += product.price * product.stock;
}

console.log("\nInventory Value: ₹" + inventoryValue);

// 3. Find products with stock less than 10
console.log("\nProducts with Stock Less Than 10:");
for (let product of products) {
    if (product.stock < 10) {
        console.log(product.productName);
    }
}

// 4. Display stock status
console.log("\nStock Status:");
for (let product of products) {
    let status;

    switch (true) {
        case (product.stock < 10):
            status = "Low Stock";
            break;

        default:
            status = "In Stock";
    }

    console.log(product.productName + " - " + status);
}

// 5. Generate product report using callback function
function GenerateReport(callback) {
    callback();
}

function productReport() {
    console.log("\nProduct Report Generated Successfully");
}

GenerateReport(productReport);




// Task 8: College Admission System

let applicants = [
    { name: "Ravi", age: 20, percentage: 75, department: "CSE" },
    { name: "Priya", age: 17, percentage: 85, department: "ECE" },
    { name: "Kumar", age: 19, percentage: 58, department: "MECH" },
    { name: "Anitha", age: 21, percentage: 90, department: "IT" }
];

// 1. Display applicant names
console.log("\nApplicant Names:");
for (let applicant of applicants) {
    console.log(applicant.name);
}

// 2. Check eligibility 
let eligibleCount = 0;

console.log("\nEligible Students:");
for (let applicant of applicants) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name);
        eligibleCount++;
    }
}

// 3. Count eligible students
console.log("\nTotal Eligible Students:", eligibleCount);

// 4. Use switch statement for department names
console.log("\nDepartments:");
for (let applicant of applicants) {
    let departmentName;

    switch (applicant.department) {
        case "CSE":
            departmentName = "Computer Science Engineering";
            break;

        case "ECE":
            departmentName = "Electronics and Communication Engineering";
            break;

        case "MECH":
            departmentName = "Mechanical Engineering";
            break;

        case "IT":
            departmentName = "Information Technology";
            break;

        default:
            departmentName = "General";
    }

    console.log(applicant.name + " - " + departmentName);
}

// 5. Generate admission result using callback
function admissionResult(name, callback) {
    callback(name);
}

function resultMessage(name) {
    console.log("\n" + name + " Admission Approved");
}

admissionResult("Ravi", resultMessage);




// Task 9: Bus Reservation System

let passengers = [
    { passengerId: 101, name: "Soundar", seatNumber: 1, ticketPrice: 500 },
    { passengerId: 102, name: "Siva", seatNumber: 2, ticketPrice: 500 },
    { passengerId: 103, name: "Kumar", seatNumber: 3, ticketPrice: 700 },
    { passengerId: 104, name: "Swetha", seatNumber: 4, ticketPrice: 700 }
];

// 1. Display passenger names
console.log("\nPassenger Names:");
for (let passenger of passengers) {
    console.log(passenger.name);
}

// 2. Calculate total collection
let totalCollection = 0;
for (let passenger of passengers) {
    totalCollection += passenger.ticketPrice;
}
console.log("\nTotal Collection: ₹" + totalCollection);

// 3. Check occupied seats
console.log("\nOccupied Seats:");
for (let passenger of passengers) {
    console.log("Seat No: " + passenger.seatNumber);
}

// 4. Use switch statement for bus types
let busType = "AC";

switch (busType) {
    case "AC":
        console.log("\nBus Type: Air Conditioned Bus");
        break;

    case "Non-AC":
        console.log("\nBus Type: Non-Air Conditioned Bus");
        break;

    case "Sleeper":
        console.log("\nBus Type: Sleeper Bus");
        break;

    default:
        console.log("\nBus Type: General Bus");
}

// 5. Generate ticket confirmation using callback
function ticketConfirmation(passenger, callback) {
    return callback(passenger);
}

function confirmMessage(passenger) {
    return `\nTicket Confirmed for ${passenger.name}- Seat ${passenger.seatNumber}`;
}

console.log(ticketConfirmation(passengers[0], confirmMessage));


// Task 10: Mobile Store Management

let mobiles = [
    { brand: "Samsung", model: "Galaxy S24", price: 80000, stock: 5 },
    { brand: "Apple", model: "iPhone 16", price: 90000, stock: 3 },
    { brand: "Xiaomi", model: "Redmi Note 14", price: 18000, stock: 10 },
    { brand: "Realme", model: "Realme 14 Pro", price: 25000, stock: 8 }
];

// 1. Display all mobile names
console.log("\nMobile Names:");
for (let mobile of mobiles) {
    console.log(mobile.model);
}

// 2. Calculate total stock value 
function calculateStockValue() {
    let total = 0;

    for (let mobile of mobiles) {
        total += mobile.price * mobile.stock;
    }

    return total;
}
console.log("\nTotal Stock Value: ₹" + calculateStockValue());

// 3. Show mobiles above ₹20,000
console.log("\nMobiles Above ₹20,000:");
for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(mobile.model);
    }
}

// 4. Use switch statement for brand category
function getBrandCategory(brand) {
    switch (brand) {
        case "Samsung":
            return "Android Premium";

        case "Apple":
            return "iOS Premium";

        case "Xiaomi":
            return "Budget Android";

        case "Realme":
            return "Mid Range Android";

        default:
            return "Other Brand";
    }
}

console.log("\nBrand Categories:");
for (let mobile of mobiles) {
    console.log(mobile.brand + " - " + getBrandCategory(mobile.brand));
}

// 5. Generate sales report using callback function
function generateSalesReport(callback) {
    return callback();
}

function salesReport() {
    return "Sales Report Generated Successfully";
}

console.log("\n" + generateSalesReport(salesReport));

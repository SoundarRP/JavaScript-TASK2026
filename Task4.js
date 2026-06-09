// Task 1: Age Category Finder

let age = Number ( prompt ("Enter age !"));

if (age >= 0 && age <= 12){
    console.log("Child");
}
else if (age >= 13 && age <= 19){
console.log ("Teenager");
}
else if (age >= 20 && age <= 59){
console.log ("Adult");
}
else{
console.log ("Senior Citizen");
}


//Task 2: Salary Hike Calculator

let salary = Number ( prompt ("Enter Your Salary "));
let hike;

if ( salary < 20000 ){
     hike = salary * 0.20;
}
else if ( salary >= 20000 && salary <= 50000 ){
     hike = salary * 0.10;
}
else {
     hike = salary * 0.05;
}

let newSalary =salary + hike;

console.log("Old Salary : ",salary);
console.log("New Salary : ", newSalary);


// Task 3: Electricity Department

let units = Number (prompt(" Enter Units "));

let bill;

if (units >= 0 && units <= 100 ){
    bill = units * 5 ;
}
else if (units <= 200 ){
    bill = units * 7 ;
}
else  {
    bill = units * 10 ;
}

console.log ("Total Bill : "+"₹"+bill);


// Task 4: Simple ATM

let Amount = Number(prompt("Enter withdrawal amount"));
let Balance = 10000 ;

if(Amount <= Balance){
    console.log("Withdrawal Success");
    console.log("Remaining balance: ", (Balance - Amount));
}
else{
    console.log(" Insufficient Balance");
}

// Task 5: Login Validation

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}

// Task 6: Mobile Recharge Offer

let recharge = Number (prompt ("Enter Recharge amount"));

if (recharge >= 499){
    console.log("Netflix Offer");
}
else if (recharge >= 299){
    console.log("2GB Extra Data");
}
else{
    console.log("No Offer");
}


// Task 7: Traffic Signal System

let color = prompt("Enter the color").toLowerCase();

switch(color){
    case "red":
        console.log ("Stop");
        break;

    case "yellow":
        console.log ("Ready");
        break;
    
    case "green":
        console.log ("Go");
        break; 
        
    default:
        console.log("Invalid color");    
}


// Task 8: Employee Attendance

let workingDays = Number (prompt("Enter Working days"));
let presentDays = Number (prompt("Enter present days"));

let attendancePercentage = (presentDays / workingDays) * 100;

console.log("Attendance Percentage:", attendancePercentage + "%");

if (attendancePercentage >= 75) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}

// Task 9: Bus Ticket Booking

let ticketPrice = 500;
let numberOftickets = Number (prompt("Enter the Ticket Count"));

let totalAmount =  numberOftickets * ticketPrice;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log ("Total Amount : " +"₹"+ totalAmount);
console.log("GST 5% : " +"₹"+ gst);
console.log("Final Amount : "+"₹"+ finalAmount );


// Task 10: Restaurant Bill

let Bill = Number (prompt("Enter Food Cast"));
let discountbill = 0;

if (Bill > 2000){
    console.log("10% Discount");
    discountbill = Bill * 0.10;
}

else{
    console.log("No Discount ");
}

let finalBill = Bill -discountbill;
console.log ("Final Bill : ₹", finalBill);


// Task 11: Police Recruitment

let Age = Number (prompt("Enter Your age "));
let Height = Number (prompt("Enter Your height in cm"));
let Weight = Number (prompt("Enter Your weightin kg "));

if(Age >= 18){
       if(Height >= 160){
           if(Weight >= 55){
            console.log("You are eligible for Police");
           }
           else{
             console.log("Rejected: Weight is less than 55kg");
           }

       }
       else{
         console.log("Rejected: Height is less than 160cm");
       }
}
else{
    console.log("Rejected: Age is less than 18");
}


// Task 12: Student Result

let subject1 = Number(prompt("Enter your Subject 1 mark"));
let subject2 = Number(prompt("Enter your Subject 2 mark"));
let subject3 = Number(prompt("Enter your Subject 3 mark"));
let subject4 = Number(prompt("Enter your Subject 4 mark"));
let subject5 = Number(prompt("Enter your Subject 5 mark"));

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 ;
let markPercentage = totalMarks / 5 ;

console.log ( "Total Marks : ",totalMarks );
console.log ( "Percentage : " , markPercentage,"%");

if (markPercentage >= 90){
    console.log("Grade A+");
}
else if (markPercentage >= 80){
    console.log("Grade A");
}
else if (markPercentage >= 70){
    console.log("Grade B");
}
else if (markPercentage >= 60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

//  Task 13: Employee Shift Finder

let time = Number(prompt("Enter time (0–24 format)"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
}
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
}
else {
    console.log("Night Shift");
}


// Task 14: Loan Eligibility

let agE = Number(prompt("Enter Age"));
let salarY = Number(prompt("Enter Salary"));
let experiencE = Number(prompt("Enter Experience (Years)"));

if (agE >= 21 && salarY >= 25000 && experiencE >= 2) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}


// Task 15: Cab Fare Calculator

let distance = Number(prompt("Enter Distance in KM"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
}
else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Total Fare : ₹" + fare);


//Task 16: Multiplication Table Generator

let number = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++){
    console.log(number + " * " + (i) + " = " + (i * number ));
}


// Task 17: Password Checker

let Password = prompt("Enter Password");

let length = Password.length;

if (length < 6) {
    console.log("Weak");
}
else if (length <= 10) {
    console.log("Medium");
}
else {
    console.log("Strong");
}


// Task 18: Company Bonus System

let experience = Number (prompt("Enter your experience years"));
let SalarY = Number (prompt("Enter your salary"));
let BonuS ;
if (experience >=0 && experience <=2){
    BonuS = SalarY * 0.05;
}
else if (experience >=3 && experience <=5){
    BonuS = SalarY * 0.10;
}
else{
    BonuS = SalarY * 0.20;
}

console.log("Bonus : ₹", BonuS);

//Task 19: Countdown Timer

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");


//Task 20: Interview Selection System

let degreeCompleted = prompt("Degree Completed? (yes/no)").toLowerCase();
let communication = prompt("Communication (good/poor)").toLowerCase();
let technicalScore = Number(prompt("Enter Technical Score"));

if (degreeCompleted === "yes") {
    if (communication === "good") {
        if (technicalScore >= 70) {
            console.log("Selected");
        }
        else {
            console.log("Rejected: Technical Score is below 70");
        }
    }
    else {
        console.log("Rejected: Communication is not Good");
    }
}
else {
    console.log("Rejected: Degree Not Completed");
}
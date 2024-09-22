const student = {
    name:"hassan",
    age:22,
    education:"bs",
    skill:"web developer"
};
student.gender ="male";
console.log(student);
console.log(student.skill);
//or
console.log(student["skill"]);


// 
const students ={
    hassan : {
        marks :"A",
        gpa:2.86
    },
    amna : {
        marks :"A+",
        gpa:3.86
    },
    ali :{
        marks :"B",
        gpa:2.5
    }
};
console.log(students.hassan.marks);
console.log(students.hassan.gpa);

//practicxe Qs
//Q1
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice)
//Q2
const car = {
    name:"honda",
    model:2023,
    color:["red","black","grey"]
};
console.log(car.name);
//Q3
const person ={
    name:"hassan",
    age:23,
    city:"Rawalpindi"
};
person.city="New York";
person.country="USA";
console.log(person);
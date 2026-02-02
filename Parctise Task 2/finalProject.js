const data = [
    { name: "Zain", marks: 78, course: "Web", active: true },
    { name: "Ali", marks: 45, course: "Web", active: false },
    { name: "Sara", marks: 88, course: "AI", active: true },
    { name: "Ayesha", marks: 92, course: "Web", active: true },
    { name: "Hamza", marks: 60, course: "AI", active: true }
];

const activeStudents = data.filter(({ active }) => active);//Agar Active true hua 

console.log(`Active Students : ` , activeStudents)

const gradeFilter = activeStudents.map((item) => {
    let grade ;
    if(item.marks > 80) {
        grade = "A" ;
    } else {
        grade = "B"
    }

    return {
        ...item,
        grade : grade ,
    }
})

console.log(`Graded Student : ` , gradeFilter);

const totalMarks = gradeFilter.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

console.log(`Total Marks Of Student Is : ${totalMarks}`);


function numSet () {
    let passStudents = 0;

    return function (marks) {
        if (marks >= 50) {
            passStudents++;
        }
        return passStudents;
    };
}

const checkPass = numSet();

gradeFilter.forEach(student => {
    checkPass(student.marks);
});

console.log("Passed Students:", checkPass());

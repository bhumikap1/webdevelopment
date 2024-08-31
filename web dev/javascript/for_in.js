const student = {
    name: "Bhumika",
    sec: "Cst SPL",
    age: 21,
    cgpa: 9.8,
    ispass: true,
};
//retrive keys and values from object
for(let key in student)
    {
        console.log("key=",key,",value=",student[key]);
    }
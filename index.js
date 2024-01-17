const employee = { name : "Gamze", streetAddress : "38th street"}; //returns an employee with the original key value pairs and the new key value pair'
let newObj = {...employee};

function updateEmployeeWithKeyAndValue(employee, key , value){
    
//  update key:value
    newObj[key] = value;

    return newObj;
}
console.log(updateEmployeeWithKeyAndValue(employee, "name" , "Sam"));
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress" , "11  Broadway"));


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
};

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam" , "12 Broadway"));


function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee} 
    delete newEmployee[key];
    return newEmployee;
};

console.log(deleteFromEmployeeByKey(employee, 'name'));


function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

let newEmpObj = destructivelyDeleteFromEmployeeByKey(employee, 'name')
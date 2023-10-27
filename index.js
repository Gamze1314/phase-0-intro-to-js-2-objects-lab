const employee = { name : "value1", streetAddress : "value2"};

function updateEmployeeWithKeyAndValue(employee, key,value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    const newObj = {...employee};
    return newObj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    const newObj = {...employee};
    return employee;

}
var emp1 = {};
emp1.name = 'Marie';
emp1.gender ='female';
emp1.position ='Manager';
emp1.username = emp1.name
console.log(emp1);

function createEmployeeObject(name,gender,position,username){
    var emp2={};
    emp2.name = name;
    emp2.gender =gender;
    emp2.position =position;
    emp2.username = name;
    return emp2

}
console.log(createEmployeeObject('aimee','female','assistant manager','emp2.name'));
console.log(createEmployeeObject('kwizera','male','boss','emp3'));


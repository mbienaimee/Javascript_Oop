// var emp1 = {};
// emp1.name = 'Marie';
// emp1.gender ='female';
// emp1.position ='Manager';
// emp1.username = emp1.name
// console.log(emp1);

function createEmployeeObject(name,gender,position,username){
    // var emp2={};
    this.name = name;
    this.gender =gender;
    this.position =position;
    this.username = name;
    // return emp2

}
console.log(new createEmployeeObject('aimee','female','assistant manager','emp2.name'));
console.log(new createEmployeeObject('kwizera','male','boss','emp3'));
console.log(new createEmployeeObject('Yvonne','female','secreatary','emp3'));


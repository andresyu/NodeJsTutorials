/*
var firstName = 'John';
console.log(firstName);

var lastName = 'smith';
var age = 28;

var fullAge=true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

var $3years = 3;
*/




/*
var massJohn, massMark, heightJohn, heightMark;
massJohn = 10
massMark = 20
heightJohn = 1.80
heightMark = 1.70

var BMIMark = massMark/(heightMark * heightMark)
var BMIJohn = massJohn/(heightJohn * heightJohn)
console.log(BMIJohn, BMIMark)

var markHigherBMI = BMIMark>BMIJohn

console.log('Is mark BMI higer than johns?'+ markHigherBMI)
*/


/*
var johnGame1 = 89
var johnGame2 = 120
var johnGame3 = 103

var mikeGame1 = 116
var mikeGame2 = 94
var mikeGame3 = 123

var johnAvg = (johnGame1 + johnGame2 + johnGame3)/3
var mikeAvg = (mikeGame1 + mikeGame2 + mikeGame3)/3

if(johnAvg>mikeAvg){
   console.log('The winner is John with'+ johnAvg)
   }else if(mikeAvg>johnAvg){
       console.log('The winner is Mike with'+ mikeAvg)
   }else {
       console.log('There is a tie')
   }

   */



/*
function tipCalculator(bill){
    var percentage;
    if(bill<50){
       percentage = .2;
       }else if (bill>= 50 && bill<200){
           percentage = .15;
       }else{
           percentage = .1;
       }
    return percentage * bill;
}

var bills =[124, 48, 268]
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues =[bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, finalValues);

 */




/*
//Object literal
var john ={
    firstname: 'John',
    lastName: 'Smith',
    birthday: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: 'false'
};

//console.log(john.firstname);
//console.log(john['lastName']);
//var x = 'birthday';
//console.log(john[x]);

john.job = 'designer' //mutate object
john['isMarried'] = true
console.log(john);

//new Object Syntax
var jane = new Object();
jane.firstName =  'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'
console.log(jane);

*/

var john ={
    firstname: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: 'false',
    calcAge: function(){
        this.age =  2018-this.birthYear;
    }
};

john.calcAge()









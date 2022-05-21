function mySquare(x) {
    return x*x;
  }

  function factorial(x) {        
    if (x <= 1) return 1;        
    return x * factorial(x-1);   
  }

  function mySquare(x) {
    return x*x;
  }

  function factorial(x) {        
    if (x <= 1) return 1;        
    return x * factorial(x-1);   
  }

  function factorial(x) {        
    if (x <= 1) return 1;        
    return x * factorial(x-1);   
  }

  console.log(factorial(5));

  function recurs_test(n) {
    if (n<=1) return 1;
    return n - recurs_test(n-1)
  }

  console.log(recurs_test(77))

let i = 1;
let s;

function func() {
  i++;
	if (i <= 10) {
		return func()+" "; // здесь функция вызывает сама себя
	}
}
console.log(func());

function test_line(n)
{
    if (n == 1) return n;
    else return test_line(n - 1) + " " + n;
}

console.log(test_line(9))

var person = new Object();

console.log(func());

function test_line(n)

console.log(test_line(9))

var person = new Object();

console.log(func());

function test_line(n)

function Person(name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}

var employee1 = new Person("Ivan","25","2017");
var employee2 = new Person("Olga","21","2016");
var employee3 = new Person("Oleg","32","2010");

var Person = {
   name : "Ivan",
   age : 25,
   hiredYear : 2017
  }

  var Person = {
     name : "Ivan",
     age : 25,
     hiredYear : 2017
    }

    console.log(Person.age);


    var person = {
        name : "Ivan",
        age : 25,
        hiredYear : 2017
      }
      
      person.sayName = function() {
        console.log("My name is " + this.name);
      }

      person.sayName();
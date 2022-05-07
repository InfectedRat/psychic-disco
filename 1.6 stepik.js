function testFactorial(a) {
    var x=1;
    var i;
    for (i=1; i<=a; i=i+1) {
        x=x*i;
    }
    return x;
}

console.log(testFactorial(9));


function testWhile(a) {
    var x=0;
    var i=0;
    while (i<=a) {
        if (i%2==0) {
            x=x+i
        }
    i=i+1;
    }
    return x;
}


console.log(testWhile(5))

function printText() {                   
    document.write("Hello World!");      
  };

  printText();

function testFactorial(a) {
    var x=1;
    var i;
    for (i=1; i<=a; i=i+1) {
        x=x*i;
    }
    return x;
}

console.log(testFactorial(9));
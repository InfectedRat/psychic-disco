function testIf(a, b) {
    var x;
    if (a>b) {x=a+b;}
    else {x=a*b;}
    return x;
}

function testfucksum(a, b) {
    return a+b;
}

function testEifElse(a,b) {
    var x;
    if (a<b) {x=a+b;}
    else if (a>b) {x=a-b;}
    else {x=a*b;}
    return x;
}



console.log(testEifElse(9,9))

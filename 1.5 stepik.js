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

function testCase(a) {
    var x;
    var a;
        switch(a) {
            case 1:
                x = 'Один'
            break;
            case 2:
                x = 'Два'
            break;
            case 3:
                x = 'Три'
            break;
            case 4:
                x = 'Четыре'
            break;
            case 5:
                x = 'Пять'
            break;
            case 6:
                x = 'Шесть'
            break;
            case 7:
                x = 'Семь'
            break;
            case 8:
                x = 'Восемь'
            break;
            case 9:
                x = 'Девять'
            break;
            case 0:
                x = 'Ноль'
            break;
            default: 
                x = 'Переменная не равна от 0 до 9 ';
        }
    return x;
}

function VelikijDen() {
    var a = 'Hello';
    return a;
}

console.log(VelikijDen());

// for (var a; a < 10; a++) {
//     console.log(a);
// }
// var b = 0;
// while (b < 10) {
//     console.log(b);
//     b++;
// }

// var c = 0;
// do {
//     console.log(c)
//     c++;
// }
// while (c < 10);

function getNumber(num) {

    var result = document.getElementById('result');
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById('result');
    result.value = eval(result.value)
}
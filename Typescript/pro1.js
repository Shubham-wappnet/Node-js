var greetings = "hello,good morning";
console.log(greetings);
function funA(num1) {
    return num1 * 2;
}
function funB(str1) {
    return str1.toUpperCase();
}
console.log(funA(4));
console.log(funB("hfelbel"));
var hello = function (s) {
    return "hi";
};
function getvalue(ele) {
    if (ele > 10) {
        return 'it is a number';
    }
    else {
        return 'it is Nan';
    }
}
console.log(getvalue(13));

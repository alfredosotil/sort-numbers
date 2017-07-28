/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (document.addEventListener) {
    window.addEventListener('load', main(), false);
} else {
    window.attachEvent('onload', main());
}

var numbers = [];

/**
 * @function
 * @name main
 * @description this function execute when page is loaded
 */
function main() {
    document.getElementById('addButton').onclick = function () {
        var listItems = '';
        var inputNumbers = document.getElementById('number').value;
        document.getElementById('number').value = '';
        (String(inputNumbers).split(',')).forEach(function (item, index) {
            if (item !== '') {
                if (!isNumberInArray(parseInt(item))) {
                    numbers.push(parseInt(item));
                }
            }
        });
        var orderedNumbers = Array.from(bubbleSort(numbers));
        orderedNumbers.forEach(function (item, index) {
            listItems = listItems + '<li class="list-group-item">' + item + '</li>';
        });
        document.getElementById('heading').innerHTML = '';
        document.getElementById('heading').innerHTML = 'Resultado: ' + orderedNumbers.length + ' numero(s) ordenado(s).';
        document.getElementById('orderedNumbers').innerHTML = '';
        document.getElementById('orderedNumbers').innerHTML = listItems;
    };

    document.getElementById('clearList').onclick = function () {
        numbers = [];
        document.getElementById('heading').innerHTML = '';
        document.getElementById('orderedNumbers').innerHTML = '';
    };

}

/**
 * @function
 * @name isNumberInArray
 * @description verify if element is in array
 * @param {int} number to verify.
 * @returns {boolean} The result if element is in array.
 */
function isNumberInArray(number) {
    return (numbers.indexOf(number) >= 0) ? true : false;
}

/**
 * @function
 * @name swap
 * @description Swap two elements in an array
 * @param {array} myArr The target array.
 * @param {int} indexOne The index of the first element to swap.
 * @param {int} indexTwo The index of the second element to swap.
 * @returns {array} The array with the two elements swapped.
 */
function swap(myArr, indexOne, indexTwo) {
    var tmpVal = myArr[indexOne];
    myArr[indexOne] = myArr[indexTwo];
    myArr[indexTwo] = tmpVal;
    return myArr;
}

/**
 * @function
 * @name bubbleSort
 * @description Swap two elements in an array
 * @param {array} myArr The target array.
 * @returns {array} The new ordered array.
 */
function bubbleSort(myArr) {
    var size = myArr.length;
    for (var pass = 1; pass < size; pass++) { // outer loop
        for (var left = 0; left < (size - pass); left++) { // inner loop
            var right = left + 1;
            if (myArr[left] > myArr[right]) {
                swap(myArr, left, right);
            }
        }
    }
    return myArr;
}
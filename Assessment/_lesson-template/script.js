'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("test PASSED!!");
    } else {
        console.error("test FAILED...");
        console.log("actual: ", actual);
        console.log("expected: ", expected);
    }
}

// 1.evenOrOdd という名前の関数を宣言してください。
console.log("1.evenOrOdd という名前の関数を宣言してください。");
// この関数は引数として数値型の要素を持つ配列と、boolean を受け取ります。
// boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。

function evenOrOdd(numArray, bool) {    
    function returnEven(num) {
        let returnNum = 0;
        num < 0 ? returnNum = num * -1 : returnNum = num;
        return returnNum % 2 === 0;
    }
    
    function returnOdd(num) {
        let returnNum = 0;
        num < 0 ? returnNum = num * -1 : returnNum = num;
        return returnNum % 2 === 1;
    }

    return bool ? numArray.filter(returnEven) : numArray.filter(returnOdd);
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

// 2.findKeys という名前の関数を宣言してください。
console.log("2.findKeys という名前の関数を宣言してください。");
// この関数は引数としてオブジェクトと “target” (文字列または数値) を受け取り、
// オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。

function findKeys(obj, target) {
    const result = [];
    for (const item in obj) {
        if (obj[item] === target) {
            result.push(item);
        }
    }
    return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);


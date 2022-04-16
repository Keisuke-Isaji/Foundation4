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

// 3.buildObject という名前の関数を宣言してください。
console.log("3.buildObject という名前の関数を宣言してください。");
// この関数は引数として 2 つの配列を受け取り、新しいオブジェクトを返します。
// リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。

function buildObject(array1, array2) {
    const result = {};
    for (let i = 0; i < array1.length; i++) {
        result[array1[i]] = array2[i];
    }
    return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]), {"cat": "meow", "dog": "woof", "duck": "quack"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

// 4.add という名前の関数を宣言してください。
console.log("4.add という名前の関数を宣言してください。")
// この関数は引数として 1 つの数値 x を受け取り、引数として 1 つの数値 y を受けとる関数を返します。
// リターンされた関数は、実行時に ‘x’ と ‘y’ の和を返します。

function add(x) {
    return y => x + y;
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);

// このコードを実行すると、どの順番で何が表示されるでしょうか？
// もちろん、コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで調べましょう！

function simpleHello() {
    console.log("Hello");
}

function anotherGreeting(name) {
    return "Hello, " + name;
}

const foo = simpleHello();
const bar = anotherGreeting("JavaScript");
console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// Hello; -> console.log(foo)で、コンソールにHelloを表示する関数simpleHelloを実行。
// undefined; ->　simpleHelloの返り値はundefined
// Hello, JavaScript; -> console.log(bar)で"JavaScript"を引数に取り、関数anotherGreetingを実施。その返り値を表示。

// 7.map という名前の関数を宣言してください。
console.log("7.map という名前の関数を宣言してください。");
// この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
// コールバック関数は、コレクション内のすべての要素に適用されます。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

function map(collection, func) {
    const result = [];
    if (Array.isArray(collection)) {
        for (const item of collection) {
            result.push(func(item));
        }
    } else {
        for (const item in collection) {
            result.push(func(collection[item]));
        }
    }
    return result;
}

function addOne(num) {
    return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

// 8.changeMiddle という名前の関数を宣言してください。
console.log("8.changeMiddle という名前の関数を宣言してください。");
// この関数は引数として「3 つの単語からなる文字列(スペースで区切られる)」「1 単語の文字列」を受け取り、
// 第一引数の中央の単語を第二引数の文字列に置き換えた新しい文字列を返します。

function changeMiddle(threeWordsSentence, newWord) {
    const sentenceArray = threeWordsSentence.split(" ");
    sentenceArray[1] = newWord;
    return sentenceArray.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

// 9.countSomething という名前の関数を宣言してください。
console.log("9.countSomething という名前の関数を宣言してください。");
// この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。
// 要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。

// “BOOL COUNT: x” (ブーリアンが最も多い場合)
// “STRING COUNT: x” (文字列が最も多い場合)
// “NUMBER COUNT: x” （数値が最も多い場合）
// ※ x はその型の要素がが何回出現したかを表す。

function countSomething(array) {
    const elemCount = {};
    let mostQuantity = 0;
    let mostQuantityType;
    const returnTypeWords = { boolean: "BOOL", string: "STRING", number: "NUMBER" };

    for (const elem of array) {
        if (elemCount[typeof elem]) {
            elemCount[typeof elem] += 1;
        } else {
            elemCount[typeof elem] = 1;
        }
    }
    for (const type in elemCount) {
        if (elemCount[type] > mostQuantity) {
            mostQuantity = elemCount[type];
            mostQuantityType = type;
        }
    }
    return `${returnTypeWords[mostQuantityType]} COUNT: ${mostQuantity}`;
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

// 10.each という名前の関数を宣言してください。
console.log("10.each という名前の関数を宣言してください。");
// この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
// コレクション内の各要素に対してコールバック関数を一度だけ実行してください。この関数は何もリターンしません。
// ⚠️ 注意：ネイティブメソッド (.forEach, .map) は使用しないでください。

function each(collection, func) {
    const doFunc = (item, selectredFunc) => selectredFunc(item);
    if (Array.isArray(collection)) {
        for (const item of collection) {
            doFunc(item, func);
        }
    } else {
        for (const item in collection) {
            doFunc(collection[item], func);
        }
    }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6

// 11.compose という名前の関数を宣言してください。
console.log("11.compose という名前の関数を宣言してください。");
// この関数は引数として funcA と funcB という 2 つの関数を受け取り、新しい関数を返します。
// リターンされた関数は引数 x を受け取ります。リターンされた関数を実行すると、funcA の実行結果を funcB の引数として渡した結果を返します。

function compose(funcA, funcB) {
    return function(x) {
        return funcB(funcA(x));
    }
}

function multiplyTwo(x) {
return x * 2;
}

function addOne(x) {
    return x + 1;
}

const fooa = compose(multiplyTwo, addOne); // foo -> fooa に変更(4.の問題と重複)

test(fooa(5), 11);
test(fooa(100), 201);

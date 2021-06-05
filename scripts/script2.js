function sum(...params) {
    let result = 0;
    params.forEach((element) => {
        console.log(typeof element);
        if (typeof element == "number") {
            result += element;
        }
    });
    return result;
}

// console.log(sum(1, 2, 3));
// console.log(sum(1, 'aaa', 2, 3));

function fun2(input) {
    let result = "";
    input = input + "";
    result = input.split("").reverse().join("");
    return result;
}

// console.log(fun2(12345));

function fun3(input) {
    let result = "";
    const splitted = input.split(" ");
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] =
            splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
    }
    result = splitted.join(" ");
    return result;
}
// console.log(fun3("aaa bbb ccc"));

function fun3(input) {
    return input.split("").sort().join("");
}
// console.log(fun3('adwhzb'));

fun4 = (input) => {
    return `${input}\xB0C = ${input * 1.8 + 32}\xB0F`;
};
// console.log(fun4(50));

cenzura = (input) => {
    result = input.split(" ");
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "kot") {
            result[i] = "***";
        }
    }
    return result.join(" ");
};
// console.log(cenzura("pies kot ala"));

fun5 = (input) => {

    let results = input.sort()
    let maxCount = 0;
    let maxItem;
    let currentCount = 1;

    for (let i = 0; i < results.length - 1; i++) {
        if (results[i] === results[i + 1]) {
            currentCount++ 
        } else currentCount = 1
        if(maxCount < currentCount) {
            maxCount = currentCount;
            maxItem = results[i];
        }
        console.log(results[i], results[i + 1]);
    }
    return `${maxItem} (${maxCount} times)`
};

// console.log(fun5([3, "a", "a", "a", 2, 3, "a"]));



function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    return avg;
}


function createSentence(num, noun) {

    const numFloored = Math.floor(num);

    if (num == 1)
        return `On average, a Berkeley student has ${numFloored} ${noun}`;
    else
        return `On average, a Berkeley student has ${numFloored} ${noun}s`;
}

function getRandomNum(max) {
    return Math.random() * max;
}


let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "Moose");

console.log(sentence);

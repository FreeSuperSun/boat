const LENGTH = 5;
let myArray = new Array(LENGTH);
let count = 0;

function getRandomNum() {
    return Math.floor(Math.random() * 31 + 2);
}

function fillArray(filledArray) {
    const newNum = getRandomNum();
    if (filledArray.indexOf(newNum) !== -1) {
        fillArray(filledArray);
    } else {
        filledArray[count] = newNum;
        count++;
        if (count === LENGTH) {
            console.log(myArray);
            return 'finished';
        } else {
            fillArray(filledArray);
        }
    }
}

fillArray(myArray);
function solution(input) {
    let index = 0;
    let sumOfNumbers = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    let arrayLength = input.length;
    let arrayOfSum = [];
    let seqArr = [];
    let sequenceData = {};

    while (input[index + 2] != undefined && [arrayLength > 2]) {
        let i = index;
        firstNumber = input[index];
        secondNumber = input[index + 1];
        thirdNumber = input[index + 2];
        sumOfNumbers = firstNumber + secondNumber + thirdNumber;
        seqArr = [firstNumber, secondNumber, thirdNumber];
        arrayOfSum.push(sumOfNumbers);
        sequenceData[i] = {
            sequence: seqArr,
            sum: sumOfNumbers
        }
        index++;
    }

    if (arrayLength < 3) {
        console.log("error");
    }

    let biggestNumber = arrayOfSum[0];
    let numberOfIndex = 0;
    for (let j = 0; j < arrayOfSum.length; j++) {
        
        if (arrayOfSum[j] > biggestNumber) {
            biggestNumber = arrayOfSum[j];
            numberOfIndex = j;
        }
        if (arrayOfSum[j] == biggestNumber){
            biggestNumber = arrayOfSum[j];
            numberOfIndex = j;
        }
       
    }
    let sequence = sequenceData[numberOfIndex].sequence;
    console.log(`{sequence: [${sequence}], sum: ${biggestNumber}}`)

} solution([76, 80, 81, 77, 83, 78, 80]);
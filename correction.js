const suite = [0, 1];
for (let index = 0; index < 50; index++) {
        let nextElement = suite[suite.length - 1] + suite[suite.length - 2];
        suite.push(nextElement);
}
console.log(suite);

//tri à bulle
const aTrier = [3, 2, 11, 4, 8, 10];

for (let index = 0; index < aTrier.length; index++) {
        if (aTrier[index] > aTrier[index + 1]) {
                let temp = aTrier[index];
                aTrier[index] = aTrier[index + 1];
                aTrier[index + 1] = temp;
        }
}

console.log(aTrier);
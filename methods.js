const isPrime = `
num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
};
`;
const getPrimeNumbers = `
(num, lazy) => {
    const percent = num / 100;
    let progress = 0;

    const res = [];
    const start = performance.now() / 1000;
    for (let i = 0; i < num; i++) {
        if (isPrimeLocal(i)) res.push(i);
        if (lazy && i % 100 === 0) {
            progress = i / percent;
            postMessage([res, progress, ""])
        }
    }
    const end = performance.now() / 1000;
    const time = (end - start).toFixed(1);
    progress = 100;

    return [res, progress, time]
}
`;
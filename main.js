const input = document.getElementById("number");
const output = document.getElementById("output");
const progress = document.getElementById("progress");
const btn = document.getElementById("submit-btn");
const webWorker = document.getElementById("web-worker-checkbox");
const lazyLoad = document.getElementById("lazy-load-checkbox");

const worker = new Worker("./workers.js");

worker.onmessage = showResult;

btn.addEventListener("click", () => {
    const num = +input.value || 0;

    output.innerHTML = "Calculation in progress...";
    progress.innerHTML = "";

    if (webWorker.checked) {
        worker.postMessage([num, lazyLoad.checked, isPrime, getPrimeNumbers]);
    } else {
        const res = getPrimeNumbersLocal(num, false);
        showResult({data: res});
    }
});

const isPrimeLocal = eval(isPrime);
const getPrimeNumbersLocal = eval(getPrimeNumbers);

function showResult(e) {
    const progressLoc = e.data[1].toFixed(0);
    if (+progressLoc === 100)
        progress.innerHTML = `Found results: ${e.data[0].length} in ${e.data[2]}s`;
    else
        progress.innerHTML = `Calculation in progress... (${progressLoc}%)`;

    output.innerHTML = e.data[0].join(" ");
}
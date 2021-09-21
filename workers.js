onmessage = function (e) {
    const isPrimeLocal = eval(e.data[2]);
    const getPrimeNumbersLocal = eval(e.data[3]);

    const num = e.data[0];
    const lazy = e.data[1];
    const res = getPrimeNumbersLocal(num, lazy);

    postMessage(res)
};
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers.');
            }
        }, 1500);
    });
};

// Promise Chain
asyncAdd(5, '7').then( // First promise
(result) => {
    console.log('Success:', result);
    return asyncAdd(result, 32);
})
.then( // Second promise
(result)=> {
    console.log('Success: Should be 45', result);
})
.catch((errorMessage) => { // Catch all errors from a promise chain
    console.error('Error:', errorMessage);
});

// asyncAdd(15, 37).then(
//     (result) => {console.log('Success:', result)}, 
//     (errorMessage) => {console.error('Error:', errorMessage)});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey! It Worked!')
//         reject('Unable to fulfill promise!');
//     }, 2500);
// });
// 
// somePromise.then(
//     (message) => {
//     console.log('Success:', message);
// }, 
//     (errorMessage) => {
//     console.error('Error:', errorMessage);
// });

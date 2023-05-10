// 1. localStorage & sessionStorage

 let userName = "";
 localStorage.setItem("userName", "abba");
 console.log(window.localStorage.getItem("userName"));

 sessionStorage.setItem("userName", "Smith");
 console.log(sessionStorage.getItem("userName"));



// 2. setTimeout

const seconds = 3;
const delayTime = seconds * 1000;
let count = 0;
const intervalId = setInterval(() => {
  logMessage(++count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, delayTime);

function logMessage(count) {
  console.log(`Message ${count}`);
}




// 3. Promise

function calculateSquare(num) {
    return new Promise((resolve, reject) => {
      if (typeof num === 'number') {
        resolve(num * num);
      } else {
        reject(new Error('Invalid input, it\'s not a number'));
      }
    });
  }
  
calculateSquare(6)
.then(result => console.log(result)) // logs 16
.catch(error => console.error(error.message));

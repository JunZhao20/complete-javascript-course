'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const renderCountry = function (data, className = '') {
//   let lang = Object.keys(data[0].languages);
//   let cur = Object.keys(data[0].currencies);
//   let flag = Object.keys(data[0].flags);
//   const html = `
//   <article class="country${className}">
//     <img class="country__img" src="${data[0].flags[flag[0]]}"/>
//     <div class="country__data">
//       <h3 class="country__name">${data[0].name.common}</h3>
//       <h4 class="country__region">${data[0].region}</h4>
//       <p class="country__row"><span>🧑‍🤝‍🧑</span>${(
//         +data[0].population / 1000000
//       ).toFixed(1)}M People</p>
//       <p class="country__row"><span>🗣️</span>${data[0].languages[lang[0]]}</p>
//       <p class="country__row"><span>💰</span>${
//         data[0].currencies[cur[0]].name
//       }</p>
//       </p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = fetch('https://restcountries.com/v3.1/name/usa');
// console.log(request);

// const getJSON = function (url, errorMsg = 'Something Went Wrong ') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg}Country not found ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const getcountryData = function (name) {
//   getJSON(`https://restcountries.com/v3.1/name/${name}`)
//     .then(data => {
//       renderCountry(data);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('no neighbour found');

//       return getJSON(`https://restcountries.com/v3.1/name/${name}`);
//     })
//     .then(data => renderCountry(data, ' neighbour'))
//     .catch(err => {
//       console.log(err);
//       renderError(`${err.message}`);
//     })
//     // runs callback function regardless if the promises are fullfiled or uncaught
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getcountryData('usa');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' 
which renders a country ONLY based on GPS coordinates. 
For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat)
 and a longitude value (lng) (these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates. 
Reverse geocoding means to convert coordinates to a meaningful location, like a city and country 
name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json.
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, 
that is cheating 😉

3. Once you have the data, take a look at it in the console to see all the attributes 
that you recieved about the provided location. Then, using this data, log a messsage like this 
to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain and log errors to the console

5. This API allows you to make only 3 requests per second. If you reload fast,
 you will get this error with code 403. This is an error with the request. Remember, 
 fetch() does NOT reject the promise in this case. So create an error to reject the promise 
 yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country.
So take the relevant attribute from the geocoding API result, 
and plug it into the countries API that we have been using.

7. Render the country and catch any errors, just like we have done in the last lecture 
(you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

// const renderCountryGeo = function (data, className = '') {
//   let lang = Object.keys(data[0].languages);
//   let cur = Object.keys(data[0].currencies);
//   let flag = Object.keys(data[0].flags);
//   const html = `
//   <article class="country${className}">
//     <img class="country__img" src="${data[0].flags[flag[0]]}"/>
//     <div class="country__data">
//       <h3 class="country__name">${data[0].name.common}</h3>
//       <h4 class="country__region">${data[0].region}</h4>
//       <p class="country__row"><span>🧑‍🤝‍🧑</span>${(
//         +data[0].population / 1000000
//       ).toFixed(1)}M People</p>
//       <p class="country__row"><span>🗣️</span>${data[0].languages[lang[0]]}</p>
//       <p class="country__row"><span>💰</span>${
//         data[0].currencies[cur[0]].name
//       }</p>
//       </p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//         .then(response1 => response1.json())
//         .then(data1 => {
//           renderCountryGeo(data1);
//         });
//     })
//     .catch(error => {
//       renderError(`Something went wrong ${error.message}`);
//     })
//     .finally((countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
// });

// The new keyword would create a new object storing the outccome of the promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('The draw will begin soon');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('Its been resolved');
//     } else {
//       reject(new Error('Its been rejected'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const wait = function (seconds) {
  return new Promise(function (resolve = createImage()) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(4);
//   })
//   .then(() => console.log('ive waited 4 seconds'));

// Promise.resolve('abc').then(x => {
//   console.log(x);
// });

// Promise.reject(new Error('Problem')).catch(x => {
//   console.log(x);
// });
// console.error(x);

///////////////////////////////////////
// Coding Challenge #2

const image = document.querySelector('.images');

const listOfImgs = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      image.appendChild(img);
      resolve('Image is been set');
    });
    img.addEventListener('error', function () {
      reject(new Error('Something went wrong'));
    });
    setTimeout(() => {
      img.style.display = 'none';
    }, 2000);
  });
};

wait(2)
  .then(() => {
    createImage('img/img-1.jpg');
    return wait(2);
  })
  .then(() => {
    createImage('img/img-2.jpg');
    return wait(2);
  })
  .then(() => {
    createImage('img/img-3.jpg');
    return wait(2);
  })
  .catch(err => console.error(err));

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input.
This function returns a promise which creates a
new image (use document.createElement('img')) and sets the .src attribute to the
provided image path. When the image is done loading, append it to the DOM element 
with the 'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image ('error' event), 
reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image 
(set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current 
image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

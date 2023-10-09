'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  let lang = Object.keys(data[0].languages);
  let cur = Object.keys(data[0].currencies);
  let flag = Object.keys(data[0].flags);
  const html = `
  <article class="country${className}">
    <img class="country__img" src="${data[0].flags[flag[0]]}"/>
    <div class="country__data">
      <h3 class="country__name">${data[0].name.common}</h3>
      <h4 class="country__region">${data[0].region}</h4>
      <p class="country__row"><span>🧑‍🤝‍🧑</span>${(
        +data[0].population / 1000000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span>🗣️</span>${data[0].languages[lang[0]]}</p>
      <p class="country__row"><span>💰</span>${
        data[0].currencies[cur[0]].name
      }</p>
      </p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

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

const getJSON = function (url, errorMsg = 'Something Went Wrong ') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg}Country not found ${response.status}`);
    }
    return response.json();
  });
};

const getcountryData = function (name) {
  getJSON(`https://restcountries.com/v3.1/name/${name}`)
    .then(data => {
      renderCountry(data);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('no neighbour found');

      return getJSON(`https://restcountries.com/v3.1/name/${name}`);
    })
    .then(data => renderCountry(data, ' neighbour'))
    .catch(err => {
      console.log(err);
      renderError(`${err.message}`);
    })
    // runs callback function regardless if the promises are fullfiled or uncaught
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getcountryData('usa');
});

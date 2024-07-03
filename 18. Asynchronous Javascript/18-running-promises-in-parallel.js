///////////////////////////////
// --- 18. Running Promises in Parallel:

// --- Get JSON
// To Fetch Data, convert to Javascript Object & Check Valid Inputs
const getJson = function (url, errMsg = 'Something is Wrong!!') {
  // Fetch Data from API
  return (
    fetch(`${url}`)
      // Converting the resolved value of promise to JavaScript object using .json()
      .then(response => {
        // Checking ok status of Response
        if (!response.ok) {
          throw new Error(`Country Not Found ${response.status}!!`);
        }
        // JConverting to Javascript Object
        return response.json();
      })
  );
};

const getCountries = async function (c1, c2, c3) {
  try {
    // Fetching Data for Each Country One-by-One
    // Destructuring Array
    // const [country1] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c1}`
    // );
    // const [country2] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c2}`
    // );
    // const [country3] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c3}`
    // );
    // console.log([country1.capital, country2.capital, country3.capital]);

    // [Problem]:
    // The problem here is that none of the Data for each country depend on each other
    // But still AJAX requests are fulfilled one after the other which wastes the valuable loading time

    // [Solution]: Using Promise.all()
    // Using Promise.all() to Load Promises simultaneously can save Loading Time for us
    // Promise.all() is a method in JavaScript that takes an array (or iterable) of promises and returns a single promise
    //  This returned promise resolves when all the promises in the array have resolved or rejects when any of the promises have rejected
    // ! IMPORTANT: Promise.all() short circuits if any one Promise rejects
    // Resolved: The promise returned by Promise.all() resolves when all the input promises have resolved. It resolves with an array of the results from the input promises, in the same order as the input.
    // Rejected: The promise returned by Promise.all() rejects as soon as one of the input promises rejects. It rejects with the reason of the first promise that rejects.
    const data = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err.message);
  }
};

getCountries('portugal', 'canada', 'tanzania');

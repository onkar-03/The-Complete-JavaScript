///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// Wait function Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Select the element with the class 'images' to append the loaded images to it
const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    // Create a new image element
    const img = document.createElement('img');
    // Set the image source to the provided path
    img.src = imgPath;

    // Add event listener for 'load' event
    img.addEventListener('load', function () {
      // Append the image to the container once it's loaded
      imageContainer.append(img);
      // Resolve the promise with the image element
      resolve(img);
    });

    // Add event listener for 'error' event
    img.addEventListener('error', function () {
      // Reject the promise if there is an error loading the image
      reject(new Error('Error loading image'));
    });
  });
};

// Global Variable to Store the Current Image
let currentImage;

// PART 1
// Async Await Load Image Method for Consuming Promises
// const loadAndPause = async function () {
//   try {
//     // Load Image 1
//     let img = await createImage('./img/img-1.jpg');
//     // Log
//     console.log('Image 1 Loaded');
//     // As wait() does not have any resolved value we dont need to save it into a variable
//     await wait(2);
//     // Hide Image after 2 seconds
//     img.style.display = 'none';

//     // Load Image 2
//     img = await createImage('./img/img-2.jpg');
//     // Log
//     console.log('Image 2 Loaded');
//     // As wait() does not have any resolved value we dont need to save it into a variable
//     await wait(2);
//     // Hide Image after 2 seconds
//     img.style.display = 'none';

//     // Load Image 3
//     img = await createImage('./img/img-3.jpg');
//     // Log
//     console.log('Image 3 Loaded');
//     // As wait() does not have any resolved value we dont need to save it into a variable
//     await wait(2);
//     // Hide Image after 2 seconds
//     img.style.display = 'none';
//   } catch (err) {
//     err => console.log(err.message);
//   }
// };

// Calling Function
// loadAndPause();

// PART 2
// Async function 'loadAll' that takes an array of image paths 'imgArr'
const loadAll = async function (imgArr) {
  try {
    // Use .map to loop over the image paths array 'imgArr'
    // .map used to create a new Array and store it as 'imgs'
    // For each path, call the 'createImage' function asynchronously and await its result
    // Create Image function returns a Promise & so does the async Function
    const imgs = imgArr.map(async img => await createImage(img));

    // Log the 'imgs' array to the console to check its structure
    // It's an array of resolved Promises from the async function
    console.log(imgs);

    // As its an Array of Promises we can use the Promise.all function to resolve all of the promises simultaneously
    // Using Promise.all to wait for all Promises in 'imgs' to resolve
    // 'imgEl' will be an array of resolved image elements
    const imgEl = await Promise.all(imgs);

    // Log the resolved 'imgEl' array to the console to check its structure
    console.log(imgEl);

    // Loop over each resolved image element in 'imgEl' and add the 'parallel' class to it to display it on the Page
    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    // If any error occurs during the execution of the above code, catch it and log its message to the console
    console.error(err.message);
  }
};

// Test the 'loadAll' function with an array of image paths
loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);

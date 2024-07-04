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
// Async Await Load Image Method
const loadAndPause = async function () {
  try {
    // Load Image 1
    let img = await createImage('./img/img-1.jpg');
    // Log
    console.log('Image 1 Loaded');
    // As wait( )does not have any resolved value we dont need to save it into a variable
    await wait(2);
    // Hide Image Now
    img.style.display = 'none';

    // Load Image 2
    img = await createImage('./img/img-2.jpg');
    // Log
    console.log('Image 2 Loaded');
    // As wait() does not have any resolved value we dont need to save it into a variable
    await wait(2);
    // Hide Image Now
    img.style.display = 'none';

    // Load Image 3
    img = await createImage('./img/img-3.jpg');
    // Log
    console.log('Image 3 Loaded');
    // As wait() does not have any resolved value we dont need to save it into a variable
    await wait(2);
    // Hide Image Now
    img.style.display = 'none';
  } catch (err) {
    err => console.log(err.message);
  }
};

loadAndPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgEl = Promise.all(imgs);
    // console.log(imgEl);

    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);

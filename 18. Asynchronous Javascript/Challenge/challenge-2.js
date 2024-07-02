///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// Wait function Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// PART 1
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

// Part 2
// Global Variable to Store the Current Image
let currentImage;

// Valid Image URL Test
// Call createImage with the path to the first image
createImage('./img/img-1.jpg')
  .then(img => {
    // Store the loaded image in a global variable
    currentImage = img;
    // Log that the image has been loaded
    console.log('Image 1 Loaded');
    // Return a promise that resolves after 2 seconds
    return wait(2);
  })
  .then(() => {
    // After 2 seconds Promise Received from wait()
    // Hide the current image after 2 seconds
    currentImage.style.display = 'none';
    // Log that the image has been hidden
    console.log('Image Hidden After 2 Seconds');
    // Load the second image
    // We return the Promise so as to handle further by the .then() method
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    // Store the second loaded image
    currentImage = img;
    // Log that the second image has been loaded
    console.log('Image 2 Loaded');
    // Return a promise that resolves after 2 seconds
    return wait(2);
  })
  .then(() => {
    // Hide the current image after 2 seconds
    currentImage.style.display = 'none';
    // Log that the image has been hidden
    console.log('Image Hidden After 2 Seconds');
    // Load the third image
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    // Store the third loaded image
    currentImage = img;
    // Log that the third image has been loaded
    console.log('Image 3 Loaded');
    // Return a promise that resolves after 2 seconds
    return wait(2);
  })
  .then(() => {
    // Hide the current image after 2 seconds
    currentImage.style.display = 'none';
    // Log that the image has been hidden
    console.log('Image Hidden After 2 Seconds');
  })
  // Catch and log any errors that occur during the process
  .catch(err => console.error(err));

// Invalid Image URL Test
// createImage('./img/img-1.jpgd')
//   .then(img => console.log('Image 1 Loaded'))
//   .catch(err => console.error(err));

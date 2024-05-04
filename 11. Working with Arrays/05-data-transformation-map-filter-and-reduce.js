// ------------ What are Map Filter & Reduce Methods ??
// - In JavaScript, there are three big and important array methods that we use all the time to perform data transformations
// -  So basically, these are methods that we use to create new arrays based on transforming data from other arrays

// --- A) Map Method :
// - First the map method is yet another method that we can use to loop over arrays.
// - So, map is actually similar to the forEach method that we studied before but with the difference that map creates a brand new array based on the original array.
// -  So essentially the map method takes an array, loops over that array and in each alteration, it applies a callback function that we specify on our code to the current array element.
// - So in this example of the pdf we can see that we multiplied each element by 2. And with this callback in place, the map method multiplies every single element by two and puts it into a new array.
// -  We say that it maps the values of the original array to a new array and that's why this method is called map.

// --- forEach VS Map :
// - It is extremely useful. Usually way more useful than in forEach method because forEach simply allows us to do some work with each array element.
// -  But map on the other hand, builds us a brand new array containing the results of applying an operation to the original array

// --- B) Filter Method:
// - Next up we have the filter method, which as the name says, is used to filter for elements in the original array which satisfy a certain condition.
// - So in this example of the pdf we can see that we are only looking for elements greater than two. So all the elements that pass the test that we specified will make it into a new filtered array. Or in other words elements for which the condition is true will be included in a new array that the filter method returns.
// - All other elements will get filtered out so they will not be included in the new array.

// --- C) Reduce Method:
// - Reduce method which we use to boil down all the elements of the original array into one single value.
// - An example of this can be to add all the elements of an array together.
// - Now it's this value that then actually gets returned from the reduce method in the end. So there is no new array in this case but only the reduced value.
// - So you can imagine this as a snowball, it keeps getting bigger and bigger as it rolls down a hill. And so this is known as the snowball effect and reduce is pretty similar to that, okay? So keep that in mind as a nice analogy.

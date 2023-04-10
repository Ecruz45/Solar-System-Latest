/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  function maxFind(obj) {
    let arrayOfKeys = Object.keys(obj);
    let arrayOfValues = Object.values(obj);
 
    let max = 0;
    let year = "";
 
    for (let i =0; i < arrayOfKeys.length; i++) {
       if (arrayOfValues[i] > max) {
          max = arrayOfValues[i];
          year = arrayOfKeys[i];
       }
    }
    return parseInt(year);
 }
 
 let greatestYear = data.asteroids.reduce((total, asteroid) => {
   total[asteroid.discoveryYear] = (total[asteroid.discoveryYear] || 0) + 1;
   return total;
 }, {});
 
 return  maxFind(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

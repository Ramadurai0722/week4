//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here
function arrayFlattener(arrayFlattener){
  var newArr =[];
  for( i=0; i<arrayFlattener.length; i++){
    newArr = newArr.concat(arrayFlattener[i]) 
  }
  return newArr;
}
  
  //uncomment next line one by one, then check the console for results
   console.log(arrayFlattener([1,[2,3],4,5]))
  
  //don't change this li`ne
  if (typeof module !== "undefined") {
    module.exports = {
      arrayFlattener,
    };
  }
  
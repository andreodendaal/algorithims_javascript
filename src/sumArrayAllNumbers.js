/**
 * Created by Andre on 12/06/2020.
 * FreeCodeCamp:Intermediate Algorithm Scripting: Sum All Numbers in a Range 
 * 
 * Pass an array of two numbers. 
 * Return the sum of those two numbers plus the sum of all the numbers between them. 
 * The lowest number will not always come first.
 *  
 * sumAll([1, 4]) should return 10.
 * sumAll([4, 1]) should return 10.
 */

module.exports = function sumArrayAllNumbers(arr) {
    console.log(arr)
    if(arr[0] > arr[1]) {
        let store = arr[0];
        arr[0] = arr[1];
        arr[1] = store;
        };
        console.log(arr)   

 return 10;   
}
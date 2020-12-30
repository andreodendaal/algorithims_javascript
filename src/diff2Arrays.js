/**
 * Created by Andre on 12/16/2020.
 * FreeCodeCamp:Intermediate Algorithm Scripting: Diff Two ArraysPassed
 * 
 * Compare two arrays and return a new array with any items only found in one 
 * of the two given arrays, but not both. In other words, 
 * return the symmetric difference of the two arrays.
 * 
 * Note
 * You can return the array with its elements in any order.
 *  
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]
 *  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4])
 */

module.exports = function diff2Arrays(arr1, arr2) {
    var newArr = [];
    let arr2copy = arr2;
    let arr1copy = arr1;
    
    for (let idx1 in arr1) {
        
        let lookupVal = arr1[idx1];
       
        if(arr2.indexOf(lookupVal) >= 0) {          
            let idx2 = arr2.indexOf(lookupVal)
            delete arr1[idx];
            delete arr2[idx2];
        } 
      
    };
     
    newArr = arr1.concat(arr2).filter(function () {
        return true
      });

    return newArr;   
}
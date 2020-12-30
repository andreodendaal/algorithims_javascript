/**
 * Created by Andre on 12/20/2020.
 * FreeCodeCamp:Intermediate Algorithm Scripting: Wherefore art thouPassed
 * 
 * Make a function that looks through an array of objects (first argument) 
 * and returns an array of all objects that have matching name and value pairs 
 * (second argument). Each name and value pair of the source object has to be present 
 * in the object from the collection if it is to be included in the returned array.
 * Note
 * 
 *  
 * whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
 * { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
 *  should return 
 * [{ first: "Tybalt", last: "Capulet" }])
 */
module.exports = function whatIsInAName(collection, source) {
   
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys);
    //console.log(source);
    //console.log(collection);
    let arr = collection.filter((obj) => {
        return sourceKeys.every((elem) => {return obj.hasOwnProperty(elem) 
            && obj[elem] === source[elem]})    
    });

  return arr;
};


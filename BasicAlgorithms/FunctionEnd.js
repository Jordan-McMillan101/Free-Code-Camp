/**
 * given a string and a target, will return true if the target is at the end of the string
 * @param  {string} str    string or phrase
 * @param  {string} target target substring
 * @return {boolean}        
 */
function end(str, target) {
  lenOfTarget = target.length * -1;
  console.log(lenOfTarget);
  ending = str.substr(lenOfTarget);
  console.log(ending);
  if (ending === target){
  	return true;
  }
  return false;
}




console.log(end("Bastian", "n"));
console.log(end("He has to give me a new name", "name"));
console.log(end("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

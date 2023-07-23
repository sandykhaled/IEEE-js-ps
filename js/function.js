
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",").filter((element) => { return (isNaN(parseInt(element))) && (element !== ",");}).map((element, index, array)=>{if (element.length > (+(isNaN(",")))) {return array[index]= array[index][+(!isNaN(","))];} else {return element;} }).slice(!(isNaN("_")),length-isNaN(","), length-(isNaN("_"))).reduce((word, letter)=>{if (letter == "_"){return word += " ";} else {return word += letter;}});

console.log(solution);
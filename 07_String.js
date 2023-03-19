let name1 = "John";
let name2 = 'Cena';

console.log(name1);
console.log(name1[0]);


//String Interpolation
let sentence = `${name1} is a good boy`;
console.log(sentence);


//String Concatenation
let name3 = name1 + " " + name2;
// let name3 = `${name1} ${name2}`;
// let name3 = name1.concat(" ", name2);


//String Methods
name3.length
name3.toUpperCase()
name3.toLowerCase()
name3.indexOf("Cena")           //returns starting index of the string
name3.lastIndexOf("Cena")       //returns last index of the string
name3.slice(0, 7)               //returns a part of the string  (start, end)
name3.slice(2)                  //returns a part of the string  (start) till end
name3.trim()                    //returns a new string with removed spaces
name3.replace("Cena", "Rock")   //returns a new string with replaced value
name3.includes("Cena")          //returns true or false
name3.startsWith("Cena")        //returns true or false
name3.endsWith("Cena")          //returns true or false
name3.split(" ")                //returns an array of strings with split value (delimiter)


//Escape Sequences
let time = 'nine o\' clock';
// let time = "nine o' clock";
// let time = "nine o\' clock";
console.log(time);


/*
Escape Sequences
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t horizontal tab
\v vertical tab
\b backspace
\f form feed
*/
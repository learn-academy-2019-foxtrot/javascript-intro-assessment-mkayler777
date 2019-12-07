// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

//I know I still have quite a ways to go with polishing up my code!
// But I am feeling better about working with the terminal and my laptop, so this is good progress for me! Thank you for your patience!

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra

    console.log(mantra.includes('B'));
 
// 1b. Write the code that determines if there is an 'x' in mantra.

    console.log(mantra.includes("x"));      

// 1c. Write the code that determines if there is a 'v' in mantra.

    console.log(mantra.includes('v'));

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

    if(myDog.length > myCat.length) {
        console.log(myDog + " has more letters")
        } else {
        console.log(myCat + " has more letters")
        }

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

    console.log(myDog + ", " + myCat);

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!";

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

    for(let i=0; i < myMessage.length; i++) {
    console.log(myMessage[i]);
    }
// 3b. Write the code that logs each letter of the message using map.

    myMessage.split('').map((letter)=> {
        console.log(letter);
        });

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

 const noVowels = (string)=>{
     const vowels = ["a", "e", "i", "o", "u"];
     const letters = string.split('').filter((letter) => {
     return !vowels.includes(letter);
        });
     return letters.join("");
    };

console.log("noVowels", noVowels(testString));


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.


// ------------------------------- Consider the following variable:

    var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

    var animal = toonimals.filter(value => value.animal === "cat");
    console.log(animal);


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

    var animal = toonimals.filter(value => value.animal !== "cat") 
    
    console.log(animal);

     
//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"


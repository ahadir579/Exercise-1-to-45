// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Ali haider Phull";

// step 1 Lower case:

let lowercaseName: string = personName.toLowerCase();

// step 2 upper case;

let uppercaseName: string = personName.toUpperCase();

console.log(lowercaseName);
    console.log(uppercaseName);

// step 3 title case

let words: string[] = personName.split(" ");
let titlecaseName: string = ""

for (let i=0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
}

console.log(titlecaseName)

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const bouquet = 
{
    name : "Spring Delight",
    Price : 300,
    Description : "Beautiful arrangement of spring flowers"
}

// define an array of objects
let bouquets: Array<typeof bouquet> = [];
// pushing multipul object

bouquets.push(bouquet);
bouquets.push({
    name: "summer bliss",
    Price: 400,
    Description: "Beautiful arrangement of summer flowers"
})
let bouquet3 = {
    name: "Red Hot",
    Price: 450,
    Description: "Beautiful arrangement of red roses"
}
bouquets.push(bouquet3)
// console.log(bouquets)
bouquets.push({name:"Freshness", Price:250, Description:"Beautiful arrangement of white and yellow roses "})
// function to display bouquets

function displayBouquets(bouquets: Array<typeof bouquet>)

{
    for (let i of bouquets){
    console.log(`
    title: ${i.name}
    description: ${i.Description}
    price: ${i.Price}
    ----------------\n`)
 }
}
displayBouquets(bouquets);

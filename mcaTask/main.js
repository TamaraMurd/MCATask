fetch("https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1")
.then((respone) => {
    return respone.json();
})
.then((data) => {
   let food = data
    console.log(food)

let domesticFood = food.filter(x=>x.domestic === true);
let importedFood = food.filter(x=>x.domestic === false);

domesticFood.sort((a, b) => (a.name > b.name) ? 1 : -1);
importedFood.sort((a,b) => (a.name > b.name) ? 1 : -1 );

let outputText = '';


outputText += ". Domestic"
domesticFood.forEach(element => {
    let description = element.description.length > 10 ? element.description.substring(0, 10) : element.description;
    let weight = element.weight ? `${element.weight} g` : "N/A";
    outputText += `   \n...${element.name}\n   Price: $${element.price}\n   ${description}...\n   Weight: ${weight} \n`;
});
outputText += ". Imported"
    importedFood.forEach(element => {
    let description = element.description.length > 10 ? element.description.substring(0, 10) : element.description;
    let weight = element.weight ? element.weight : "N/A";
    outputText += `   \n...${element.name}\n   Price: $${element.price}\n   ${description}...\n   Weight: ${weight} \n`;

})


let domesticCost = domesticFood.reduce((total, el) => total + el.price, 0);
let importedCost = importedFood.reduce((total, el) => total + el.price, 0);
let domesticCount = domesticFood.length;
let importedCount = importedFood.length;

outputText += ` Domestic cost: $${domesticCost} \n Imported Cost: $${importedCost} \n Domestic count: ${domesticCount} \n Imported Count: ${importedCount}`

console.log(outputText)
document.write("Open the console!")


})




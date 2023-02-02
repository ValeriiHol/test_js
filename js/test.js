const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },  
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion} is already in your inventory!`;
            }
        }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {        
        for (let i = 0; i < this.potions.length; i += 1 ) {
            console.log(this.potions[i]);  
            if (potionName === this.potions[i].name) {
                console.log(this.potions[i].name);  
                this.potions.splice(i, 1);
            }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1 ) {
            console.log(this.potions[i]);  
            if (oldName === this.potions[i].name) {
                console.log(this.potions[i].name);  
                this.potions[i].name = newName;
            }
        }    
    },
    // Change code above this line
  };
  
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }); 
//     console.log(atTheOldToad.getPotions()); 
//     atTheOldToad.addPotion({ name: "Power potion", price: 270 });
//     console.log(atTheOldToad.getPotions()); 
// console.log(atTheOldToad.addPotion({ name: "SSSSbreath", price: 700 })); 
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); 

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions()); 
    // atTheOldToad.removePotion("Dragon breath");
    console.log(atTheOldToad.getPotions()); 


// console.log(bookShelf.getBooks()); 
// console.log(bookShelf.addBook("Haze")); 
// console.log(bookShelf.removeBook("Red sunset")); 
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); 
// console.log(makeTask({ text: "Buy bread" })); 
console.log(); 


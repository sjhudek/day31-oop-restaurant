console.info('Welcome to Steve\'s Feedbag!')
console.log('=-=-=-=-=-=-=-=-=-=-=')

class FoodItem {
    constructor(name, calories, vegan, glutenFree) {
        this.name = name;
        this.calories = calories;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
    }

    displayFoodItem() {
        var resultStr = `${this.name} has ${this.calories} calories`;

        if (this.vegan === true) {
            resultStr += ' is vegan';
        } else {
            resultStr += ' is not vegan';
        }

        if (this.glutenFree === true) {
            resultStr += ' is gluten free!';
        } else {
            resultStr += ' is not gluten free.'
        }
        return (resultStr);
    }
}

// Shrimp Scampi
var freshShrimp = new FoodItem('Fresh Shrimp', 215, false, true);
var angelHairPasta = new FoodItem('Angel Hair Pasta', 150, true, false);
var tomato = new FoodItem('Tomato', 25, true, true);
var garlicCloves = new FoodItem('Garlic Cloves', 20, true, true);
var heavyCream = new FoodItem('Heavy Cream', 120, false, true);
var oliveOil = new FoodItem('Olive Oil', 45, true, true);

// Orange Chicken
var chicken = new FoodItem('Chicken', 200, false, true);
var egg = new FoodItem('Egg', 35, false, true);
var orangeJuice = new FoodItem('Orange Juice', 25, true, true);
var garlic = new FoodItem('garlic', 10, true, true);
var cornStarch = new FoodItem('Corn Starch',15, true, true);
var flour = new FoodItem('Flour', 50, true, false);

var shrimpScampiIngredients = [freshShrimp, angelHairPasta, tomato, garlicCloves, heavyCream, oliveOil];
var orangeChickenIngredients = [chicken, egg, orangeJuice, garlic, cornStarch, flour];

class Plate {
    constructor(name, description, price, ingredients) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
    }

    displayPlate() {
        return (`${this.name} contains ${this.description} and for a low low price of ${this.price} you can get the following ingredients ${this.getFoodDisplay()}

            `)
    }

    isVegan() {
        if (this.ingredients.every(function (element) {
            element.vegan === true;
        })) {
            return true;
        } else {
            return false
        }
    }

    isGlutenFree() {
        if (this.ingredients.every(function (element) {
            element.glutenFree === true;
        })) {
            return true;
        } else {
            return false
        }
    }

    getFoodDisplay() {
        var resultArr = [];
        this.ingredients.forEach((element) => {
            resultArr.push(element.displayFoodItem());
        })
        return (resultArr.join(','));
    }
}

var shrimpScampiPlate = new Plate('Schrimp Scampi', 'Chock full of shrimp!!', 21.95, shrimpScampiIngredients);
var orangeChickenPlate = new Plate('Orange Chicken', 'A fan favorite!!', 15.95, orangeChickenIngredients);

class Menu {
    constructor(name, plates) {
        this.name = name;
        this.plates = plates;
    }

    displayMenu() {
        return (`Today's menu is from ${this.name}.  It includes these plates:
            ${this.getPlateList()} 
            `)
    }

    getPlateList() {
        var resultArr = [];
        this.plates.forEach((element) => {
            resultArr.push(element.displayPlate());
        })

        return (resultArr.join(' '));
    }
}

var theMenu = new Menu(`Steve\'s Feed Bag`, [shrimpScampiPlate, orangeChickenPlate]);
//console.log(JSON.stringify(theMenu))
//console.log(theMenu.displayMenu())

class Restaurant {
    constructor(name, description, menu) {
        this.name = name;
        this.description = description;
        this.menu = menu;
    }

    showRestaurant() {
        return (`Welcome to ${this.name}! Our motto is ${this.description}. Thank you for your loyalty!! ${this.menu.displayMenu()}  We hope you like it!

            `)
    }
}

var stevesFeedbag = new Restaurant(`Steve's Feedbag`, `"The best dang food you ever ate!!!"`, theMenu)

console.info(stevesFeedbag.showRestaurant());
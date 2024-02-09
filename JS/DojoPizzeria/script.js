function pizzaOven (crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza = pizzaOven("deep dish","traditional","mozzarella", ["pepperoni", "sausage"]);
console.log(pizza);
var pizza = pizzaOven("hand tossed","marinara",["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza);
var pizza = pizzaOven("deep dish","white suace",["mozzarella,cheddar"],["mushrooms","jalapeno"]);
console.log(pizza);
var pizza = pizzaOven("deep dish","traditional",["mozzarella,cheddar"],["mushrooms","jalapeno","chicken"]);
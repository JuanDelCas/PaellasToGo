class Paella {
    constructor(paellaName, time, price) {
        this.paellaName = paellaName
        this.rice = ("Parboiled Medium Grain Rice");
        this.veggies = [];
        this.meat = [];
        this.seaFood = [];
        this.broth = [];
        this.oil = ("Extra Virgin Olive Oil");
        this.spices = ("Saffron, Parsley and Smoked Paprika");
        this.time = time
        this.location = ("Atlanta Downtown")
        this.basePrice = 10;
        this.ingredientPrice = {
            onion: 1.5,
            garlic: 1.5,
            greenPepper: 1.5,
            redPepper: 1.5,
            tomato: 1.5,
            chicken: 2,
            pork: 2.5,
            beef: 2.5,
            calamari: 3,
            clams: 3.5,
            shrimp: 3.5

            
        }
        this.price = price
        

    }
}

addBroth()
addVeggies()
addMeat()
addSeafood()

class MeatPaella extends Paella {
    constructor(paellaName, time, price)
    
}

class SeaFoodPaella extends Paella {

}

class MixPaella extends Paella{

}
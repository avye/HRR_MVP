class Animal {
  constructor(name, type, diet, lifespan, size, weight, image) {
    this.name = name;
    this.type = type;
    this.diet = diet;
    this.lifespan = lifespan;
    this.size = size;
    this.weight = weight;
    this.image = image;
  }
};

// lifespan = years, size = ft, weight = lbs
var albatross = new Animal('Albatross', 'Bird', 'Carnivore', '50', '11', '22', 'http://www.antarctica.gov.au/__data/assets/image/0011/148376/varieties/antarctic.jpg');
var caneToad = new Animal('Cane Toad', 'Amphibian', 'Omnivore', '10', '.5', '2.9', 'http://images.natureworldnews.com/data/images/full/2450/cane-toad-in-australia.jpg');

var exampleAnimals = [albatross, caneToad];

window.exampleAnimals = exampleAnimals;
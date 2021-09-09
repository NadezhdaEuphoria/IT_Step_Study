// Shop Stocktaking
// Create a function that receives the array of goods and returns the cost that should be paid for all these goods.

// Your code should:
// - Validate the data according to the following rules: item: string,  type: string, weight: number,
// quantity: number, pricePerKilo: `“$” + number` - string,  pricePerItem: `“$” + number` - string
// - Print to the console the total quantity of all watermelons (`Watermelons - ${quantity}`);
// - Print to the console the total weight of all apples (`Apples - ${weight}`);
// - Sort the array in alphabetical order by item field and print it to the console;
// - Sort the array by cost of the record and print it to the console;
// - Print to the terminal the type of oranges with the least price (`The cheapest orange type is: ${type}`);
// - Print to the console the cost of the goods by item name (`Apples - ${costApples},
// Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges}`);
// - Print to the console the result of the execution of this function.

// Note: Try to minimize your code.
// Input array in JSON format:

// [
//   {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
//   {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
//   {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
//   {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
//   {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
//   {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
//   {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
//   {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
//   {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
//   {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
//   {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
//   {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
// ]

// Completed task should be uploaded to github as your own repository. Please insert the link to the repository
//  containing your completed test task below in this form.

let info = [
  { item: "apple", type: "Fuji", weight: 10, pricePerKilo: "$3" },
  { item: "orange", type: "Clementine", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Nova", quantity: 1, pricePerItem: "$5" },
  { item: "orange", type: "Navel", weight: 6, pricePerKilo: "$7" },
  { item: "pineapple", type: "Queen", quantity: 4, pricePerItem: "$15" },
  { item: "pineapple", type: "Pernambuco", quantity: 3, pricePerItem: "$12" },
  { item: "apple", type: "Cameo", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Trio", quantity: 2, pricePerItem: "$9" },
  {
    item: "pineapple",
    type: "Red Spanish",
    quantity: 3,
    pricePerItem: "$9,99",
  },
  { item: "watermelon", type: "Millionaire", quantity: 2, pricePerItem: "$7" },
  { item: "orange", type: "Tangerine", weight: 4, pricePerKilo: "$4,99" },
  { item: "apple", type: "Jazz", weight: 4, pricePerKilo: "$5" },
];

// let productsArray = JSON.parse(info);

// let getCost = (array) => {
//   console.log(array);
// };

let parseInfo = (info) => {
  if (!info) return {};
  if (typeof info === "object") return info;
  if (typeof info === "string") return JSON.parse(info);

  return {};
};

let products = parseInfo(info);
console.log(products);

// - Validate the data according to the following rules: item: string,  type: string, weight: number,
// quantity: number, pricePerKilo: `“$” + number` - string,  pricePerItem: `“$” + number` - string

let validateInfo = (info) => {
  info.forEach((object) => {
    if (
      typeof object.item !== "undefined" &&
      typeof object.type !== "undefined" &&
      typeof object.weight !== "undefined" &&
      typeof object.pricePerKilo !== "undefined"
    ) {
      let priceKilo = object.pricePerKilo.replace("$", "");
      priceKilo = parseInt(priceKilo);
      object.pricePerKilo = priceKilo;
      if (
        typeof object.item === "string" &&
        typeof object.type === "string" &&
        typeof object.weight === "number" &&
        typeof object.pricePerKilo === "number"
      ) {
        // console.log("validation 1.1 succeed");
        return true;
      } else {
        return false;
      }
    } else if (
      typeof object.item !== "undefined" &&
      typeof object.type !== "undefined" &&
      typeof object.quantity !== "undefined" &&
      typeof object.pricePerItem !== "undefined"
    ) {
      let pricePerItem = object.pricePerItem.replace("$", "");
      pricePerItem = parseInt(pricePerItem);
      object.pricePerItem = pricePerItem;
      if (
        typeof object.item === "string" &&
        typeof object.type === "string" &&
        typeof object.quantity === "number" &&
        typeof object.pricePerItem === "number"
      ) {
        // console.log("validation 1.2 succeed");
        return true;
      } else {
        return false;
      }
    }
  });
};

// validateInfo(products);
// - Print to the console the total quantity of all watermelons (`Watermelons - ${quantity}`);
// Print to the console the total weight of all apples (`Apples - ${weight}`);

let countItems = (array) => {
  let quantity = 0,
    weight = 0;
  array.forEach((object) => {
    if (object.item == "watermelon") {
      quantity++;
    }
    if (object.item == "apple") {
      weight += object.weight;
    }
  });
  console.log(`Watermelons - ${quantity}`);
  console.log(`Apples - ${weight}`);
};

countItems(products);

// - Sort the array in alphabetical order by item field and print it to the console;

let sortItems = (array) => {
  let sort = [];
  array.forEach((object) => {
    if (object.item) {
      sort.push(object.item);
    }
  });
  sort.sort((a, b) => a - b);
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  sort.sort(compare);

  console.log(sort);
};

sortItems(products);

// - Sort the array by cost of the record and print it to the console;
// - Print to the terminal the type of oranges with the least price (`The cheapest orange type is: ${type}`);
// - Print to the console the cost of the goods by item name (`Apples - ${costApples},
// Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges}`);
// - Print to the console the result of the execution of this function.

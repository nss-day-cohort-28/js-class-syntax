class Restaurant {
  constructor(props) {
    this.name = props.name;
    this.address = props.address;
    this.hasStromboli = props.hasStromboli;
    this.hourOpen = props.hourOpen;
    this.hourClosed = props.hourClosed;
    this.menu = {
      small_pizza: null,
      large_pizza: null,
      soda: null,
      salad: null,
      breadsticks: null
    };
  }

  pizzaOrder(size, toppingsArr) {
    console.log(
      `You ordered a ${size} pizza covered in ${toppingsArr.join(
        ", "
      )}. Please pick up before ${this.hourClosed}!`
    );
  }

  // Update/add properties with a method
  setMenu(menuItems) {
    for (let item in menuItems) {
      console.log(item);
      this.menu[item] = Number(menuItems[item]); //make sure the value is a number, not a string
    }
  }

  // Get a special, combined price for a combo of a small pizza, soda, and salad.
  calcCombo() {
    let discount = 0.8;
    let comboPrice = this.menu.small_pizza + this.menu.soda + this.menu.salad;

    return `$${(comboPrice * discount).toFixed(2)}`;
  }

  // A restuarant can define what a combo meal is based on its own menu items
  set combo(items) {
    if (typeof(items) === "array")
      this._combo = items
  }

  get combo() {
    return this._combo
  }

  // Then it can calculate the price of a combo with a 20% discount off the regular menu price. What a deal!
  get comboPrice() {
    if (this._combo) {
      let discount = 0.85
      let comboPrice = this._combo.reduce(
        (currTotal, nextItem) => currTotal + nextItem
      );

      return `$${(comboPrice * discount).toFixed(2)}`;
    } else {
      return `${this.name} does not offer a combo meal at this time`;
    }
  }

  set nickname(nick) {
    if (typeof(nick) === 'string' && !nick.includes("fu"))
      this._nickname = nick
  }

  // allows us to ask for 'foo.nickname', even though there's no `nickname` prop. We set `nickname` as `_nickname` in the setter!
  get nickname() {
    return this._nickname
  }


}
// Now we can get the combo price with foo.combo, but we can't set it with foo.combo = .25 and accidentally make my company bankrupt.

let ginos = new Restaurant({
  name: "Gino's",
  address: "123 Sesame St",
  hasStromboli: true,
  hourOpen: "10:00 a.m.",
  hourClosed: "10:00 p.m."
});

console.log(ginos);

ginos.setMenu({
  small_pizza: 7.99,
  large_pizza: 13.99,
  soda: 2.59,
  salad: 3.75,
  breadsticks: 4.25
});

console.log(ginos);

// let comboPrice = ginos.calcCombo("breadsticks")
// comboPrice

ginos.setMenu({ soda: 2.85 });
console.log(ginos.menu);

ginos.combo = [ginos.menu.small_pizza, ginos.menu.soda, ginos.menu.salad]

console.log(ginos.combo)

console.log(ginos.comboPrice);

// Will not work!
// ginos.comboPrice = .25
console.log(ginos.comboPrice)

ginos.nickname = "fun palace"
console.log(ginos.nickname) // undefined
ginos._nickname = "grease palace"
console.log(ginos.nickname) // grease palace

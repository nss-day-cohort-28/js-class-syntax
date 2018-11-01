const myObj = {
  name: "Fred",
  color: "red"
}
myObj

class Restaurant {
  /*
      The constructor method is invoked automatically
      by JavaScript when you use the `new` keyword to
      create an instance of a restaurant. You don't
      need to invoke it in your code.
  */
  constructor(props) {
    this.name = props.name
    this.address = props.address
    this.hasStromboli = props.hasStromboli
    this.hourOpen = props.hourOpen
    this.hourClosed = props.hourClosed
    this.menu = {
      small_pizza: null,
      large_pizza: null,
      soda: null,
      salad: null,
      breadsticks: null
    }
  }

  placeOrder(size, toppingsArr) {
      console.log(`You ordered a ${size} pizza covered in ${toppingsArr.join(", ")}. Please pick up before ${this.hourClosed}!`)
    }

  /*
    Method to set the menu items after the object has
    been created.
*/
  setMenu(menuItems) {
    for (const item in menuItems) {
      this.menu[item] = Number(menuItems[item])
    }
  }

  /*
    Get a special, combined price for a combo of a
    small pizza, soda, and a salad.
*/
  comboPrice() {
    let discount = .85
    let comboPrice =
      this.menu.small_pizza +
      this.menu.soda +
      this.menu.salad

    return `$${(comboPrice * discount).toFixed(2)}`
  }
}

// const pizzaJoint = new Restaurant()
// pizzaJoint
// pizzaJoint.placeOrder("small", ["cheese"])

const nellysProperties = {
  name: "Nelly's Pizza",
  address: "8001 Main Street",
  hasStromboli: true,
  hourOpen: "10:30 am",
  hourClosed: "9:30 pm"
}

const nellys = new Restaurant(nellysProperties)
console.log(nellys)

nellys.placeOrder("extra-huge", ["cheese", "monkeys"])

const nellysMenu = {
  small_pizza: 9.99,
  large_pizza: 14.99,
  soda: 2.48,
  salad: 8.00,
  breadsticks: 4.50
}
nellys.setMenu(nellysMenu)

console.log(nellys.comboPrice())


// Make a Bird Class
class BigScaryBird {

  constructor(props) {
    this.height = props.height
    this.flightless = true
    this.isExtinct = props.isExtinct
    this.name = props.name
    this.runningSpeed = props.runningSpeed
  }

  toString() {
    return `The ${this.name} is a big, scary bird that stands up to ${this.height} and can run up to ${this.runningSpeed}!`
  }
}

const cassowaryProps = {
  height: "6 ft",
  isExtinct: false,
  name: "Cassowary",
  runningSpeed: "30 mph"
}

const cassowary = new BigScaryBird(cassowaryProps)

console.log(cassowary.toString())

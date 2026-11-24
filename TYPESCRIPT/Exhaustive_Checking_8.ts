/*

Exhaustive Checking is used to make sure we handle every possible case.
  Where we use it: When using switch statements, to make sure no case is missed.
*/

// 1. Fruit Example
type Fruit = "Apple" | "Mango" | "Banana";

function eatFruit(fruit: Fruit) {
  switch (fruit) {
    case "Apple":
      console.log("Eating Apple");
      break;
    case "Mango":
      console.log("Eating Mango");
      break;
    case "Banana":
      console.log("Eating Banana");
      break;
    default:
      const check: never = fruit;
  }
}

eatFruit("Apple");

// 2. Traffic Light Example
type TrafficLight = "Red" | "Yellow" | "Green";

function checkTraffic(light: TrafficLight) {
  switch (light) {
    case "Red":
      console.log("Stop");
      break;
    case "Yellow":
      console.log("Wait");
      break;
    case "Green":
      console.log("Go");
      break;
    default:
      const check: never = light;
  }
}

checkTraffic("Red");

// 3. User Role Example
type Role = "Admin" | "User" | "Guest";

function checkRole(role: Role) {
  switch (role) {
    case "Admin":
      console.log("Full access");
      break;
    case "User":
      console.log("Limited access");
      break;
    case "Guest":
      console.log("Read-only access");
      break;
    default:
      const check: never = role;
  }
}

checkRole("Admin");

// 4. Payment Status Example
type PaymentStatus = "Pending" | "Success" | "Failed";

function checkPayment(status: PaymentStatus) {
  switch (status) {
    case "Pending":
      console.log("Payment is pending");
      break;
    case "Success":
      console.log("Payment completed");
      break;
    case "Failed":
      console.log("Payment failed");
      break;
    default:
      const check: never = status;
  }
}

checkPayment("Success");

// 5. Animal Example
type Animal = "Dog" | "Cat" | "Cow";

function makeSound(animal: Animal) {
  switch (animal) {
    case "Dog":
      console.log("Bark");
      break;
    case "Cat":
      console.log("Meow");
      break;
    case "Cow":
      console.log("Moo");
      break;
    default:
      const check: never = animal;
  }
}

makeSound("Cow");

// 6. Order Status Example
type OrderStatus = "Placed" | "Shipped" | "Delivered";

function checkOrder(status: OrderStatus) {
  switch (status) {
    case "Placed":
      console.log("Order placed");
      break;
    case "Shipped":
      console.log("Order shipped");
      break;
    case "Delivered":
      console.log("Order delivered");
      break;
    default:
      const check: never = status;
  }
}

checkOrder("Shipped");

// 7. Direction Example
type Direction = "North" | "South" | "East" | "West";

function move(direction: Direction) {
  switch (direction) {
    case "North":
      console.log("Moving North");
      break;
    case "South":
      console.log("Moving South");
      break;
    case "East":
      console.log("Moving East");
      break;
    case "West":
      console.log("Moving West");
      break;
    default:
      const check: never = direction;
  }
}

move("North");

// 8. Shape Example
type Shape = "Circle" | "Square" | "Rectangle";

function drawShape(shape: Shape) {
  switch (shape) {
    case "Circle":
      console.log("Drawing Circle");
      break;
    case "Square":
      console.log("Drawing Square");
      break;
    case "Rectangle":
      console.log("Drawing Rectangle");
      break;
    default:
      const check: never = shape;
  }
}

drawShape("Circle");

// 9. Login Status Example
type LoginStatus = "LoggedIn" | "LoggedOut" | "Blocked";

function checkLogin(status: LoginStatus) {
  switch (status) {
    case "LoggedIn":
      console.log("Welcome User");
      break;
    case "LoggedOut":
      console.log("Please Login");
      break;
    case "Blocked":
      console.log("Account Blocked");
      break;
    default:
      const check: never = status;
  }
}

checkLogin("LoggedIn");

// 10. Notification Example
type Notification = "Email" | "SMS" | "Push";

function sendNotification(type: Notification) {
  switch (type) {
    case "Email":
      console.log("Sending Email");
      break;
    case "SMS":
      console.log("Sending SMS");
      break;
    case "Push":
      console.log("Sending Push Notification");
      break;
    default:
      const check: never = type;
  }
}

sendNotification("Email");

export {};

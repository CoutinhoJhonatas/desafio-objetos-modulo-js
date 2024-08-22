import Order from "./models/order.js";
import { total } from "./services/order-service.js";

const order1 = new Order(1034, 150.00, 20.0);
const order2 = new Order(2282, 800.00, 10.0);
const order3 = new Order(1309, 95.90, 0.0);

console.log(`Pedido código ${order1.code}`);
console.log(`Valor total: R$ ${total(order1).toFixed(2)}`);

console.log(`Pedido código ${order2.code}`);
console.log(`Valor total: R$ ${total(order2).toFixed(2)}`);

console.log(`Pedido código ${order3.code}`);
console.log(`Valor total: R$ ${total(order3).toFixed(2)}`);
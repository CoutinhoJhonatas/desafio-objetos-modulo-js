export function shipment(order) {
    let value = 0.0;

    if(order.basic < 100.00) {
        value = 20.00;
    } else if(order.basic < 200.00) {
        value = 12.00;
    }

    return value;
}
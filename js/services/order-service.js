import * as shippingService from './shipping-service.js';

export function total(order) {
    return order.basic - (order.basic * (order.discount / 100)) + shippingService.shipment(order);
}
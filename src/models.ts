// ./src/app/models.ts

export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

export enum PaymentType {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  PAYPAL = "PAYPAL",
}

export enum PurchaseOrderStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  SHIPPED = "SHIPPED",
  RECEIVED = "RECEIVED",
  CANCELED = "CANCELED",
}

export enum DiscrepancyType {
  OVERSTOCK = "OVERSTOCK",
  UNDERSTOCK = "UNDERSTOCK",
  DAMAGED = "DAMAGED",
}

export enum NotificationType {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public role: UserRole
  ) {}
}

export class InventorySummary {
  constructor(
    public totalItems: number,
    public totalValue: number,
    public lowStockItems: number
  ) {}
}

export class Item {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public quantity: number,
    public reorderPoint: number,
    public unitPrice: number
  ) {}
}

export class OrderItem {
  constructor(public item: Item, public quantity: number) {}
}

export class OrderDetails {
  constructor(
    public order: Order,
    public shippingAddress: Address,
    public billingAddress: Address,
    public paymentMethod: PaymentMethod
  ) {}
}

export class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public country: string
  ) {}
}

export class PaymentMethod {
  constructor(
    public id: string,
    public type: PaymentType,
    public cardNumber: string,
    public expirationDate: string,
    public cvv: string
  ) {}
}

export class Supplier {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public address: Address
  ) {}
}

export class PurchaseOrder {
  constructor(
    public id: string,
    public supplier: Supplier,
    public item: Item,
    public quantity: number,
    public status: PurchaseOrderStatus,
    public createdAt: string
  ) {}
}

export class Carrier {
  constructor(public id: string, public name: string, public trackingUrl: string) {}
}

export class ShippingArrangement {
  constructor(
    public id: string,
    public order: Order,
    public shippingDate: string,
    public carrier: Carrier
  ) {}
}

export class InventoryAllocation {
  constructor(
    public id: string,
    public item: Item,
    public allocatedQuantity: number,
    public availableQuantity: number
  ) {}
}

export class InventoryCount {
  constructor(
    public item: Item,
    public actualQuantity: number,
    public systemQuantity: number
  ) {}
}

export class InventoryDiscrepancy {
  constructor(
    public id: string,
    public inventoryCount: InventoryCount,
    public discrepancyType: DiscrepancyType
  ) {}
}

export class InventoryReport {
  constructor(
    public id: string,
    public inventoryDiscrepancies: InventoryDiscrepancy[],
    public date: string,
    public time: string
  ) {}
}

export class Notification {
  constructor(
    public id: string,
    public title: string,
    public message: string,
    public type: NotificationType,
    public read: boolean,
    public createdAt: string
  ) {}
}

export class ShippingList {
  constructor(
    public id: string,
    public order: Order,
    public carrier: Carrier,
    public trackingNumber: string
  ) {}
}

export class ShipmentStatus {
  constructor(
    public id: string,
    public shippingList: ShippingList,
    public status: ShipmentStatusType,
    public updatedAt: string
  ) {}
}

export enum ShipmentStatusType {
  IN_TRANSIT = "IN_TRANSIT",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  FAILED_ATTEMPT = "FAILED_ATTEMPT",
  EXCEPTION = "EXCEPTION",
}

export class Order {
  constructor(
    public id: string,
    public customer: Customer,
    public items: OrderItem[],
    public status: OrderStatus,
    public createdAt: string
  ) {}
}

export class Customer {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string
  ) {}
}
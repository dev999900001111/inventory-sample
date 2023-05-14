# Detailed Screen Design Document

## Screen name
OrderDataPage

## Description
The OrderDataPage allows users to enter order details and customer information for a new order.

## Screen layout
The OrderDataPage will have a simple layout with a form for entering order details and customer information. The form will be divided into two sections: Order Details and Customer Information.

## Screen behavior
When the OrderDataPage is loaded, it will fetch the list of available items from the InventoryService and display them in a dropdown menu. The user will select the item they want to order and enter the quantity they wish to order. The form will also include fields for entering the customer's name, email, phone number, shipping address, billing address, and payment method.

## Input Form
The input form will include the following fields:

### Order Details
- Item (dropdown menu)
- Quantity (number input)

### Customer Information
- Name (text input)
- Email (text input)
- Phone (text input)
- Shipping Address (text input)
- Billing Address (text input)
- Payment Method (dropdown menu)

## Error messages
If the user tries to submit the form without filling in all required fields, an error message will be displayed indicating which fields are missing. If the user enters an invalid email address or phone number, an error message will be displayed indicating that the input is invalid.

## Model classes used (excluding use from child components)
- Item
- Customer
- Address
- PaymentMethod

## Service classes and methods used (excluding calls from child components)
- InventoryService: getInventoryItems()
- OrderService: createOrder(orderData: OrderData)
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)

# Reference
## Model and Service classes
```typescript
export enum UserRole {ADMIN = "ADMIN",MANAGER = "MANAGER",EMPLOYEE = "EMPLOYEE",}
export enum OrderStatus {PENDING = "PENDING",PROCESSING = "PROCESSING",SHIPPED = "SHIPPED",DELIVERED = "DELIVERED",CANCELED = "CANCELED",}
export enum PaymentType {CREDIT_CARD = "CREDIT_CARD",DEBIT_CARD = "DEBIT_CARD",PAYPAL = "PAYPAL",}
export enum PurchaseOrderStatus {PENDING = "PENDING",APPROVED = "APPROVED",SHIPPED = "SHIPPED",RECEIVED = "RECEIVED",CANCELED = "CANCELED",}
export enum DiscrepancyType {OVERSTOCK = "OVERSTOCK",UNDERSTOCK = "UNDERSTOCK",DAMAGED = "DAMAGED",}
export enum NotificationType {INFO = "INFO",WARNING = "WARNING",ERROR = "ERROR",}
export class User {constructor(public id: string,public username: string,public password: string,public role: UserRole) {}}
export class InventorySummary {constructor(public totalItems: number,public totalValue: number,public lowStockItems: number) {}}
export class Item {constructor(public id: string,public name: string,public description: string,public quantity: number,public reorderPoint: number,public unitPrice: number) {}}
export class OrderItem {constructor(public item: Item, public quantity: number) {}}
export class OrderDetails {constructor(public order: Order,public shippingAddress: Address,public billingAddress: Address,public paymentMethod: PaymentMethod) {}}
export class Address {constructor(public street: string,public city: string,public state: string,public zipCode: string,public country: string) {}}
export class PaymentMethod {constructor(public id: string,public type: PaymentType,public cardNumber: string,public expirationDate: string,public cvv: string) {}}
export class Supplier {constructor(public id: string,public name: string,public email: string,public phone: string,public address: Address) {}}
export class PurchaseOrder {constructor(public id: string,public supplier: Supplier,public item: Item,public quantity: number,public status: PurchaseOrderStatus,public createdAt: string) {}}
export class Carrier {constructor(public id: string, public name: string, public trackingUrl: string) {}}
export class ShippingArrangement {constructor(public id: string,public order: Order,public shippingDate: string,public carrier: Carrier) {}}
export class InventoryAllocation {constructor(public id: string,public item: Item,public allocatedQuantity: number,public availableQuantity: number) {}}
export class InventoryCount {constructor(public item: Item,public actualQuantity: number,public systemQuantity: number) {}}
export class InventoryDiscrepancy {constructor(public id: string,public inventoryCount: InventoryCount,public discrepancyType: DiscrepancyType) {}}
export class InventoryReport {constructor(public id: string,public inventoryDiscrepancies: InventoryDiscrepancy[],public date: string,public time: string) {}}
export class Notification {constructor(public id: string,public title: string,public message: string,public type: NotificationType,public read: boolean,public createdAt: string) {}}
export class ShippingList {constructor(public id: string,public order: Order,public carrier: Carrier,public trackingNumber: string) {}}
export class ShipmentStatus {constructor(public id: string,public shippingList: ShippingList,public status: ShipmentStatusType,public updatedAt: string) {}}
export enum ShipmentStatusType {IN_TRANSIT = "IN_TRANSIT",OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",DELIVERED = "DELIVERED",FAILED_ATTEMPT = "FAILED_ATTEMPT",EXCEPTION = "EXCEPTION",}
export class Order {constructor(public id: string,public customer: Customer,public items: OrderItem[],public status: OrderStatus,public createdAt: string) {}}
export class Customer {constructor(public id: string,public name: string,public email: string,public phone: string) {}}
// src/app/services/auth-service.ts
export interface AuthService {async login(username: string, password: string): Promise<{success:boolean,token:string}>;
async logout(): void;
}

// src/app/services/inventory-service.ts
export interface InventoryService {async getInventorySummary(): Promise<InventorySummary>;
async getInventoryItems(): Promise<Item[]>;
async getItemsToReorder(): Promise<Item[]>;
async adjustInventory(inventoryCounts: InventoryCount[], adjustmentReason: string): Promise<void>;
async conductInventory(inventoryCounts: InventoryCount[], date: string, time: string): Promise<void>;
}

// src/app/services/notification-service.ts
export interface NotificationService {async getNotifications(): Promise<Notification[]>;
async markNotificationAsRead(notificationId: string): Promise<void>;
}

// src/app/services/order-service.ts
export interface OrderService {async getRecentOrders(): Promise<Order[]>;
async getOrderDetails(orderId: string): Promise<OrderDetails>;
async createOrder(orderData: OrderData): Promise<Order>;
}

// src/app/services/report-service.ts
export interface ReportService {async getInventoryDiscrepancies(): Promise<InventoryDiscrepancy[]>;
async getInventoryReport(): Promise<InventoryReport>;
async createInventoryReport(inventoryDiscrepancies: InventoryDiscrepancy[]): Promise<InventoryReport>;
}

// src/app/services/shipping-service.ts
export interface ShippingService {async getShippingArrangements(orderId: string): Promise<ShippingArrangement[]>;
async createShippingArrangement(orderId: string, shippingDate: string, carrier: Carrier): Promise<ShippingArrangement>;
async getInventoryAllocation(): Promise<InventoryAllocation[]>;
async executeShipment(shippingList: ShippingList[], carrierDetails: CarrierDetails): Promise<void>;
async trackShipment(trackingNumber: string): Promise<ShipmentStatus>;
}

// src/app/services/supplier-service.ts
export interface SupplierService {async getSuppliers(): Promise<Supplier[]>;
async createPurchaseOrder(supplier: Supplier, item: Item, quantity: number): Promise<PurchaseOrder>;
}

```

# prompt
Please carefully review the design information up to this point and create the tsx for the OrderDataPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to OrderDataPage.tsx.

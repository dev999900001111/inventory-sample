# Detailed Screen Design Document

## Screen name
Dashboard Page

## Description
The Dashboard Page provides an overview of the user's inventory and recent orders. It also displays notifications related to inventory and orders.

## Screen layout
The Dashboard Page consists of the following components:
- Header
- SideNavigation
- Main Content
  - Inventory Summary
  - Recent Orders
  - Notifications

## Screen behavior
- When the user logs in, the Dashboard Page is displayed.
- The Inventory Summary section displays the total number of items in the inventory, the total value of the inventory, and the number of low stock items.
- The Recent Orders section displays a list of the user's most recent orders, including the order ID, customer name, order date, and order status.
- The Notifications section displays a list of notifications related to inventory and orders. Each notification includes a title, message, and type (info, warning, or error).
- The user can click on a notification to view more details.
- The user can click on an order to view more details.

## Input Form
N/A

## Error messages
N/A

## Model classes used (excluding use from child components)
- InventorySummary
- Order

## Service classes and methods used (excluding calls from child components)
- InventoryService: getInventorySummary()
- OrderService: getRecentOrders()
- NotificationService: getNotifications()
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
Please carefully review the design information up to this point and create the tsx for the DashboardPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to DashboardPage.tsx.

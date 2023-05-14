# Detailed Screen Design Document

## Screen name
Inventory Status Page

## Description
The Inventory Status Page displays a list of all inventory items and their current stock levels. It allows users to quickly identify which items are running low on stock and need to be reordered. 

## Screen layout
The Inventory Status Page will consist of a header, side navigation, and a main content area. The main content area will display a table with the following columns: Item Name, Description, Quantity, Reorder Point, and Unit Price. The table will also have a search bar to allow users to search for specific items. 

## Screen behavior
- When the page loads, the table will be populated with all inventory items and their current stock levels.
- Users can search for specific items using the search bar. The table will update in real-time to display only the items that match the search query.
- Items that have a stock level below their reorder point will be highlighted in red to alert users that they need to be reordered.
- Clicking on an item in the table will navigate the user to the Reorder Trigger Page for that item.

## Input Form
The Inventory Status Page does not have any input forms.

## Error messages
If there are no inventory items to display, the table will show a message stating "No inventory items found."

## Model classes used (excluding use from child components)
- Item(id: string, name: string, description: string, quantity: number, reorderPoint: number, unitPrice: number)

## Service classes and methods used (excluding calls from child components)
- InventoryService: getInventoryItems(): Promise<Item[]>
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
Please carefully review the design information up to this point and create the tsx for the InventoryStatusPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryStatusPage.tsx.

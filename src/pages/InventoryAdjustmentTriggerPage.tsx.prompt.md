# Detailed Screen Design Document

## Screen name
InventoryAdjustmentTriggerPage

## Description
The InventoryAdjustmentTriggerPage allows users to view discrepancies in their inventory and trigger adjustments. Users can view a list of discrepancies, including overstock, understock, and damaged items, and select items to adjust. Users can also provide a reason for the adjustment.

## Screen layout
The InventoryAdjustmentTriggerPage will consist of a header, side navigation, main content area, and footer. The main content area will contain a table displaying the list of inventory discrepancies and a form to trigger adjustments.

## Screen behavior
Upon loading, the InventoryAdjustmentTriggerPage will fetch the list of inventory discrepancies from the InventoryService. The table will display the following columns: item name, discrepancy type, actual quantity, system quantity, and adjust quantity. The user can select items to adjust by entering a quantity in the adjust quantity column. The user can also provide a reason for the adjustment in a text input field. When the user submits the form, the InventoryService will be called to adjust the inventory counts and update the inventory discrepancies.

## Input Form
The input form will consist of a table with the following columns: item name, discrepancy type, actual quantity, system quantity, and adjust quantity. The user can enter a quantity in the adjust quantity column to trigger an adjustment. The user can also provide a reason for the adjustment in a text input field.

## Error messages
If the user tries to submit the form without entering a quantity for any selected items, an error message will be displayed prompting the user to enter a quantity.

## Model classes used (excluding use from child components)
- InventoryCount
- InventoryDiscrepancy
- DiscrepancyType

## Service classes and methods used (excluding calls from child components)
- InventoryService: getInventoryDiscrepancies(), adjustInventory()
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
Please carefully review the design information up to this point and create the tsx for the InventoryAdjustmentTriggerPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryAdjustmentTriggerPage.tsx.

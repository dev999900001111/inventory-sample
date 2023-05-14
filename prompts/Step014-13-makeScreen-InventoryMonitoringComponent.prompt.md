# Detailed Screen Design Document

## Screen name
Inventory Monitoring

## Description
The Inventory Monitoring screen displays a table of all inventory items and their current status. It also allows the user to set alert thresholds for each item type.

## Screen layout
The screen is divided into two sections:
1. Inventory Table: A table displaying all inventory items and their current status.
2. Alert Settings: A form allowing the user to set alert thresholds for each item type.

## Screen behavior
1. Inventory Table:
   - The table displays the following columns: Item Type, Quantity, Location, Last Updated.
   - The table is sorted by Item Type in ascending order.
   - The user can click on a column header to sort the table by that column.
   - The user can search for a specific item type using a search bar above the table.
   - The user can click on an item type to view its details on the Inventory Edit screen.
2. Alert Settings:
   - The form displays a list of all item types.
   - For each item type, the user can set an alert threshold.
   - The user can save the alert settings by clicking the "Save" button.

## Input Form
The Alert Settings form includes the following input fields:
- Item Type (read-only)
- Alert Threshold (number input)

## Error messages
- "Failed to load inventory data. Please try again later."
- "Failed to load alert settings. Please try again later."
- "Failed to update alert settings. Please try again later."

## Model classes used (excluding use from child components)
- InventoryItem
- AlertSettings

## Service classes and methods used (excluding calls from child components)
- InventoryMonitoringService:
  - getAlertSettings(): Promise<AlertSettings>
  - updateAlertSettings(settings: AlertSettings): Promise<void>
  - getInventoryStatus(): Promise<InventoryItem[]>
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- inventoryData: InventoryItem[]
- alertSettings: AlertSettings
- onUpdateAlertSettings: (settings: AlertSettings) => void

# Reference
## Model and Service classes
```typescript
export class InventoryItem {constructor(public id: string,public type: string,public quantity: number,public location: string,public lastUpdated: Date) {}}
export class InventoryHistoryItem {constructor(public id: string,public action: InventoryAction,public type: string,public quantity: number,public location: string,public date: Date) {}}
export class AlertSettings {constructor(public threshold: number) {}}
export class User {constructor(public id: string,public username: string,public password: string,public email: string,public role: UserRole) {}}
export enum InventoryAction {ADD = "ADD",REMOVE = "REMOVE",TRANSFER = "TRANSFER",}
export enum UserRole {ADMIN = "ADMIN",USER = "USER",}
// src/app/services/auth-service.ts
export interface AuthService {getToken(): string;
setToken(token: string): void;
removeToken(): void;
login(username: string, password: string): Observable<void>;
logout(): Observable<void>;
forgotPassword(email: string): Observable<void>;
}

// src/app/services/inventory-history-service.ts
export interface InventoryHistoryService {getInventoryHistory(): Observable<InventoryHistoryItem[]>;
searchInventoryHistory(searchTerm: string): Observable<InventoryHistoryItem[]>;
}

// src/app/services/inventory-monitoring-service.ts
export interface InventoryMonitoringService {getAlertSettings(): Promise<AlertSettings>;
updateAlertSettings(settings: AlertSettings): Promise<void>;
getInventoryStatus(): Promise<InventoryItem[]>;
}

// src/app/services/inventory-transfer-service.ts
export interface InventoryTransferService {transferInventory(source: string, destination: string, quantity: number): Promise<void>;
}

// src/app/services/inventory-service.ts
export interface InventoryService {getInventoryList(): Observable<InventoryItem[]>;
getInventoryItem(id: string): Observable<InventoryItem>;
updateInventoryItem(item: InventoryItem): Observable<void>;
deleteInventoryItem(id: string): Observable<void>;
searchInventory(searchTerm: string): Observable<InventoryItem[]>;
getInventoryHistory(): Observable<InventoryHistoryItem[]>;
searchInventoryHistory(searchTerm: string): Observable<InventoryHistoryItem[]>;
getAlertSettings(): Observable<AlertSettings>;
updateAlertSettings(alertSettings: AlertSettings): Observable<void>;
getInventoryStatus(): Observable<InventoryItem[]>;
}

```

# prompt
Please carefully review the design information up to this point and create the tsx for the InventoryMonitoring, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryMonitoring.tsx.

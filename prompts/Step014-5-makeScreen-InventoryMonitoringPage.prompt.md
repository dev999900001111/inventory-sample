# Detailed Screen Design Document

## Screen name
Inventory Monitoring Page

## Description
The Inventory Monitoring Page displays a table of all inventory items and their current status. It also allows the user to set alert thresholds for each item type.

## Screen layout
The Inventory Monitoring Page consists of a header component, a side menu component, and a main content area. The main content area contains a table component displaying the inventory items and their current status. The user can also set alert thresholds for each item type.

## Screen behavior
- When the page loads, the table component displays all inventory items and their current status.
- The user can set alert thresholds for each item type by clicking on the "Set Alert Threshold" button in the table header.
- When the user clicks on the "Set Alert Threshold" button, a dialog box appears allowing the user to set the alert threshold for each item type.
- The user can save the alert thresholds by clicking on the "Save" button in the dialog box.
- The table component updates to display the new alert thresholds.

## Input Form
The user can set alert thresholds for each item type by clicking on the "Set Alert Threshold" button in the table header. This opens a dialog box with a form containing the following fields:
- Item Type (dropdown)
- Alert Threshold (number input)

## Error messages
- If there is an error retrieving the inventory data, an error message is displayed: "Error retrieving inventory data. Please try again later."
- If there is an error setting the alert thresholds, an error message is displayed: "Error setting alert thresholds. Please try again later."

## Model classes used (excluding use from child components)
- InventoryItem
- AlertSettings

## Service classes and methods used (excluding calls from child components)
- InventoryMonitoringService
  - getAlertSettings(): Promise<AlertSettings>
  - updateAlertSettings(settings: AlertSettings): Promise<void>
  - getInventoryStatus(): Promise<InventoryItem[]>
## Elements to be used
### React Elements
- HeaderComponent(props:{onLogout: () => void})
- SideMenuComponent(props:{activePage: string})
- InventoryMonitoringComponent(props:{inventoryData: InventoryItem[],alertSettings: AlertSettings,onUpdateAlertSettings: (settings: AlertSettings) => void})
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
Please carefully review the design information up to this point and create the tsx for the InventoryMonitoringPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryMonitoringPage.tsx.

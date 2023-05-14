# Detailed Screen Design Document

## Screen name
Inventory Transfer Page

## Description
The Inventory Transfer Page allows the inventory manager to transfer inventory from one location to another. The page displays a form where the user can select the source and destination locations and enter the quantity to be transferred. The user can then submit the form to initiate the transfer.

## Screen layout
The Inventory Transfer Page consists of a header component, a side menu component, and a main content area. The main content area contains a form component for transferring inventory.

## Screen behavior
When the user navigates to the Inventory Transfer Page, the page displays a form component with the following fields:
- Source Location: A dropdown list of available locations where the inventory can be transferred from.
- Destination Location: A dropdown list of available locations where the inventory can be transferred to.
- Quantity: A text input field where the user can enter the quantity of inventory to be transferred.

The user can select the source and destination locations from the dropdown lists and enter the quantity to be transferred. Once the user has entered the required information, they can click the "Transfer" button to initiate the transfer.

If the transfer is successful, the user is redirected to the Inventory List Page. If there is an error during the transfer, an error message is displayed.

## Input Form
The Inventory Transfer Page contains a form component with the following fields:
- Source Location: A dropdown list of available locations where the inventory can be transferred from.
- Destination Location: A dropdown list of available locations where the inventory can be transferred to.
- Quantity: A text input field where the user can enter the quantity of inventory to be transferred.

## Error messages
If there is an error during the transfer, an error message is displayed. Possible error messages include:
- "Invalid quantity entered. Please enter a valid quantity."
- "Source and destination locations cannot be the same. Please select different locations."
- "Insufficient inventory at source location. Please enter a valid quantity."

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService: getInventoryList(), transferInventory()
## Elements to be used
### React Elements
- HeaderComponent(props:{onLogout: () => void})
- SideMenuComponent(props:{activePage: string})
- InventoryTransferFormComponent(props:{onSubmit: (source: string, destination: string, quantity: number) => void})
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- onSubmit: (source: string, destination: string, quantity: number) => void

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
Please carefully review the design information up to this point and create the tsx for the InventoryTransferPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryTransferPage.tsx.

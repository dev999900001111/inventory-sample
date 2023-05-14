# Detailed Screen Design Document

## Screen name
Inventory Table

## Description
The Inventory Table component displays a table of all inventory items in the system. It allows the user to view, edit, and delete inventory items. The table can be searched by item type or location.

## Screen layout
The Inventory Table component consists of a table with columns for item type, quantity, location, and last updated date. Above the table, there is a search bar where the user can enter a search term to filter the table. Each row in the table has an Edit and Delete button.

## Screen behavior
- When the component is mounted, it calls the InventoryService to retrieve the list of inventory items and displays them in the table.
- When the user enters a search term in the search bar, the component calls the InventoryService to retrieve the filtered list of inventory items and displays them in the table.
- When the user clicks the Edit button on a row, the component navigates to the InventoryEditPage with the id of the selected item.
- When the user clicks the Delete button on a row, a confirmation dialog is displayed. If the user confirms the deletion, the component calls the InventoryService to delete the item and updates the table.

## Input Form
The Inventory Table component does not have an input form.

## Error messages
- If there is an error retrieving the list of inventory items, an error dialog is displayed with the error message.

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryList(): Promise<InventoryItem[]>
  - deleteInventoryItem(id: string): Promise<void>
  - searchInventory(searchTerm: string): Promise<InventoryItem[]>
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- inventoryData: InventoryItem[]
- onEdit: (id: string) => void
- onSearch: (searchTerm: string) => void

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
Please carefully review the design information up to this point and create the tsx for the InventoryTable, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryTable.tsx.

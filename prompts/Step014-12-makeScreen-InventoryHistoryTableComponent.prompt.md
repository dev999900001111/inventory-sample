# Detailed Screen Design Document

## Screen name
Inventory History Table

## Description
The Inventory History Table displays a table of all inventory actions that have been performed in the system. The table includes columns for the action type, inventory item type, quantity, location, and date. The user can search for specific actions using a search bar.

## Screen layout
The Inventory History Table is a full-page component that includes a header and a table. The header includes a title and a search bar. The table includes columns for the action type, inventory item type, quantity, location, and date.

## Screen behavior
When the Inventory History Table is loaded, it calls the InventoryHistoryService to retrieve the list of inventory actions. The table is populated with the retrieved data. The user can search for specific actions by entering a search term in the search bar. The table is updated to display only the actions that match the search term.

## Input Form
The Inventory History Table does not include an input form.

## Error messages
If there is an error retrieving the inventory history data, an error dialog will be displayed with an appropriate error message.

## Model classes used (excluding use from child components)
- InventoryHistoryItem(id: string, action: InventoryAction, type: string, quantity: number, location: string, date: Date)

## Service classes and methods used (excluding calls from child components)
- InventoryHistoryService: getInventoryHistory(): Promise<InventoryHistoryItem[]>, searchInventoryHistory(searchTerm: string): Promise<InventoryHistoryItem[]>
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- historyData: InventoryHistoryItem[]
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
Please carefully review the design information up to this point and create the tsx for the InventoryHistoryTable, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryHistoryTable.tsx.

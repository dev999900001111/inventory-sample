# Detailed Screen Design Document

## Screen name
Inventory History Page

## Description
The Inventory History Page displays a table of all inventory actions that have been performed, including the type of action, the item type, the quantity, the location, and the date. The user can search for specific actions using a search bar.

## Screen layout
The Inventory History Page consists of a header component, a side menu component, and a main content area. The main content area contains a table component displaying the inventory history data.

## Screen behavior
When the page loads, the table component displays all inventory history data. The user can search for specific actions by entering a search term in the search bar. The table will update to display only the actions that match the search term.

## Input Form
There are no input forms on this page.

## Error messages
If there is an error retrieving the inventory history data, an error dialog will be displayed with an appropriate error message.

## Model classes used (excluding use from child components)
- InventoryHistoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryHistoryService
  - getInventoryHistory(): Promise<InventoryHistoryItem[]>
  - searchInventoryHistory(searchTerm: string): Promise<InventoryHistoryItem[]>
## Elements to be used
### React Elements
- HeaderComponent(props:{onLogout: () => void})
- SideMenuComponent(props:{activePage: string})
- InventoryHistoryTableComponent(props:{historyData: InventoryHistoryItem[],onSearch: (searchTerm: string) => void})
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
Please carefully review the design information up to this point and create the tsx for the InventoryHistoryPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryHistoryPage.tsx.

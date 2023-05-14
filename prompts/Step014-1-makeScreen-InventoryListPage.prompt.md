# Detailed Screen Design Document

## Screen name
Inventory List Page

## Description
The Inventory List Page displays a table of all inventory items in the system. The user can search for specific items, edit an item's information, and navigate to other inventory-related pages.

## Screen layout
The Inventory List Page consists of a header component, a side menu component, and a main content area. The main content area contains an InventoryTableComponent that displays the inventory items in a table format.

## Screen behavior
- When the page loads, the InventoryTableComponent displays all inventory items in the system.
- The user can search for specific items by entering a search term in the search bar.
- The user can click on an inventory item's "Edit" button to navigate to the InventoryEditPage for that item.
- The user can click on the "Transfer Inventory" button to navigate to the InventoryTransferPage.
- The user can click on the "View History" button to navigate to the InventoryHistoryPage.
- The user can click on the "Monitoring" button to navigate to the InventoryMonitoringPage.
- The user can click on the "Logout" button in the header to log out of the system.

## Input Form
The Inventory List Page does not have any input forms.

## Error messages
- If there is an error loading the inventory data, an error dialog will be displayed with the message "Error loading inventory data. Please try again later."
- If there is an error searching for inventory items, an error dialog will be displayed with the message "Error searching for inventory items. Please try again later."
- If there is an error deleting an inventory item, an error dialog will be displayed with the message "Error deleting inventory item. Please try again later."

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryList(): Promise<InventoryItem[]>
  - searchInventory(searchTerm: string): Promise<InventoryItem[]>
## Elements to be used
### React Elements
- HeaderComponent(props:{onLogout: () => void})
- SideMenuComponent(props:{activePage: string})
- InventoryTableComponent(props:{inventoryData: InventoryItem[],onEdit: (id: string) => void,onSearch: (searchTerm: string) => void})
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
Please carefully review the design information up to this point and create the tsx for the InventoryListPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryListPage.tsx.

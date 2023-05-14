# Detailed Screen Design Document

## Screen name
Inventory Edit Form

## Description
The Inventory Edit Form allows the inventory manager to edit the details of an inventory item.

## Screen layout
The screen layout consists of a form with input fields for the inventory item details. The form has a Save button to save the changes and a Delete button to delete the item.

## Screen behavior
- When the screen is loaded, the form is populated with the details of the selected inventory item.
- The user can edit the details of the inventory item in the input fields.
- When the user clicks the Save button, the changes are saved to the database and the user is redirected to the Inventory List page.
- When the user clicks the Delete button, a confirmation dialog is displayed. If the user confirms the deletion, the item is deleted from the database and the user is redirected to the Inventory List page.

## Input Form
The input form consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

## Error messages
- If any of the input fields are empty, an error message is displayed below the field.
- If the Quantity field is not a positive integer, an error message is displayed below the field.

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryItem(id: string): Promise<InventoryItem>
  - updateInventoryItem(item: InventoryItem): Promise<void>
  - deleteInventoryItem(id: string): Promise<void>
## Elements to be used
### React Elements
None
### React Dialogs
- ConfirmationDialogComponent(props:{isOpen: boolean,onClose: () => void,onConfirm: () => void,title: string,message: string})
### HTML Elements
None
## props (as React element)
- inventoryItem: InventoryItem
- onSave: (item: InventoryItem) => void
- onDelete: (id: string) => void

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
Please carefully review the design information up to this point and create the tsx for the InventoryEditForm, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryEditForm.tsx.

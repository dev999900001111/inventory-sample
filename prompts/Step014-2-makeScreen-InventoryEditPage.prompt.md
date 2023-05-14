# Detailed Screen Design Document

## Screen name
InventoryEditPage

## Description
The InventoryEditPage allows the user to edit the details of an inventory item. The user can update the type, quantity, and location of the item. They can also delete the item if necessary.

## Screen layout
The InventoryEditPage consists of a header component, a form component, and a confirmation dialog component.

The header component displays the title of the page and a logout button.

The form component displays the current details of the inventory item and allows the user to edit them. It consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

The form component also has two buttons:
- Save: saves the changes made to the inventory item
- Delete: deletes the inventory item

The confirmation dialog component appears when the user clicks the delete button. It asks the user to confirm whether they want to delete the item.

## Screen behavior
When the InventoryEditPage is loaded, it retrieves the details of the inventory item from the InventoryService using the id parameter in the URL. The form component is then populated with the current details of the item.

When the user clicks the save button, the form data is validated. If the data is valid, the InventoryService is called to update the inventory item with the new details. The user is then redirected to the InventoryListPage.

When the user clicks the delete button, the confirmation dialog component appears. If the user confirms that they want to delete the item, the InventoryService is called to delete the item. The user is then redirected to the InventoryListPage.

## Input Form
The input form consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

## Error messages
The following error messages may be displayed if the form data is invalid:
- Type is required
- Quantity must be a positive number
- Location is required

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryItem(id: string): Promise<InventoryItem>
  - updateInventoryItem(item: InventoryItem): Promise<void>
  - deleteInventoryItem(id: string): Promise<void>
## Elements to be used
### React Elements
- HeaderComponent(props:{onLogout: () => void})
- SideMenuComponent(props:{activePage: string})
- InventoryEditFormComponent(props:{inventoryItem: InventoryItem,onSave: (item: InventoryItem) => void,onDelete: (id: string) => void})
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
Please carefully review the design information up to this point and create the tsx for the InventoryEditPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to InventoryEditPage.tsx.

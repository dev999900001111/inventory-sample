# Detailed Screen Design Document

## Screen name
ErrorDialogComponent

## Description
The ErrorDialogComponent is a dialog box that displays an error message to the user. It is used to inform the user of any errors that occur during the use of the inventory management system.

## Screen layout
The ErrorDialogComponent will be a modal dialog box that appears in the center of the screen. It will have a title bar with the text "Error" and a close button on the top right corner. The body of the dialog box will contain the error message.

## Screen behavior
The ErrorDialogComponent will be triggered by an error occurring in the system. When an error occurs, the component will be displayed on top of the current page. The user will be able to close the dialog box by clicking on the close button or by clicking outside the dialog box.

## Input Form
The ErrorDialogComponent does not have any input form.

## Error messages
The ErrorDialogComponent will display the error message that caused it to be triggered. The error message will be passed to the component as a prop.

## Model classes used (excluding use from child components)
The ErrorDialogComponent does not use any model classes.

## Service classes and methods used (excluding calls from child components)
The ErrorDialogComponent does not use any service classes or methods.
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- isOpen: boolean
- onClose: () => void
- errorMessage: string

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
Please carefully review the design information up to this point and create the tsx for the ErrorDialog, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to ErrorDialog.tsx.

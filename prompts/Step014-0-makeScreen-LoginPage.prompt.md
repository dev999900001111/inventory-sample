# Detailed Screen Design Document

## Screen name
LoginPage

## Description
The LoginPage is the first screen that the user sees when accessing the inventory management system. It allows the user to log in to the system by entering their username and password.

## Screen layout
The LoginPage consists of a centered login form with two input fields for the username and password, a "Forgot Password" link, and a "Log In" button.

## Screen behavior
When the user enters their username and password and clicks the "Log In" button, the system will validate the credentials and either log the user in and redirect them to the InventoryListPage or display an error message if the credentials are invalid.

If the user clicks the "Forgot Password" link, the system will redirect them to a separate ForgotPasswordPage.

## Input Form
- Username input field (required)
- Password input field (required)

## Error messages
- "Invalid username or password" - displayed if the user enters incorrect login credentials.

## Model classes used (excluding use from child components)
- User

## Service classes and methods used (excluding calls from child components)
- AuthService
  - login(username: string, password: string): Promise<void> - used to validate the user's login credentials.
## Elements to be used
### React Elements
None
### React Dialogs
None
### HTML Elements
None
## props (as React element)
- onSubmit: (username: string, password: string) => void
- onForgotPassword: () => void

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
Please carefully review the design information up to this point and create the tsx for the LoginPage, keeping in mind the division of roles according to the screen list.
Please be sure to inspect the following points before submitting your work.
- Please use Chakra UI to create a polished design.
- Calibrate the screen with only the given components.
- screen should be for Japanese.
- Note the component names (especially the suffixes).
Please respond only to LoginPage.tsx.

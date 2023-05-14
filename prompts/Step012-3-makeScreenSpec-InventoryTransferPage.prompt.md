# System Overview
The inventory management system allows the inventory manager to log in and access the system. They can check the status of inventory, edit inventory information, transfer inventory, monitor inventory, and view inventory history. The system also supports inventory monitoring and reordering, order management and shipping arrangements, and inventory adjustment and stocktaking. The system helps optimize business processes, reduce costs, and improve customer satisfaction.

# All React Components
Improved React Components List (after review):

Page Components:
1. LoginPage (path: "/login")
2. InventoryListPage (path: "/inventory")
3. InventoryEditPage (path: "/inventory/edit/:id")
4. InventoryTransferPage (path: "/inventory/transfer")
5. InventoryHistoryPage (path: "/inventory/history")
6. InventoryMonitoringPage (path: "/inventory/monitoring")

Part Components:
1. HeaderComponent
   - Props:
     - onLogout: () => void
2. SideMenuComponent
   - Props:
     - activePage: string
3. LoginFormComponent
   - Props:
     - onSubmit: (username: string, password: string) => void
     - onForgotPassword: () => void
4. InventoryTableComponent
   - Props:
     - inventoryData: InventoryItem[]
     - onEdit: (id: string) => void
     - onSearch: (searchTerm: string) => void
5. InventoryEditFormComponent
   - Props:
     - inventoryItem: InventoryItem
     - onSave: (item: InventoryItem) => void
     - onDelete: (id: string) => void
6. InventoryTransferFormComponent
   - Props:
     - onSubmit: (source: string, destination: string, quantity: number) => void
7. InventoryHistoryTableComponent
   - Props:
     - historyData: InventoryHistoryItem[]
     - onSearch: (searchTerm: string) => void
8. InventoryMonitoringComponent
   - Props:
     - inventoryData: InventoryItem[]
     - alertSettings: AlertSettings
     - onUpdateAlertSettings: (settings: AlertSettings) => void

Dialog Components:
1. ErrorDialogComponent
   - Props:
     - isOpen: boolean
     - onClose: () => void
     - errorMessage: string
2. ConfirmationDialogComponent
   - Props:
     - isOpen: boolean
     - onClose: () => void
     - onConfirm: () => void
     - title: string
     - message: string

Types:
1. InventoryItem
   - id: string
   - type: string
   - quantity: number
   - location: string
   - lastUpdated: Date
2. InventoryHistoryItem
   - id: string
   - action: string
   - type: string
   - quantity: number
   - location: string
   - date: Date
3. AlertSettings
   - threshold: number

# All Model Classes
 - InventoryItem(id: string, type: string, quantity: number, location: string, lastUpdated: Date)
 - InventoryHistoryItem(id: string, action: InventoryAction, type: string, quantity: number, location: string, date: Date)
 - AlertSettings(threshold: number)
 - User(id: string, username: string, password: string, email: string, role: UserRole)
 - InventoryAction(ADD: null, REMOVE: null, TRANSFER: null)
 - UserRole(ADMIN: null, USER: null)

# All Enums

# All Service Classes
 - AuthService: login(username: string, password: string): Promise<void>, logout(): Promise<void>, forgotPassword(email: string): Promise<void>
 - InventoryService: getInventoryList(): Promise<InventoryItem[]>, getInventoryItem(id: string): Promise<InventoryItem>, updateInventoryItem(item: InventoryItem): Promise<void>, deleteInventoryItem(id: string): Promise<void>, searchInventory(searchTerm: string): Promise<InventoryItem[]>
 - InventoryTransferService: transferInventory(source: string, destination: string, quantity: number): Promise<void>
 - InventoryHistoryService: getInventoryHistory(): Promise<InventoryHistoryItem[]>, searchInventoryHistory(searchTerm: string): Promise<InventoryHistoryItem[]>
 - InventoryMonitoringService: getAlertSettings(): Promise<AlertSettings>, updateAlertSettings(settings: AlertSettings): Promise<void>, getInventoryStatus(): Promise<InventoryItem[]>

# prompt
Based on the above design, prepare a detailed screen design document for InventoryTransferPage.
> Please think step-by-step when creating the design document.
> First, carefully read the System Overview to understand the purpose of this system.
> Next, look at the React Component List carefully to understand the position of the InventoryTransferPage within the overall system.
> Then, think about the elements and functions you need for the InventoryTransferPage.
> Then select from All Service Classes which service (and model) will be used to provide the required information for the component.
- Do not include information that will be implemented by child components.
The chapter structure should be as follows.
```markdown
# Detailed Screen Design Document
## Screen name
## Description
## Screen layout
## Screen behavior
## Input Form
## Error messages
## Model classes used (excluding use from child components)
## Service classes and methods used (excluding calls from child components)
```

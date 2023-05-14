# Reference
## All HTTP API List
Improved API List (after review):

| Method | Path | RequestBody | ResponseBody |
|--------|------|-------------|--------------|
| POST | /api/auth/login | { username: string, password: string } | { token: string } |
| POST | /api/auth/logout | - | - |
| POST | /api/auth/forgotPassword | { email: string } | - |
| GET | /api/inventory | - | { inventoryList: InventoryItem[] } |
| GET | /api/inventory/:id | - | { inventoryItem: InventoryItem } |
| PUT | /api/inventory/:id | { inventoryItem: InventoryItem } | - |
| DELETE | /api/inventory/:id | - | - |
| GET | /api/inventory/search/:searchTerm | - | { inventoryList: InventoryItem[] } |
| POST | /api/inventoryTransfer | { source: string, destination: string, quantity: number } | - |
| GET | /api/inventoryHistory | - | { inventoryHistory: InventoryHistoryItem[] } |
| GET | /api/inventoryHistory/search/:searchTerm | - | { inventoryHistory: InventoryHistoryItem[] } |
| GET | /api/inventoryMonitoring/alertSettings | - | { alertSettings: AlertSettings } |
| PUT | /api/inventoryMonitoring/alertSettings | { alertSettings: AlertSettings } | - |
| GET | /api/inventoryMonitoring/status | - | { inventoryStatus: InventoryItem[] } |

Note: The token returned from the login API should be included in the headers of all subsequent requests to authenticate the user. Additionally, appropriate security measures should be implemented to protect sensitive data and prevent unauthorized access.
## All Model Classes
export class AlertSettings {constructor(public threshold: number) {}}
export class InventoryItem {constructor(public id: string,public type: string,public quantity: number,public location: string,public lastUpdated: Date) {}}

# Service Class Name
InventoryMonitoringService

# Service Class Definition
{"path":"./src/app/services/inventory-monitoring.service.ts","models":["AlertSettings","InventoryItem"],"methods":[{"name":"getAlertSettings","params":[],"return":"Promise<AlertSettings>"},{"name":"updateAlertSettings","params":[{"name":"settings","type":"AlertSettings"}],"return":"Promise<void>"},{"name":"getInventoryStatus","params":[],"return":"Promise<InventoryItem[]>"}]}

# prompt
Please create an InventoryMonitoringService as React Service class.
Add functions that are not in the service class definition as needed.
step by step:
- import all required libraries.
- Authentication tokens for request headers should be get from the authService.getToken.
- Write all implementations.
- Pay close attention to the difference between the HTTP API's ResponseBody Type and the service's Return Type. Even if they are almost the same, they are often slightly different, so use pipe(map()) or other methods to adjust them.
- ResponseBody is returned as String type even if it is written as Date. As a function of the Service class, it must be converted to the Date type according to the model class type.
Only output the source code.

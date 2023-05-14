[
  {"method":"POST","path":"/api/auth/login","requestBody":"{ username: string, password: string }","responseBody":"{ token: string }"},
  {"method":"POST","path":"/api/auth/logout","requestBody":"-","responseBody":"-"},
  {"method":"POST","path":"/api/auth/forgotPassword","requestBody":"{ email: string }","responseBody":"-"},
  {"method":"GET","path":"/api/inventory","requestBody":"-","responseBody":"{ inventoryList: InventoryItem[] }"},
  {"method":"GET","path":"/api/inventory/:id","requestBody":"-","responseBody":"{ inventoryItem: InventoryItem }"},
  {"method":"PUT","path":"/api/inventory/:id","requestBody":"{ inventoryItem: InventoryItem }","responseBody":"-"},
  {"method":"DELETE","path":"/api/inventory/:id","requestBody":"-","responseBody":"-"},
  {"method":"GET","path":"/api/inventory/search/:searchTerm","requestBody":"-","responseBody":"{ inventoryList: InventoryItem[] }"},
  {"method":"POST","path":"/api/inventoryTransfer","requestBody":"{ source: string, destination: string, quantity: number }","responseBody":"-"},
  {"method":"GET","path":"/api/inventoryHistory","requestBody":"-","responseBody":"{ inventoryHistory: InventoryHistoryItem[] }"},
  {"method":"GET","path":"/api/inventoryHistory/search/:searchTerm","requestBody":"-","responseBody":"{ inventoryHistory: InventoryHistoryItem[] }"},
  {"method":"GET","path":"/api/inventoryMonitoring/alertSettings","requestBody":"-","responseBody":"{ alertSettings: AlertSettings }"},
  {"method":"PUT","path":"/api/inventoryMonitoring/alertSettings","requestBody":"{ alertSettings: AlertSettings }","responseBody":"-"},
  {"method":"GET","path":"/api/inventoryMonitoring/status","requestBody":"-","responseBody":"{ inventoryStatus: InventoryItem[] }"}
]
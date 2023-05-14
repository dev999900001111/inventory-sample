{
  "LoginPage": {
    "type": "page",
    "path": "/login",
    "props": {},
    "state": {
      "username": "string",
      "password": "string",
      "error": "boolean"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Login page component"
  },
  "InventoryListPage": {
    "type": "page",
    "path": "/inventory",
    "props": {},
    "state": {
      "inventoryData": "Array<InventoryItem>",
      "searchQuery": "string"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory list page component"
  },
  "InventoryEditPage": {
    "type": "page",
    "path": "/inventory/edit/:id",
    "props": {},
    "state": {
      "inventoryItem": "InventoryItem"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory edit page component"
  },
  "InventoryTransferPage": {
    "type": "page",
    "path": "/inventory/transfer",
    "props": {},
    "state": {
      "sourceLocation": "string",
      "destinationLocation": "string",
      "quantity": "number",
      "error": "boolean"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory transfer page component"
  },
  "InventoryHistoryPage": {
    "type": "page",
    "path": "/inventory/history",
    "props": {},
    "state": {
      "inventoryHistoryData": "Array<InventoryHistoryItem>",
      "searchQuery": "string"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory history page component"
  },
  "InventoryMonitoringPage": {
    "type": "page",
    "path": "/inventory/monitoring",
    "props": {},
    "state": {
      "alertSettings": "AlertSettings",
      "inventoryStatusData": "Array<InventoryStatus>"
    },
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory monitoring page component"
  },
  "Header": {
    "type": "parts",
    "path": "",
    "props": {
      "title": "string",
      "onLogout": "() => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Header component"
  },
  "SideMenu": {
    "type": "parts",
    "path": "",
    "props": {
      "activePage": "string",
      "onNavigate": "(page: string) => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Side menu component"
  },
  "InventoryTable": {
    "type": "parts",
    "path": "",
    "props": {
      "inventoryData": "Array<InventoryItem>",
      "onEdit": "(id: string) => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory table component"
  },
  "InventoryEditForm": {
    "type": "parts",
    "path": "",
    "props": {
      "inventoryItem": "InventoryItem",
      "onSave": "(item: InventoryItem) => void",
      "onDelete": "(id: string) => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory edit form component"
  },
  "InventoryTransferForm": {
    "type": "parts",
    "path": "",
    "props": {
      "onSubmit": "(sourceLocation: string, destinationLocation: string, quantity: number) => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory transfer form component"
  },
  "InventoryHistoryTable": {
    "type": "parts",
    "path": "",
    "props": {
      "inventoryHistoryData": "Array<InventoryHistoryItem>"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory history table component"
  },
  "AlertSettingsForm": {
    "type": "parts",
    "path": "",
    "props": {
      "alertSettings": "AlertSettings",
      "onSubmit": "(settings: AlertSettings) => void"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Alert settings form component"
  },
  "InventoryStatusGraph": {
    "type": "parts",
    "path": "",
    "props": {
      "inventoryStatusData": "Array<InventoryStatus>"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Inventory status graph component"
  },
  "ErrorDialog": {
    "type": "dialog",
    "path": "",
    "props": {
      "isOpen": "boolean",
      "onClose": "() => void",
      "errorMessage": "string"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Error dialog component"
  },
  "ConfirmationDialog": {
    "type": "dialog",
    "path": "",
    "props": {
      "isOpen": "boolean",
      "onClose": "() => void",
      "onConfirm": "() => void",
      "title": "string",
      "message": "string"
    },
    "state": {},
    "childReactComponents": [],
    "dialogReactComponents": [],
    "HTMLComponents": [],
    "describe": "Confirmation dialog component"
  }
}
{
  "InventoryItem": {
    "desc": "Represents an item in the inventory",
    "props": {
      "id": "string",
      "type": "string",
      "quantity": "number",
      "location": "string",
      "lastUpdated": "Date"
    }
  },
  "InventoryHistoryItem": {
    "desc": "Represents a historical action on an inventory item",
    "props": {
      "id": "string",
      "action": "InventoryAction",
      "type": "string",
      "quantity": "number",
      "location": "string",
      "date": "Date"
    }
  },
  "AlertSettings": {
    "desc": "Represents the alert threshold for an inventory item",
    "props": {
      "threshold": "number"
    }
  },
  "User": {
    "desc": "Represents a user of the system",
    "props": {
      "id": "string",
      "username": "string",
      "password": "string",
      "email": "string",
      "role": "UserRole"
    }
  },
  "InventoryAction": {
    "desc": "Represents an action performed on an inventory item",
    "props": {
      "ADD": null,
      "REMOVE": null,
      "TRANSFER": null
    }
  },
  "UserRole": {
    "desc": "Represents the role of a user in the system",
    "props": {
      "ADMIN": null,
      "USER": null
    }
  }
}
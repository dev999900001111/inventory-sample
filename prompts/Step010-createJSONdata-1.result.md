{
  "GET-/api/inventory": {
    "inventoryList": [
      {
        "id": "001",
        "type": "食品",
        "quantity": 100,
        "location": "東京",
        "lastUpdated": "2021-10-01T10:00:00.000Z"
      },
      {
        "id": "002",
        "type": "衣服",
        "quantity": 50,
        "location": "大阪",
        "lastUpdated": "2021-10-02T10:00:00.000Z"
      }
    ]
  },
  "GET-/api/inventory/001": {
    "inventoryItem": {
      "id": "001",
      "type": "食品",
      "quantity": 100,
      "location": "東京",
      "lastUpdated": "2021-10-01T10:00:00.000Z"
    }
  },
  "PUT-/api/inventory/001": {}
}
{
  "GET-/api/inventoryHistory": {
    "inventoryHistory": [
      {
        "id": "1",
        "action": "ADD",
        "type": "商品A",
        "quantity": 10,
        "location": "倉庫A",
        "date": "2021-10-01T10:00:00.000Z"
      },
      {
        "id": "2",
        "action": "REMOVE",
        "type": "商品B",
        "quantity": 5,
        "location": "倉庫B",
        "date": "2021-10-02T14:30:00.000Z"
      },
      {
        "id": "3",
        "action": "TRANSFER",
        "type": "商品C",
        "quantity": 20,
        "location": "倉庫C",
        "date": "2021-10-03T09:15:00.000Z"
      }
    ]
  },
  "GET-/api/inventoryHistory/search/商品": {
    "inventoryHistory": [
      {
        "id": "1",
        "action": "ADD",
        "type": "商品A",
        "quantity": 10,
        "location": "倉庫A",
        "date": "2021-10-01T10:00:00.000Z"
      },
      {
        "id": "2",
        "action": "REMOVE",
        "type": "商品B",
        "quantity": 5,
        "location": "倉庫B",
        "date": "2021-10-02T14:30:00.000Z"
      },
      {
        "id": "3",
        "action": "TRANSFER",
        "type": "商品C",
        "quantity": 20,
        "location": "倉庫C",
        "date": "2021-10-03T09:15:00.000Z"
      }
    ]
  },
  "GET-/api/inventoryMonitoring/alertSettings": {
    "alertSettings": {
      "threshold": 50
    }
  }
}
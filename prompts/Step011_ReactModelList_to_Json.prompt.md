# React Model List
Improved Model Classes List (after review):

1. InventoryItem
   - id: string
   - type: string
   - quantity: number
   - location: string
   - lastUpdated: Date

2. InventoryHistoryItem
   - id: string
   - action: InventoryAction
   - type: string
   - quantity: number
   - location: string
   - date: Date

3. AlertSettings
   - threshold: number

4. User
   - id: string
   - username: string
   - password: string
   - email: string
   - role: UserRole

Enums:
1. InventoryAction
   - ADD
   - REMOVE
   - TRANSFER

2. UserRole
   - ADMIN
   - USER

# prompt
Please convert the above List of Screensn into JSON format.
{"ModelClassName":{"desc": "A brief description of the Model", "props"{{"name":"type<generic>"},,}},,}
Note that this is minified JSON without newlines and spaces.

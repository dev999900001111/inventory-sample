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
Please create the above Model Classes as Typescript classes.
Please refer to the following format.
- If you are instructed to create an interface, convert it to a class and output it.
```typescript
// ./src/app/models.ts
export class ClassName {
  constructor(
    public name: type = default,
  ){
  }
}```

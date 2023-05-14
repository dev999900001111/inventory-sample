```typescript
// ./src/app/models.ts

export class InventoryItem {
  constructor(
    public id: string,
    public type: string,
    public quantity: number,
    public location: string,
    public lastUpdated: Date
  ) {}
}

export class InventoryHistoryItem {
  constructor(
    public id: string,
    public action: InventoryAction,
    public type: string,
    public quantity: number,
    public location: string,
    public date: Date
  ) {}
}

export class AlertSettings {
  constructor(public threshold: number) {}
}

export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public email: string,
    public role: UserRole
  ) {}
}

export enum InventoryAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
  TRANSFER = "TRANSFER",
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}
```
# APIs List
| method | path | requestBody | responseBody |
| - | - | - | - |
| POST | /api/auth/login | { username: string, password: string } | { token: string } |
| POST | /api/auth/logout | - | - |
| POST | /api/auth/forgotPassword | { email: string } | - |

# Models List
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
Based on the above design document, please create a sample data (for Japanese) for the APIs List.
Only the ResponseBody is required.
Please use all values of Enum.
The format is minified JSON as follows.
{"${Method}-${Path}":${mockdata}}
Please output only JSON data.

# Detailed Screen Design Document

## Screen name
Inventory Monitoring

## Description
The Inventory Monitoring screen displays a table of all inventory items and their current status. It also allows the user to set alert thresholds for each item type.

## Screen layout
The screen is divided into two sections:
1. Inventory Table: A table displaying all inventory items and their current status.
2. Alert Settings: A form allowing the user to set alert thresholds for each item type.

## Screen behavior
1. Inventory Table:
   - The table displays the following columns: Item Type, Quantity, Location, Last Updated.
   - The table is sorted by Item Type in ascending order.
   - The user can click on a column header to sort the table by that column.
   - The user can search for a specific item type using a search bar above the table.
   - The user can click on an item type to view its details on the Inventory Edit screen.
2. Alert Settings:
   - The form displays a list of all item types.
   - For each item type, the user can set an alert threshold.
   - The user can save the alert settings by clicking the "Save" button.

## Input Form
The Alert Settings form includes the following input fields:
- Item Type (read-only)
- Alert Threshold (number input)

## Error messages
- "Failed to load inventory data. Please try again later."
- "Failed to load alert settings. Please try again later."
- "Failed to update alert settings. Please try again later."

## Model classes used (excluding use from child components)
- InventoryItem
- AlertSettings

## Service classes and methods used (excluding calls from child components)
- InventoryMonitoringService:
  - getAlertSettings(): Promise<AlertSettings>
  - updateAlertSettings(settings: AlertSettings): Promise<void>
  - getInventoryStatus(): Promise<InventoryItem[]>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

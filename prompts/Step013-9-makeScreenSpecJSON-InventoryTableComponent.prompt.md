# Detailed Screen Design Document

## Screen name
Inventory Table

## Description
The Inventory Table component displays a table of all inventory items in the system. It allows the user to view, edit, and delete inventory items. The table can be searched by item type or location.

## Screen layout
The Inventory Table component consists of a table with columns for item type, quantity, location, and last updated date. Above the table, there is a search bar where the user can enter a search term to filter the table. Each row in the table has an Edit and Delete button.

## Screen behavior
- When the component is mounted, it calls the InventoryService to retrieve the list of inventory items and displays them in the table.
- When the user enters a search term in the search bar, the component calls the InventoryService to retrieve the filtered list of inventory items and displays them in the table.
- When the user clicks the Edit button on a row, the component navigates to the InventoryEditPage with the id of the selected item.
- When the user clicks the Delete button on a row, a confirmation dialog is displayed. If the user confirms the deletion, the component calls the InventoryService to delete the item and updates the table.

## Input Form
The Inventory Table component does not have an input form.

## Error messages
- If there is an error retrieving the list of inventory items, an error dialog is displayed with the error message.

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryList(): Promise<InventoryItem[]>
  - deleteInventoryItem(id: string): Promise<void>
  - searchInventory(searchTerm: string): Promise<InventoryItem[]>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

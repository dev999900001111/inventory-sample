# Detailed Screen Design Document

## Screen name
Inventory Edit Form

## Description
The Inventory Edit Form allows the inventory manager to edit the details of an inventory item.

## Screen layout
The screen layout consists of a form with input fields for the inventory item details. The form has a Save button to save the changes and a Delete button to delete the item.

## Screen behavior
- When the screen is loaded, the form is populated with the details of the selected inventory item.
- The user can edit the details of the inventory item in the input fields.
- When the user clicks the Save button, the changes are saved to the database and the user is redirected to the Inventory List page.
- When the user clicks the Delete button, a confirmation dialog is displayed. If the user confirms the deletion, the item is deleted from the database and the user is redirected to the Inventory List page.

## Input Form
The input form consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

## Error messages
- If any of the input fields are empty, an error message is displayed below the field.
- If the Quantity field is not a positive integer, an error message is displayed below the field.

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryItem(id: string): Promise<InventoryItem>
  - updateInventoryItem(item: InventoryItem): Promise<void>
  - deleteInventoryItem(id: string): Promise<void>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

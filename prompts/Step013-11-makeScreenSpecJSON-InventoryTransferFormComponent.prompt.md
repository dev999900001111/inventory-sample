# Detailed Screen Design Document

## Screen name
Inventory Transfer Form

## Description
The Inventory Transfer Form allows the user to transfer inventory from one location to another.

## Screen layout
The screen layout consists of a form with the following fields:
- Source Location (dropdown)
- Destination Location (dropdown)
- Quantity (number input)
- Submit Button

## Screen behavior
- The user selects the source and destination locations from the dropdown menus.
- The user enters the quantity of inventory to be transferred.
- The user clicks the Submit button to initiate the transfer.
- If the transfer is successful, the user is redirected to the Inventory List page.
- If the transfer fails, an error message is displayed.

## Input Form
- Source Location (dropdown)
- Destination Location (dropdown)
- Quantity (number input)

## Error messages
- "Please select a source location."
- "Please select a destination location."
- "Please enter a valid quantity."
- "The source and destination locations cannot be the same."
- "The quantity entered exceeds the available inventory at the source location."

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService.transferInventory(source: string, destination: string, quantity: number): Promise<void>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

# Detailed Screen Design Document

## Screen name
InventoryEditPage

## Description
The InventoryEditPage allows the user to edit the details of an inventory item. The user can update the type, quantity, and location of the item. They can also delete the item if necessary.

## Screen layout
The InventoryEditPage consists of a header component, a form component, and a confirmation dialog component.

The header component displays the title of the page and a logout button.

The form component displays the current details of the inventory item and allows the user to edit them. It consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

The form component also has two buttons:
- Save: saves the changes made to the inventory item
- Delete: deletes the inventory item

The confirmation dialog component appears when the user clicks the delete button. It asks the user to confirm whether they want to delete the item.

## Screen behavior
When the InventoryEditPage is loaded, it retrieves the details of the inventory item from the InventoryService using the id parameter in the URL. The form component is then populated with the current details of the item.

When the user clicks the save button, the form data is validated. If the data is valid, the InventoryService is called to update the inventory item with the new details. The user is then redirected to the InventoryListPage.

When the user clicks the delete button, the confirmation dialog component appears. If the user confirms that they want to delete the item, the InventoryService is called to delete the item. The user is then redirected to the InventoryListPage.

## Input Form
The input form consists of the following fields:
- Type (text input)
- Quantity (number input)
- Location (text input)

## Error messages
The following error messages may be displayed if the form data is invalid:
- Type is required
- Quantity must be a positive number
- Location is required

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

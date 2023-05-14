# Detailed Screen Design Document

## Screen name
Inventory History Table

## Description
The Inventory History Table displays a table of all inventory actions that have been performed in the system. The table includes columns for the action type, inventory item type, quantity, location, and date. The user can search for specific actions using a search bar.

## Screen layout
The Inventory History Table is a full-page component that includes a header and a table. The header includes a title and a search bar. The table includes columns for the action type, inventory item type, quantity, location, and date.

## Screen behavior
When the Inventory History Table is loaded, it calls the InventoryHistoryService to retrieve the list of inventory actions. The table is populated with the retrieved data. The user can search for specific actions by entering a search term in the search bar. The table is updated to display only the actions that match the search term.

## Input Form
The Inventory History Table does not include an input form.

## Error messages
If there is an error retrieving the inventory history data, an error dialog will be displayed with an appropriate error message.

## Model classes used (excluding use from child components)
- InventoryHistoryItem(id: string, action: InventoryAction, type: string, quantity: number, location: string, date: Date)

## Service classes and methods used (excluding calls from child components)
- InventoryHistoryService: getInventoryHistory(): Promise<InventoryHistoryItem[]>, searchInventoryHistory(searchTerm: string): Promise<InventoryHistoryItem[]>
# Detailed Screen Design Document

## Screen name
Inventory History Page

## Description
The Inventory History Page displays a table of all inventory actions that have been performed, including the type of action, the item type, the quantity, the location, and the date. The user can search for specific actions using a search bar.

## Screen layout
The Inventory History Page consists of a header component, a side menu component, and a main content area. The main content area contains a table component displaying the inventory history data.

## Screen behavior
When the page loads, the table component displays all inventory history data. The user can search for specific actions by entering a search term in the search bar. The table will update to display only the actions that match the search term.

## Input Form
There are no input forms on this page.

## Error messages
If there is an error retrieving the inventory history data, an error dialog will be displayed with an appropriate error message.

## Model classes used (excluding use from child components)
- InventoryHistoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryHistoryService
  - getInventoryHistory(): Promise<InventoryHistoryItem[]>
  - searchInventoryHistory(searchTerm: string): Promise<InventoryHistoryItem[]>
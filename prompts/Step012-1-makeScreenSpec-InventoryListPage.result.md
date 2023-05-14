# Detailed Screen Design Document

## Screen name
Inventory List Page

## Description
The Inventory List Page displays a table of all inventory items in the system. The user can search for specific items, edit an item's information, and navigate to other inventory-related pages.

## Screen layout
The Inventory List Page consists of a header component, a side menu component, and a main content area. The main content area contains an InventoryTableComponent that displays the inventory items in a table format.

## Screen behavior
- When the page loads, the InventoryTableComponent displays all inventory items in the system.
- The user can search for specific items by entering a search term in the search bar.
- The user can click on an inventory item's "Edit" button to navigate to the InventoryEditPage for that item.
- The user can click on the "Transfer Inventory" button to navigate to the InventoryTransferPage.
- The user can click on the "View History" button to navigate to the InventoryHistoryPage.
- The user can click on the "Monitoring" button to navigate to the InventoryMonitoringPage.
- The user can click on the "Logout" button in the header to log out of the system.

## Input Form
The Inventory List Page does not have any input forms.

## Error messages
- If there is an error loading the inventory data, an error dialog will be displayed with the message "Error loading inventory data. Please try again later."
- If there is an error searching for inventory items, an error dialog will be displayed with the message "Error searching for inventory items. Please try again later."
- If there is an error deleting an inventory item, an error dialog will be displayed with the message "Error deleting inventory item. Please try again later."

## Model classes used (excluding use from child components)
- InventoryItem

## Service classes and methods used (excluding calls from child components)
- InventoryService
  - getInventoryList(): Promise<InventoryItem[]>
  - searchInventory(searchTerm: string): Promise<InventoryItem[]>
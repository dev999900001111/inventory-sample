# Component List
System Overview:
The inventory management system consists of the following screens:
1. Login Screen
2. Inventory List Screen
3. Inventory Edit Screen
4. Inventory Transfer Screen
5. Inventory History Screen
6. Inventory Monitoring Screen

Completed List of Screens and their Components:

1. Login Screen:
   - Components: 
     - Username input field
     - Password input field
     - Login button
     - Forgot password link
   - Data Handled: 
     - Username
     - Password
   - Screen Transition Destination: 
     - Inventory List Screen (upon successful login)
   - Dialogs: 
     - Error dialog (for incorrect login credentials)

2. Inventory List Screen:
   - Components:
     - Header (with system name and logout button)
     - Side menu (with navigation to Inventory Edit, Inventory Transfer, Inventory History, and Inventory Monitoring screens)
     - Inventory table (displaying inventory type, quantity, location, and last updated date and time)
     - Search bar (to filter inventory items)
   - Data Handled:
     - Inventory data
   - Screen Transition Destination:
     - Inventory Edit Screen
     - Inventory Transfer Screen
     - Inventory History Screen
     - Inventory Monitoring Screen
   - Dialogs:
     - None

3. Inventory Edit Screen:
   - Components:
     - Header (with system name and logout button)
     - Side menu (with navigation to Inventory List, Inventory Transfer, Inventory History, and Inventory Monitoring screens)
     - Inventory edit form (with fields for inventory type, quantity, location, and last modified date and time)
     - Save button
     - Delete button (for removing inventory items)
   - Data Handled:
     - Inventory data
   - Screen Transition Destination:
     - Inventory List Screen (upon saving or deleting inventory)
   - Dialogs:
     - Confirmation dialog (for deleting inventory items)

4. Inventory Transfer Screen:
   - Components:
     - Header (with system name and logout button)
     - Side menu (with navigation to Inventory List, Inventory Edit, Inventory History, and Inventory Monitoring screens)
     - Inventory transfer form (with fields for source location, destination location, and quantity of inventory to be moved)
     - Transfer button
   - Data Handled:
     - Inventory data
   - Screen Transition Destination:
     - Inventory List Screen (upon successful transfer)
   - Dialogs:
     - Confirmation dialog (for transferring inventory)
     - Error dialog (for invalid transfer details)

5. Inventory History Screen:
   - Components:
     - Header (with system name and logout button)
     - Side menu (with navigation to Inventory List, Inventory Edit, Inventory Transfer, and Inventory Monitoring screens)
     - Inventory history table (displaying history of inventory in/out and movement of inventory)
     - Search bar (to filter inventory history)
   - Data Handled:
     - Inventory history data
   - Screen Transition Destination:
     - None
   - Dialogs:
     - None

6. Inventory Monitoring Screen:
   - Components:
     - Header (with system name and logout button)
     - Side menu (with navigation to Inventory List, Inventory Edit, Inventory Transfer, and Inventory History screens)
     - Alert settings form (with fields for setting inventory quantity threshold)
     - Inventory status graph
   - Data Handled:
     - Inventory data
     - Alert settings
   - Screen Transition Destination:
     - None
   - Dialogs:
     - None

# prompt
Please convert the above List of Screensn into JSON format.
{"ScreenName":{"desc": "A brief description of the screen", "uiList"["UI component",,]},,}
Note that this is minified JSON without newlines and spaces.

# Detailed Screen Design Document

## Screen name
SideMenuComponent

## Description
The SideMenuComponent is a navigation menu that allows the user to switch between different pages of the inventory management system.

## Screen layout
The SideMenuComponent will be a vertical menu located on the left side of the screen. It will have a header with the system logo and a user profile section with the user's name and role. Below the user profile section, there will be a list of menu items that the user can click on to navigate to different pages of the system.

## Screen behavior
The SideMenuComponent will be visible on all pages of the system. When the user clicks on a menu item, the corresponding page will be loaded. The active menu item will be highlighted to indicate the current page.

## Input Form
N/A

## Error messages
N/A

## Model classes used (excluding use from child components)
- User

## Service classes and methods used (excluding calls from child components)
- AuthService: getUserProfile(): Promise<User>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

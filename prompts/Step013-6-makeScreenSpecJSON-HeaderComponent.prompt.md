# Detailed Screen Design Document

## Screen name
HeaderComponent

## Description
The HeaderComponent is a reusable component that displays the header of the inventory management system. It includes the system logo, the name of the system, and a logout button.

## Screen layout
The HeaderComponent will be a fixed component at the top of the screen. It will include the following elements:
- System logo (left-aligned)
- System name (center-aligned)
- Logout button (right-aligned)

## Screen behavior
The HeaderComponent will be displayed on all pages of the inventory management system. When the user clicks on the logout button, they will be logged out of the system and redirected to the login page.

## Input Form
The HeaderComponent does not include any input forms.

## Error messages
The HeaderComponent does not include any error messages.

## Model classes used (excluding use from child components)
The HeaderComponent does not use any model classes.

## Service classes and methods used (excluding calls from child components)
The HeaderComponent will use the AuthService to handle the logout functionality. The following method will be used:
- logout(): Promise<void> - This method will log the user out of the system and redirect them to the login page.

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

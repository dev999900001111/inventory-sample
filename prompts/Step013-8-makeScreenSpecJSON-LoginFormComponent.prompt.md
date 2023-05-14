# Detailed Screen Design Document

## Screen name
Login Page

## Description
The Login Page allows the user to log in to the inventory management system. The page contains a form where the user can enter their username and password.

## Screen layout
The Login Page consists of a centered form with two input fields for username and password, a "Forgot Password" link, and a "Log In" button.

## Screen behavior
When the user enters their username and password and clicks the "Log In" button, the system will validate the credentials. If the credentials are valid, the user will be redirected to the Inventory List Page. If the credentials are invalid, an error message will be displayed.

## Input Form
The Login Page form contains the following input fields:
- Username (required)
- Password (required)

## Error messages
If the user enters invalid credentials, an error message will be displayed:
- "Invalid username or password"

## Model classes used (excluding use from child components)
- User

## Service classes and methods used (excluding calls from child components)
- AuthService
  - login(username: string, password: string): Promise<void>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

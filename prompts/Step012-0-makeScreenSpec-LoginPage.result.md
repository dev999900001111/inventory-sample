# Detailed Screen Design Document

## Screen name
LoginPage

## Description
The LoginPage is the first screen that the user sees when accessing the inventory management system. It allows the user to log in to the system by entering their username and password.

## Screen layout
The LoginPage consists of a centered login form with two input fields for the username and password, a "Forgot Password" link, and a "Log In" button.

## Screen behavior
When the user enters their username and password and clicks the "Log In" button, the system will validate the credentials and either log the user in and redirect them to the InventoryListPage or display an error message if the credentials are invalid.

If the user clicks the "Forgot Password" link, the system will redirect them to a separate ForgotPasswordPage.

## Input Form
- Username input field (required)
- Password input field (required)

## Error messages
- "Invalid username or password" - displayed if the user enters incorrect login credentials.

## Model classes used (excluding use from child components)
- User

## Service classes and methods used (excluding calls from child components)
- AuthService
  - login(username: string, password: string): Promise<void> - used to validate the user's login credentials.
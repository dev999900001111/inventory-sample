# Detailed Screen Design Document

## Screen name
Confirmation Dialog

## Description
The Confirmation Dialog is a reusable component that displays a confirmation message to the user and prompts them to confirm or cancel an action.

## Screen layout
The Confirmation Dialog is a modal dialog that appears on top of the current page. It consists of a title, a message, and two buttons: "Confirm" and "Cancel".

## Screen behavior
When the Confirmation Dialog is opened, it displays a message to the user and prompts them to confirm or cancel an action. If the user clicks the "Confirm" button, the dialog closes and the action is executed. If the user clicks the "Cancel" button, the dialog closes and the action is not executed.

## Input Form
The Confirmation Dialog does not have an input form.

## Error messages
The Confirmation Dialog does not display error messages.

## Model classes used (excluding use from child components)
None

## Service classes and methods used (excluding calls from child components)
None, as the Confirmation Dialog does not interact with any services. It simply receives a confirmation message and returns a boolean value indicating whether the user confirmed or cancelled the action.
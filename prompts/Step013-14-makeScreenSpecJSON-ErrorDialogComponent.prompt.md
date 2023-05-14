# Detailed Screen Design Document

## Screen name
ErrorDialogComponent

## Description
The ErrorDialogComponent is a dialog box that displays an error message to the user. It is used to inform the user of any errors that occur during the use of the inventory management system.

## Screen layout
The ErrorDialogComponent will be a modal dialog box that appears in the center of the screen. It will have a title bar with the text "Error" and a close button on the top right corner. The body of the dialog box will contain the error message.

## Screen behavior
The ErrorDialogComponent will be triggered by an error occurring in the system. When an error occurs, the component will be displayed on top of the current page. The user will be able to close the dialog box by clicking on the close button or by clicking outside the dialog box.

## Input Form
The ErrorDialogComponent does not have any input form.

## Error messages
The ErrorDialogComponent will display the error message that caused it to be triggered. The error message will be passed to the component as a prop.

## Model classes used (excluding use from child components)
The ErrorDialogComponent does not use any model classes.

## Service classes and methods used (excluding calls from child components)
The ErrorDialogComponent does not use any service classes or methods.

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.

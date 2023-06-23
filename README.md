# User-Management

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run?

First download the project and In the project directory, you can run:

### `npm install`

Install all the necessary libraries.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `Project Information`

This is a ReactJS user management application. The application allows users to view, add, edit, and delete user information.
To achieve this functionality, I have created three components in the ReactJS application:

### AddUserForm:
The AddUserForm component is responsible for adding new users to the system. It includes input fields for the user's name, email address, and phone number. I have implemented form validation to ensure that all fields are filled out correctly. For example, the name field should not be empty and should not contain any numeric values. The email field should be in a valid email format. To generate unique IDs for each user, I have used the uuid library.

### EditUserForm:
The EditUserForm component allows users to edit the information of existing users. It displays the current user's details and provides input fields to update the name, email, and phone number. Similar to the AddUserForm, form validation is implemented to ensure that the fields are filled correctly. When the form is submitted, the user's information is updated in the system.

### UserList:
The UserList component displays a list of users on the main page. Each user is represented by a card, which includes their name, email, and phone number. I have used the map function to iterate over the user data stored as objects and dynamically render the user cards. The UserList component also provides functionality to edit and delete users. Users can click on the "Edit" button on a card to open the EditUserForm and make changes to the user's details. The "Delete" button allows users to remove a user from the list.

Additionally, I have added some responsive and visually appealing CSS to enhance the overall look and feel of the application. The user interface is designed to be user-friendly, with clear form fields, intuitive buttons, and a clean layout. The CSS styles have been applied consistently across the components to maintain a cohesive design.
In summary, the project demonstrates a ReactJS user management application with components for adding, editing, and deleting users. The application provides a smooth user experience and visually appealing interface, thanks to the implementation of the components and thoughtful CSS styling.









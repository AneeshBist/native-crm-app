# Customer Relationship Management - React Native Project

| --------- Created by: Aneesh Bist

- this app is a basic representation of customer realtionship management app to be used by sales representative.

# installing the app

- open the console and install dependencies
  -- for expo installation: npm expo install
  -- Navigation installation:
  --- native: npm install @react-navigation/native
  --- stack: npm install @react-navigation/native
  --- combined: npm install @react-navigation/native-stack
  --- screens: npx expo install react-native-screens react-native-safe-area-context
  -- Dropdown: npm i react-native-select-dropdown
  -- Redux installation:
  --- npm install react-redux
  --- npm install @reduxjs/toolkit
  --- npm install redux-saga
  -- Async Storage installation: npm install @react-native-async-storage/async-storage
- once installation finished successfully, type: npx expo start --tunnel (select 'w' for web).
  -- the app is ready to go as it launches the Welcome screen

# Functionality of the app

- Pages

  - Welcome
    -This is the first Screen which opens when the app runs > it has 3 buttons
    1. Add Customer: to Add customer
    2. View Customers: to View Existing Customers
    3. Reset: to clear all the data
  - ADD Customer
    - this Screen allows to add a customer by entering first anem, last name, choosing region from dropdown and active status by toggle
  - Region List
    - this Screen allows to view the list of regions of the customers
  - Customer List
    - this SCreen shows the list of customers in that region. if no customer is present " no customer" message is displayed along with button to add customer
  - Customer Details
    - this screen shows the details of customer selected with an option to change details via "Edit Customer"button
  - Edit Customer
    - this screen allows the user to edit the details of already existing customer

  1. Click: ADD Customer

  - it shows a form requiring first name, last name, region of customer and active status.
  - enter first name and last name of user
  - select his region from dropdown menu
  - toggle the active switch to mark user as active
  - clicking on submit will register the user

  2. Click: View Customers

  - it shows list of regions in "Region List" Screen
  - click on the list an it takes you to "Customer List" page
    -- if customer is not present in clicked region, screen will display no Customer and "Add Customer"button.
    ---clicking on "ADD Customer" will take you to step 1 and allows to add user
    -- if customers are present, their details are shown
    --- click a customer to view their detail in "Customer Details" Screen
    --- this page also has "Edit Customer" button which takes you to "Edit Customer" Screen and allows to add the customer

  3. Click: Reset
     - this shall delete all the data

## Data

There are two types of objects stored in our database:

- Customer

### Customer include

firstName: text
lastName: text
region: text
active: boolean

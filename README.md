E-Commerce App with React Router DOM v6.4

This is a simple e-commerce application built with React and React Router DOM v6.4. The app features multiple pages for product listing, individual product details, and error handling, making use of key React Router DOM features like useNavigate, useLoaderData, useRouteError, and nested routes.

Features

    Product Listing Page: Displays a list of products fetched from a fake API (https://fakestoreapi.com).
    Product Detail Page: Shows detailed information about a single product using dynamic routing and React Router’s useLoaderData.
    Error Handling: A dedicated error page to handle issues with fetching product data, using useRouteError.
    Nested Routes: Efficient routing structure with nested routes for better user experience and maintainability.
    Navigation: Easy navigation between pages using React Router's useNavigate.

Technologies Used

    React 18
    React Router DOM v6.4
    Tailwind CSS (for styling)
    JavaScript (ES6+)

Installation

    Clone this repository to your local machine:

git clone https://github.com/ManashSwain/react-router-dom.git

Install the dependencies:

cd react-router-dom
npm install

Start the development server:

    npm start

    This will start the application on http://localhost:5173.




Key Features and Hooks Used
useNavigate

Used to programmatically navigate to other pages, for example when a user clicks on a product

useLoaderData

This hook is used to fetch data before rendering the component, ensuring that the data is ready for display

useRouteError

Handles any errors that occur during data fetching or rendering. Displays an error message when an issue occurs:


Error Handling

When there is an error in fetching data or rendering a route, React Router will automatically catch and show the error page (Error.js). The error message will be displayed dynamically.
Project Configuration

    React Router DOM v6.4: We used React Router's new version to simplify routing and manage nested routes, useLoaderData, and useRouteError.
    Tailwind CSS: Tailwind is used for rapid styling. It's configured to provide utility-first styles in the app.

Tailwind CSS Setup

To set up Tailwind CSS in the project, follow these steps:

    Install Tailwind via npm:

npm install -D tailwindcss postcss autoprefixer

Create the Tailwind configuration files:

    npx tailwindcss init -p

    Configure Tailwind in tailwind.config.js and postcss.config.js.

    Import Tailwind CSS styles in your main index.css or tailwind.css file.

Contributing

If you'd like to contribute to this project, feel free to fork it, create a branch, and submit a pull request. Contributions are welcome!

-> `React-router-dom`  after v6.4 they updated-https://reactrouter.com/en/main/utils/create-routes-from-elements
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

1. **createBrowserRouter:**
   - This function might be used to create a BrowserRouter instance, which is a type of router that uses HTML5 history API for navigation.

Inside this route, there is another <Route> component with `index={true}` and path="/". This suggests that it is a nested route with an index route. The Dashboard component will be rendered when the path is "/".

2. **createRoutesFromElements:**
   - This function might be involved in creating route configurations from React elements. It's common for routing libraries to provide a way to generate routes based on components or elements.

3. **Route:**
   - This component is likely used to define a route within the application. It could specify a path and the component to be rendered when that path is matched.

4. **RouterProvider:**
   - This component might be part of a context provider for the router. In React Router, the `BrowserRouter` or `HashRouter` typically wraps the entire application to provide routing context to its components. `RouterProvider` could be fulfilling a similar role.

   const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

<Outlet/> -> It should be used in parent route elements to render their child route elements.

## --------------------------------------------------------------------------------------------------------

`import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';`

1. Row: This component represents a Bootstrap grid row. It is used to create horizontal groups of columns within a grid system.

2. Col: This component represents a Bootstrap grid column. It is used in conjunction with Row to define the layout of the grid system. Columns are placed within rows.

3. Image: This component represents an image element with optional responsive and rounded styling.

4. ListGroup: This component represents a Bootstrap list group, which is used to display a series of items in a vertical list.

5. Card: This component represents a Bootstrap card, which is a flexible and extensible content container. Cards can contain various elements like text, images, links, and more.

6. Button: This component represents a Bootstrap button. It can be used to create interactive elements that trigger actions when clicked.

## -------------------------------------------Backend-------------------------------------------------------------
`"client":"npm start --prefix frontend`,  ->[prefix] first it will go to the fronend Folder and run the cmd.
  "dev":"concurrently \"npm run server\" \"npm run client\"" -> run both f-end and b-end using concurrently package.

`process.exit(1):`

--> This line exits the Node.js process with a status code of 1. A non-zero status code typically indicates an error or an abnormal termination. It's a common practice to use a non-zero status code to signal that an error occurred.

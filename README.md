# Brew

Brew is a user-friendly web app for ordering coffee, tracking orders, and providing feedback. Enjoy the perfect cup of coffee, customized to your taste, with seamless ordering and real-time updates. Share your thoughts and help us refine your coffee experience. Order, track, and provide feedback—all in one place.

## Instructions

To clone this repository to your local machine, run this command on any terminal:

`git clone https://github.com/selimcavas/brew.git `

To start the website, you should run the following commands:

1- `cd brew`

2- `npm start`

## Usage Scenarios

### Order

You can order any coffee you prefer from our menu! You just need to open the order page and fill the required informations in the order form. Then you are ready to order your drink! 

When you are ready to order, press the order button in the order form, it automatically sends the information of your order to the database with POST request.

### My Order

You can view you orders in the my order page. It will dynamically update after each order. Each order is displayed with its total price and the type of coffee which is ordered. 

We used the GET request to pull orders from the database.

### Contact

You can contact us with the contact form provided in our contact page and you can send a form in 30 second periods in order to prevent spam messages. 

We used POST requests to send contact messages.

## External Libraries

### Axios

Axios is a popular JavaScript library that is commonly used for making HTTP requests from a web browser or a Node.js environment. It provides a simple and elegant API that makes it easier to send asynchronous HTTP requests and handle responses. In our application we are using axios to do POST and GET requests.

### JSON Server

JSON Server is a simple and lightweight Node.js-based library that allows you to quickly set up a mock REST API server using a JSON file as a data source. It is commonly used for rapid prototyping, frontend development, and testing scenarios. In our application, all data is stored in db.json file. We are using JSON Server store and use the data.

### Concurrently

Concurrently is a command-line utility for running multiple commands concurrently in a single terminal window. It simplifies the process of managing and executing multiple tasks simultaneously, making it a convenient tool for development workflows. In our application, we use concurrently to asynchronously execute two commands: `npm start` and `json-server --watch db.json --port 3001`. These commands start the npm server as well as the JSON Server.

## Project Members And Responsibilities

### Selim Çavaş

Implemented backend and home page. Created NavBar and styles for homepage components.

### Mert Adak

Implemented Order form, Order Page, Contact From, Contact Page. Implemented some styles. 

### Berk Adak

Implemented MyOrder page and components. Modified components styles to be responsive.





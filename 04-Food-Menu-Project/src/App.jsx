import "./App.css";

import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import { Truck, Utensils, Armchair,SquaresIntersect,Tag,Soup,Hamburger,Pizza,Cookie,Wheat,GlassWater } from "lucide-react";
import {Search,CircleEqual} from 'lucide-react'
import Food from "./components/Food";

function App() {
  const services = [
    {
      icon: <Truck size={100}/>,
      title: "Fast Delivery",
      description: "You can fast order with delivery service, wait for minute then your food will come",
    },
    {
      icon: <Utensils size={100} />,
      title: "Catering",
      description: "Order some menu with package for event like wedding, gathering meeting, and other else",
    },
    {
      icon: <Armchair size={100}/>,
      title: "Book a Table",
      description: "Book a table for your family set number of person & arrange the event enjoy without worrying overcrowded",
    },
  ];

   const categories = [
  { name: "All", icon: <SquaresIntersect /> },
  { name: "Disc", icon: <Tag />},
  { name: "Rice", icon: <Wheat />},
  { name: "Burger", icon: <Hamburger /> },
  { name: "Pizza", icon: <Pizza /> },
  { name: "Bread", icon: <Cookie /> },
  { name: "Noodle", icon: <Soup/> },
  { name: "Drink", icon: <GlassWater /> },
];

const foodItems = [
  {
    name: "Spaghetti Bolognese",
    category: "Noodle",
    image: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Cheese Burger",
    category: "Burger",
    image: "https://cdn.uengage.io/uploads/29124/image-1217-1772275890.jpg",
    price: 5.25,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Pizza Pepperoni",
    category: "Pizza",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Japanese Ramen",
    category: "Noodle",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-03-tonkotsu-ramen%2Ftonkotsu-ramen-195",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Hot Dog",
    category: "Bread",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeLkcqgOn3kYqsOfP0m7pfCNh2OOQXuL4hg&s",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Fried Chicken",
    category: "All",
    image: "/images/fried-chicken.jpg",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Spicy Macaroni",
    category: "Noodle",
    image: "/images/macaroni.jpg",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
  {
    name: "Special Fried Rice",
    category: "Rice",
    image: "/images/fried-rice.jpg",
    price: 4.99,
    comments: 156,
    location: "Jakarta, Indonesia",
  },
];

  return (
    <div className="Order-Menu">
      <div className="Nav-Menu">
        <Navbar />
      </div>

      <div className="Service-Menu">
        <h1>Our Features</h1>
        <h4>
          Let's check our service below <br />
          you will get best service
        </h4>

        
        <div className="Service-Container">

        {services.map(function(elem, indx){

          return (

          <div key={indx}>
          <Service
            icon={elem.icon}
            title={elem.title}
            description={elem.description}
          />
          </div>
        );
        })
        }
        </div>
        

      </div>

      <div className="Menu">

      <div className="Menu-Tit">
      <h1>Our Meals</h1>
      <div className="Menu-Search">
        <div className="Menu-Search-Tag">
        <input type="text" name="text" id="text" placeholder="search by name" />
        <div><Search size={15}/></div>
      </div>
      <div><CircleEqual /></div>
      </div>
      </div>
      <div className="Menu-dtls">
        {categories.map(function(elem, indx){
          return(
            <div key={indx}>
            <OrderMenu name={elem.name} icon = {elem.icon} />
            </div>
          )
        })}
        
      </div>
      </div>

       <div className="Food-Menu">
        {foodItems.map(function(elem, indx){
          return(
            <div key={indx}>
                <Food img={elem.image}/>
            </div>
          )
        })}
        

      </div>
    </div>
  );
} 

export default App;

import "./App.css";

import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import { Truck, Utensils, Armchair,SquaresIntersect,Tag,Soup,Hamburger,Pizza,Cookie,Wheat,GlassWater } from "lucide-react";
import {Search,CircleEqual} from 'lucide-react'

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
    </div>
  );
} 

export default App;

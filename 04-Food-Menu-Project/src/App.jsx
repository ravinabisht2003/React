import "./App.css";

import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import { Truck, Utensils, Armchair } from "lucide-react";

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
        <OrderMenu />
      </div>
    </div>
  );
}

export default App;

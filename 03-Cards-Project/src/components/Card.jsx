import React from "react";
import { Bookmark } from "lucide-react";

function Card() {
  return (
    <div className="card">
      <div>
      <div className="top">
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
          alt=""
        />
        <button>
          Save <Bookmark size={10} />
        </button>
      </div>

      <div className="center">
        <h3>
          Amazon <span>5 days ago</span>
        </h3>
        <h2>Senior UI/UX Designer</h2>
        <div className="tag">
          <h4>Part-time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      </div>

      <div className="bottom">
        <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
        </div>
            <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card;

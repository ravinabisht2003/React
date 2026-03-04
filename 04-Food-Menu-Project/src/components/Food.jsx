import React from 'react'
import {Heart,MapPin} from 'lucide-react'

function Food(props) {
  return (
    <div className='Food-Name'>
        
        <img src={props.img} alt="" />
        
        <div>
            <div>Name</div>
            <div><Heart size={28} color="#cf2029" strokeWidth={3} /></div>
        </div>
        <div>***** <span>156 comments</span></div>
        <div>
            <div><MapPin size={28} strokeWidth={1.25} /></div>
            <div>$4.99</div>
        </div>
      
    </div>
  )
}

export default Food

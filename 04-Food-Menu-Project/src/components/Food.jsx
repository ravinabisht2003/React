import React from 'react'
import {Heart,MapPin} from 'lucide-react'

function Food(props) {
  return (
    <div className='Food-Name'>
        
        <img src={props.img} alt="" />
        
        <div className='Food-Tit'>
            <div>{props.name}</div>
            <div><Heart size={28} color="#cf2029" strokeWidth={3} /></div>
        </div>
        <div className='Food-Commnt'>***** <span>{props.comments} comments</span></div>
        <div className='Food-LocPrice'>
            <div className='Food-Loc'>
            <div><MapPin size={15} strokeWidth={1.25} /></div>
            <div className='Food-Loc-Addr'>{props.location}</div>
            </div>
            <div className='Food-Price'>${props.price}</div>
        </div>
      
    </div>
  )
}

export default Food

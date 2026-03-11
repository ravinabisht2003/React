import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='pt-6 h-full w-2/3 px-2 text-black py-3 flex flex-nowrap rounded-4xl overflow-x-auto gap-10 p-6' >
    
    {props.users.map(function(elem,idx){
      return <RightCard key={idx} img={elem.img} color={elem.color} id={idx} tag={elem.tag}/> 
    })}
      
    </div>
  )
}

export default RightContent
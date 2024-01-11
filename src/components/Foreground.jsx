import React from 'react'
import Card from './card'
function Foreground() {
  const data =[
  {desc:"My name is bivek pandey",filesize:".9mb", close:false,
   tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
  },
  {desc:"My name is bivek pandey",filesize:".9mb", close:false,
   tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
  },
  {desc:"My name is bivek pandey",filesize:".9mb", close:false,
   tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
  },
  ];
  return (
    <div className='fixed top-0 left-0  z-[3] w-full h-full flex gap-5 flex-wrap p-10'>  
    { data.map((item,index)=>(
<Card data={item}/>
    ))}
    </div>
  )
}

export default Foreground
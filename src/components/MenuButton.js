import React from 'react'
import images from '../constants/images'



const MenuButton = ({setToggleMenu,toggle}) => {
  return (
    <div onClick={()=> setToggleMenu(!toggle)}>
       <img src={images.hamMenu} alt="" />
    </div>
  )
}

export default MenuButton
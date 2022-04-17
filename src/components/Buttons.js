import React from 'react'
import styled from 'styled-components'

const Buttons = ({className,children}) => {
  return (
    <button className={className}>{children}</button>
  )
}

export const StyledBtn = styled.button`
width: 200px;
height: 50px;
background-color: ${(props) =>props.bg};
color: ${(props) => props.color};
   

`

export default Buttons;

//get buttons to have different styles
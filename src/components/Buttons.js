import React from 'react'
import styled from 'styled-components'

const Buttons = ({className,children}) => {
  return (
    <button className={className}>{children}</button>
  )
}

const StyledBtn = styled(Buttons)`

   

`

export default Buttons;

//get buttons to have different styles
import React from 'react'
import { Div, Button, Icon } from 'react-native-magnus'

function Navigation() {
  return (
    <Div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        gap:20,
        flexDirection:'row',
        backgroundColor:"#e6e9ed",
        width:"100%",
        padding:20

    }}>
         
         <Button bg="red100" h={50} w={50} rounded="circle" ml="md" shadow="xs">
          <Icon name="scan1" color="red500" fontSize="4xl"/>
        </Button> 
         
         
        <Button bg="red100" h={50} w={50} rounded="circle" ml="md" shadow="xs">
          <Icon name="appstore1" color="red500" fontSize="4xl"/>
        </Button> 
       
    </Div>
  )
}

export default Navigation

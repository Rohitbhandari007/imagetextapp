import React, { useState } from 'react'
import { Div, Text, Icon, Modal, Button } from 'react-native-magnus'


function HistoryCard() {
    const [visible, setVisible] = useState(false);


  return (
    <Div shadow="xs" bg="#e6e9ed" style={{
        height:100,
        width:"95%",
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        margin:10,

        
    }} 
    rounded="md" 
    onClick={()=>setVisible(true)}
    > 
        <Text style={{color:"#000"}}>History</Text>

        <Modal isVisible={visible}>
          <Button
            bg="gray400"
            h={35}
            w={35}
            position="absolute"
            top={50}
            right={15}
            rounded="circle"
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon color="black900" name="close" />
          </Button>
        </Modal>
    </Div>

    
  )
}

export default HistoryCard

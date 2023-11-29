import React from 'react'
import { ScrollDiv } from 'react-native-magnus'
import HistoryCard from './historyCard'

function History() {
  return (
    <ScrollDiv style={{
        marginTop:20,
        width:"100%",
        padding:20,
    }}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
    </ScrollDiv>
  )
}

export default History

import { useState } from 'react'
import CSSBaseLine from '@mui/material/CssBaseline'
import './App.css'
import * as React from 'react';
import List from '@mui/material/List';
import Flashcard from './Flashcard';
import Form from './Form';

var defaultFlashcards = [
  {id: '6e1514f5a92046a6da20' , front: 'What is the capital of USA?', back: 'Washington, D.C', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da21', front: 'What is the largest animal in the world?', back: 'Blue whale', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da22', front: 'Soul in german?', back: 'Seele', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da23', front: 'What is called leg teardrop muscle?', back: 'Vastus medialis', dateIssued: 1693968404, daysToReview: 1}
]

const randomId = ()=>{
  const characters = '0123456789ABCDEF'
  let result = ''
  for(let i = 0; i < 16; i++) result += characters.charAt(Math.floor(Math.random()*16))
  return result
}

defaultFlashcards = defaultFlashcards.map(f => {
  return {...f, isShowing: false, checked: false}
})


export default function App(){
  const [flashcards, setFlashcards] = useState(defaultFlashcards)
  
  const removeFlashcard = (id) => {
    setFlashcards(flashcards.filter(f=>f.id !== id))
  }

  const toggleShow = (id) => {
    const newFlashcards = flashcards.map(flashcard => {
      if(flashcard.id === id) return {...flashcard, isShowing: !flashcard.isShowing}
      return flashcard
    })
    setFlashcards(newFlashcards)
  }

  const toggleSelect = (id) => {
    const newFlashcards = flashcards.map(flashcard => {
      if(flashcard.id === id) return {...flashcard, checked: !flashcard.checked}
      return flashcard
    })
    setFlashcards(newFlashcards)
  }

  const addFlashcard = (front, back) => {
    setFlashcards([...flashcards, {id: randomId(), front:front, back:back, dateIssued: Date.now(), daysToReview: 1, isShowing: false, checked: false}])
  }
  
  return (
   <div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {flashcards.map(f=>{
      return <Flashcard flashcard={f} key={f.id} removeFlashcard={()=>removeFlashcard(f.id)} toggleShow={()=>toggleShow(f.id)} toggleSelect={()=>toggleSelect(f.id)}/>
    })}
    <Form addFlashcard={addFlashcard}/>
  </List>
   </div>
  )
}

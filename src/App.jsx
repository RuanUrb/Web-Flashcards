import { useState, useEffect } from 'react'
import CSSBaseLine from '@mui/material/CssBaseline'
import * as React from 'react'
import List from '@mui/material/List'
import Flashcard from './Flashcard'
import Form from './Form'
import Navbar from './Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//import { testFlashcards } from './testFlashcards'
// use this instead of loading from LS to test 

const randomId = ()=>{
  const characters = '0123456789ABCDEF'
  let result = ''
  for(let i = 0; i < 16; i++) result += characters.charAt(Math.floor(Math.random()*16))
  return result
}

const loadData = ()=> {
  const data = JSON.parse(localStorage.getItem('flashcards'))
  if(!data) return []
  return data
}

export default function App(){
  const [flashcards, setFlashcards] = useState(loadData())
  
  useEffect(()=>{
    localStorage.setItem('flashcards', JSON.stringify(flashcards))
  }, [flashcards])


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

  const bottomParagraphStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    padding: '10px', // Add some padding for better visibility
    maxHeight: '0.5%'
  };
  
  return (
    <div>
    <CSSBaseLine/>
    <Navbar/>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      maxHeight: '90%'
    }}>
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
          Your flashcards:
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {flashcards.map(f=>{
      return <Flashcard flashcard={f} key={f.id} removeFlashcard={()=>removeFlashcard(f.id)} toggleShow={()=>toggleShow(f.id)} toggleSelect={()=>toggleSelect(f.id)}/>
    })}
    <Form addFlashcard={addFlashcard}/>
  </List>
  <Typography style={bottomParagraphStyle} variant="h6" component="p" sx={{ flexGrow: 1 }}>
          RuanUrb © {new Date().getFullYear()}
      </Typography>
    </Box>
   </div>
  )
}

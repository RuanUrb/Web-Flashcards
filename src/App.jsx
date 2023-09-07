import { useState } from 'react'
import CSSBaseLine from '@mui/material/CssBaseline'
import './App.css'
import Flashcard from './Flashcard'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const defaultFlashcards = [
  {id: '6e1514f5a92046a6da20' , front: 'What is the capital of USA?', back: 'Washington, D.C', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da21', front: 'What is the largest animal in the world?', back: 'Blue whale', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da22', front: 'Soul in german?', back: 'Seele', dateIssued: 1693968404, daysToReview: 1},
  {id: '6e1514f5a92046a6da23', front: 'What is called leg teardrop muscle?', back: 'Vastus medialis', dateIssued: 1693968404, daysToReview: 1}
]

export default function TodoList(){
  const [flashcards, setFlashcards] = useState(defaultFlashcards)
  
  
  return (
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {defaultFlashcards.map(flashcard=>{
      const labelId = `checkbox-list-label-${flashcard.id}`
      return (
        <ListItem
          key={flashcard.id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
        <ListItemButton
         role={undefined}
           dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={Math.floor(Date.now()/1000) > flashcard.dateIssued + flashcard.daysToReview*86400? true : false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${flashcard.front}`} />
            </ListItemButton>
        </ListItem>
      )
    })}
  </List>
  )
}


/*
function App() {
  const [count, setCount] = useState(0)

  const {id, front, back, dateIssued, daysToReview} = defaultFlashcards[0]
  
  return (
    <>
     <CSSBaseLine/>
     <h1>FLASHCARDS LIST:!</h1>
     <Flashcard front={front} back={back} dateIssued={dateIssued} daysToReview={daysToReview} />
    </>
  )
}

export default App
*/
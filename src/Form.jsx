import ListItem from "@mui/material/ListItem"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Alert from '@mui/material/Alert';
import { useState } from "react"

export default function Form({addFlashcard}) {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const [next, setNext] = useState(false)

    const handleNext = ()=>{
        setNext(!next)
    }

    const send = ()=>{
        addFlashcard(front, back)
        setFront('')
        setBack('')
        setNext(!next)
    }

    return (
        <form action="">
        <ListItem>
            {
            !next && 
            (<>
            <TextField id="outlined-basic" label='Front' variant="outlined" onChange={(event)=>setFront(event.target.value)} value={front}/>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon/>} onClick={handleNext} type='submit' >
                Next
            </Button> 
            </>)
            }

            {
            next && 
            (<>
            <TextField id="outlined-basic" label='Back' variant="outlined" onChange={(event)=>setBack(event.target.value)} value={back}/>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon/>} onClick={send} type='submit' >
                Add
            </Button> 
            </>)
            }

        </ListItem>
        {(next && front) && <Alert severity="info">Front text uploaded.</Alert>}      
        </form>
    )
}
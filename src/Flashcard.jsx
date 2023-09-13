import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function Flashcard({flashcard, removeFlashcard, toggleShow, toggleSelect}) {
    const labelId = `checkbox-list-label-${flashcard.id}`

    const isReady = (flashcard)=>{
        return Math.floor(Date.now()/1000) > flashcard.dateIssued + flashcard.daysToReview*86400? true : false
    }

      return (
        isReady(flashcard) &&
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeFlashcard}>
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
                  //checked={Math.floor(Date.now()/1000) > flashcard.dateIssued + flashcard.daysToReview*86400? true : false}
                  checked={flashcard.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={toggleSelect}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${flashcard.front}`} onClick={toggleShow} secondary={flashcard.isShowing && `${flashcard.back}`}/>
            </ListItemButton>
        </ListItem>
      )
}
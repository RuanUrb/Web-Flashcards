import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar(){

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <MenuBookIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Web Flashcards 
              </Typography>
              <Button color="inherit" href="https://github.com/RuanUrb" target='_blank'>
                <GitHubIcon/>
                </Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
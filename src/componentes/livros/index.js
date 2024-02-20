import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
   palette: {
     primary: {
      main: '#5D2A42'
     },
     secondary: {
      main: '#FB6376'
     },
   },
 });

const Books = () => {
   const genero = ['Drama', 'Literatura brasileira', 'Espiritualidade', 'Ciências humanas', 'Romance', 'Tecnologia']
   
   return(
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ justifyContent: 'center', alignItems: 'center',  }}>
            <Paper elevation={3} sx={{ padding: '20px' }}>

               <Box textAlign="center">
                  <Typography
                     variant="h4"
                     marginBottom={2}
                     sx={{ color: '#5D2A42' }}
                  >
                     <b>Pesquisar livros do acervo</b>
                  </Typography>
               </Box>

               <Box display="flex" gap={1}>
                  <ThemeProvider theme={theme}> 
                     <TextField id="livro" label="Livro" variant="outlined" size="small" />
                     <TextField id="autor" label="Autor" variant="outlined" size="small" />
                     <Autocomplete
                        id="genero"
                        options={genero}
                        sx={{ width: 250 }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="Gênero" />}
                     />
                     <Button variant="contained" color="primary">Pesquisar</Button>
                     <Button variant="outlined" color="primary">Limpar</Button>
                  </ThemeProvider>
               </Box>

            </Paper>
          
         </Grid>
      </Grid>
   )
}

export default Books;



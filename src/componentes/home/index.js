import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = () => {

   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ justifyContent: 'center', alignItems: 'center',  }}>
            <Paper elevation={3} style={{ padding: '20px' }}>
               <Box textAlign="center">
                  <Typography
                     sx={{
                        color: '#5D2A42'   
                     }}
                     variant="h4"
                     marginBottom={2}
                  >
                     <b>Bem-vindo ao Virtual Library 2</b>
                  </Typography>
                  <Typography
                      color='black'
                      variant="body1"
                  >
                     Acesse a opção "acervo" no menu para fazer uma pesquisa!
                  </Typography>
               </Box>
            </Paper>
         </Grid>
      </Grid>
   )
}

export default Home;



import React from 'react'
import NavBar from './NavBar'
import { Grid, Box } from '@mui/material'
import Logo from'../src/images/LOGO_AFRICA_SHINING-removebg-preview copy.png'
function PourquoiChoisirASF() {
  return (
    <div>
        <NavBar/>
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Box>
                    <img src={Logo} alt='logo' width={550}/>
                </Box>
            </Grid>
            <Grid  item xs={12} sm={6}>

            </Grid>
        </Grid>

      
    </div>
  )
}

export default PourquoiChoisirASF

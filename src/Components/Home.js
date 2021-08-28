import { Typography, Button } from '@material-ui/core'
import React from 'react'
import { HomeCard } from './Styles'
import { Grid } from '@material-ui/core'
import { Link, animateScroll as scroll } from 'react-scroll'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({

    ButtonStyleOne: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '2rem',
    },

    zoom: {
        position: 'fixed',
        bottom: '12rem',
        right: '5rem'
    }

})

export default function Home() {


    const classes = useStyles();


    return (
        <Grid container direction='column' justifyContent='center' alignItems='center'>

            <Grid item xs={12}>
                <HomeCard>

                    <Typography variant='h1'
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                            margin: '3rem 0rem 0rem 0rem'
                        }}
                    >We Provide Energy Efficient Solutions for a Sustainable Future.</Typography>

                    <Link to='learn' smooth={true} duration={600} >
                        <Button variant='contained' size='large' style={{

                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            height: 48,
                            padding: '0 30px',
                            margin: '2rem',
                        }} >
                            Learn More
                        </Button>
                    </Link>
                </HomeCard>
            </Grid>

        </Grid>
    )
}

import React, { useState } from 'react'
import { Container, ButtonLink } from './Styles'
import { Grid, Typography, Button, Divider } from '@material-ui/core'
import Electrical from './Electrical'
import Solar from './Solar'
import ProcessCooling from './ProcessCooling'



export default function Products({ history }) {

    console.log(history);

    return (
        <Container id='solutions'>


            <Grid container alignItems='center' direction='row'>

                <Grid item xs={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='h2' align='center' style={{ fontFamily: 'Mate', color: '#4B4C5D', marginTop: '5rem', fontWeight: '500' }}>
                            Solutions We Offer
                        </Typography>
                        <Divider variant="middle" style={{ width: '27rem', height: '2px', backgroundColor: 'grey' }} />
                    </div>

                </Grid>

                <Grid item xs={12} alignItems='center' >
                    <section>
                        <Solar />
                    </section>
                </Grid>


                <Grid item xs={12} alignItems='center' >
                    <section>
                        <Electrical />
                    </section>
                </Grid>

                <Grid item xs={12} alignItems='center' >
                    <section >
                        <ProcessCooling />
                    </section>
                </Grid>
            </Grid>

        </Container>
    )
}

import { Typography, Grid, Card, CardMedia, CardContent, CardHeader, CardActions, Box, Divider } from '@material-ui/core'
import React from 'react'
import { Container } from './Styles'
import Ground from '../Assets/solar-panel.jpg'
import Parking from '../Assets/solar-parking-canopy.jpg'
import Roof from '../Assets/solar-rooftop.jpg'
import Seamless from '../Assets/Frame 1.png'

export default function Solar() {
    return (
        <Container id='solar'>
            <Grid container alignItems='center' direction='row' alignContent='center' style={{ marginTop: '5rem' }}>
                <Grid item xs={12} alignItems='center'>
                    <Typography variant='h4' align='center' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', marginBottom: '5rem', fontWeight: '600' }}>
                        Solar Engineering, Procurement and Construction
                    </Typography>

                </Grid>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', marginLeft: '18rem', marginBottom: '2rem' }}>
                    <img src={Seamless} style={{ width: '60rem', height: '40rem' }}></img>
                </Grid>

                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>

                    <Typography variant='h6' style={{ fontFamily: 'Proza Libre', color: '#4B4C5D', margin: '2rem 19rem 8rem 19rem', fontWeight: '500' }}>
                        We provide <b>seamless</b> interconnection with your existing electrical system.
                        The process of integration is very smooth and doesn't require much tickering with your <b>existing electrical system</b>.
                        This leads to a <b>happy maintenance team</b>.
                    </Typography>
                </Grid>

                <Grid item xs={4}>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Solar Parking Lot"
                            subheader="Let the Shades generate energy!"

                        />
                        <CardMedia
                            image={Parking}
                            style={{ height: '20rem', width: '30rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li> Thermax has been one of the pioneers in setting up car park based solar installations.</li>
                                <br></br>
                                <li>Serves a dual purpose of providing shade to cars while harnessing the power of the Sun</li>
                            </ul></CardContent>



                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Solar Rooftops"
                            subheader="Turn your idle roof into a money spinner!"

                        />
                        <CardMedia
                            image={Roof}
                            style={{ height: '19rem', width: '30rem' }}

                        />

                        <CardContent>

                            <ul>
                                <li>Solar energy offers an excellent return on investment.</li>
                                <br></br>
                                <li>Solar rooftop solutions generate free electricity for 25 years, resulting in huge savings and reducing carbon footprint.</li>
                            </ul>

                        </CardContent>
                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Solar Ground Mount"
                            subheader="Generate savings from the ground-up!"

                        />
                        <CardMedia
                            image={Ground}
                            style={{ height: '20rem', width: '30rem' }}

                        />

                        <CardContent>

                            <ul>
                                <li>Ground mounted solar installations deliver unbeatable ROI during the life cycle of the project</li>
                                <li>We help in taking your manufacturing facility towards self-reliance for its power needs.</li>
                            </ul>

                        </CardContent>
                    </Card>


                </Grid>



            </Grid>
        </Container >
    )
}

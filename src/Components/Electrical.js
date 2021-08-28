import { Typography, Grid, Card, CardMedia, CardContent, CardHeader, CardActions } from '@material-ui/core'
import React from 'react'
import { Container } from './Styles'
import Earthing from '../Assets/earthing.jpg'
import Electrode from '../Assets/earthing_electrode.jpg'
import nexo from '../Assets/light.png'


export default function Electrical() {
    return (
        <Container id='electrical'>
            <Grid container alignItems='center' direction='row' alignContent='center' style={{ marginTop: '3rem' }}>

                <Grid item xs={12} alignItems='center'>
                    <Typography variant='h4' align='center'
                        style={{
                            fontFamily: 'Montserrat',
                            color: '#4B4C5D',
                            marginBottom: '5rem',
                            fontWeight: '600'
                        }}
                    >
                        Electrical and Lightning Protection Solutions
                    </Typography>
                </Grid>


                <Grid item xs={4}>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Earthing and Grounding"
                            subheader="Growth CBR (Copper Bonded Rod)"

                        />
                        <CardMedia
                            image={Earthing}
                            style={{ height: '22rem', width: '30rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>The outer conductor layer of Growth Copper Bonded Rod is made of
                                    low-impedance copper and the center is made of higher impedance steel.</li>
                                <br></br>
                                <li> The effect given by Growth CBR is greater than that given by ordinary copper conductors.</li>
                            </ul>

                        </CardContent>
                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Advanced Earthing and Grounding"
                            subheader="Chemical Earthing Electrode"

                        />
                        <CardMedia
                            image={Electrode}
                            style={{ height: '20rem', width: '30rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>The Low Resistive Chemical Earthing Electrode is a high conductive pipe which is 2-3 inch diameter wide.
                                </li>
                                <br></br>
                                <li>This provides a larger surface area for a better connection to the earth and filled with Electrolytic moisture creating material and easy to refill.</li>
                            </ul>

                        </CardContent>
                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Advanced ESE Lightning Protection"
                            subheader="NEXO Field Sensitive Device"

                        />
                        <CardMedia

                        >

                            <img src={nexo} style={{ height: '20rem', width: '25rem' }} />
                        </CardMedia>

                        <CardContent>
                            <ul>
                                <li> A super active wide area protection active lightning system is the only possible method to protect from direct lightning strikes.</li>
                                <br></br>
                                <li> It is shaped by two Variable Impedance Units. One of them is connected to ground other at atmospheric potential.</li>
                            </ul>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    )
}


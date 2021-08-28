import { Typography, Grid, Card, CardMedia, CardContent, CardHeader, CardActions } from '@material-ui/core'
import React from 'react'
import { Container } from './Styles'
import Steam from '../Assets/steam.png'
import Steam_one from '../Assets/steam_one.png'
import Vapour from '../Assets/vapour.jpg'
import Absorb from '../Assets/absorption.jpg'
import Evapo from '../Assets/Evaporative-condenser.png'
import clc from '../Assets/thermax-closed-loop-cooling-tower.jpg'

export default function Electrical() {
    return (
        <Container id='process'>
            <Grid container alignItems='center' direction='row' alignContent='center' style={{ marginTop: '3rem' }}>
                <Grid item xs={12} alignItems='center'>
                    <Typography variant='h4' align='center' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', marginBottom: '5rem', fontWeight: '600' }}>
                        Process Cooling Solutions
                    </Typography>
                </Grid>


                <Grid item xs={4}>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Direct Fired Chillers"
                            subheader="Thermax Global"

                        />
                        <CardMedia
                            image={Steam}
                            style={{ height: '20rem', width: '25rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>Direct fuel fired double effect machines have a furnace as an integral part of
                                    the high temperature generator,
                                    where a variety of liquid or gaseous fuels can be fired to drive it.
                                </li>
                                <br></br>
                                <li>Chilled water temperature: Up to 1ºC (34ºF) and -2ºC (28.5ºF) for brine,
                                    Capacities: From 50 to 1550 TR (175-5450kW).</li>
                            </ul>

                        </CardContent>
                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Steam Fired Chillers"
                            subheader="Thermax Global"

                        />
                        <CardMedia
                            image={Steam_one}
                            style={{ height: '20rem', width: '27rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>Thermax offers a range of steam driven vapour absorption machines
                                    driven by saturated steam pressure at 0.1 kg/cm2 to 26 kg/cm2.</li>
                                <br></br>
                                <li>Steam driven VAMs are categorised as Single effect,
                                    Double effect and Triple effect depending on the heat source temperature.</li>
                            </ul>



                        </CardContent>
                    </Card>


                </Grid>


                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Hybrid Chillers"
                            subheader="Thermax"

                        />
                        <CardMedia
                            image={Vapour}
                            style={{ height: '20rem', width: '25rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>Traditionally, in an electrical chiller as we lower on temperature scale, the power consumption of electrical chiller increases drastically.</li>
                                <br></br>
                                <li>The high efficiency hybrid chiller can produce upto -40oC , while reducing power consumption by 50%.</li>
                            </ul>



                        </CardContent>
                    </Card>


                </Grid>

                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Multi Energy Chillers"
                            subheader="Thermax Global"

                        />
                        <CardMedia
                            image={Absorb}
                            style={{ height: '27rem', width: '25rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li> Thermax multi-energy machines are designed as per Single-Double effect technology,
                                    enabling maximum heat recovery from both the heat sources.
                                </li>
                                <br></br>
                                <li>Chilled water temperature: Up to 1ºC (34ºF) and -2ºC (28.5ºF) for brine
                                    Capacities: From 100 TR to 3500 TR Cooling Capacity (175 to 12300kW).</li>
                            </ul>


                        </CardContent>
                    </Card>


                </Grid>

                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0 }}>
                        <CardHeader
                            title="Evaporative Condensor"
                            subheader="Thermax Global"

                        />
                        <CardMedia
                            image={Evapo}
                            style={{ height: '27rem', width: '28rem' }}

                        />

                        <CardContent>

                            <ul>
                                <li>Replacement product against conventional systems
                                    (atmospheric condenser, shell & tube heat exchanger + cooling tower, plate heat exchanger + cooling tower)</li>
                                <br></br>
                                <li>For ammonia/freon condensation at lower temperature.
                                    Compatible with all types of refrigeration compressors i.e. reciprocating, screw, scroll, rotary and centrifugal.</li>
                            </ul>


                        </CardContent>
                    </Card>


                </Grid>

                <Grid item xs={4} alignItems='center'>


                    <Card style={{ width: '25rem', margin: '3rem', marginTop: 0, }}>
                        <CardHeader
                            title="Closed Loop Cooling Tower"
                            subheader="Thermax Global"

                        />
                        <CardMedia
                            image={clc}
                            style={{ height: '27rem', width: '25rem' }}

                        />

                        <CardContent>
                            <ul>
                                <li>For cooling of process water, glycol-water solution,
                                    oil, chemicals, pharmaceutical liquids, machine cooling acids and any other process fluids.
                                </li>
                                <br></br>
                                <li>Suitable for lower approach temperature and varied temperature difference.
                                    Offering field erected units and turn-key solutions with supply of balance of plants.</li>
                            </ul>
                        </CardContent>
                    </Card>


                </Grid>

            </Grid>
        </Container>
    )
}



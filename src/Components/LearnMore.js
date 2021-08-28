import { Typography, Grid, Card, Button, Divider } from '@material-ui/core'
import React from 'react'
import { Container, KnowMore } from './Styles'
import solar_power from '../Assets/solar_power.jpeg'
import elp from '../Assets/lightning.jpg'
import pcl from '../Assets/cooling-tower-1.jpg'
import { Link } from 'react-scroll'


export default function LearnMore() {


    return (
        <Container>

            <Grid container alignContent='center' alignItems='center'>

                <Grid item xs={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='h3' align='center' style=
                            {{
                                fontFamily: 'Mate',
                                color: '#4B4C5D',
                                margin: '5rem  0 0 2rem',
                                fontWeight: '500',

                            }}>
                            Problems We Solve
                        </Typography>
                        <Divider variant="middle" style={{ width: '22rem', marginLeft: '3rem', height: '2px', backgroundColor: 'grey' }} />
                    </div>



                </Grid>



                {/* Solar Section */}
                <Grid item xs={6} zeroMinWidth>

                    <Typography variant='h4' align='left' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', margin: '3rem', fontWeight: '600' }}>
                        Solar EPC
                    </Typography>
                    <Typography variant='body1' align='left' style={{ fontFamily: 'Proza Libre', color: '#4B4C5D', margin: '3rem' }} >

                        We at <b>Associated Power Systems</b>, proudly declare to all our customers, on the basis of our Technical expertise, that we are <b> married to them for their Solar Power Plants for 25 years.</b>
                        <br></br><br></br>We not only help you make your business <b>energy efficient, reduce unwanted emissions and cut costs,</b>
                        we make sure that the plant operates in a <b>hassle free manner</b>.
                        <br></br><br></br>We are Channel Sales Associates of <b><a style={{ textDecoration: 'none' }} href='https://www.thermaxglobal.com/'> Thermax Global </a></b>
                        National leader for Solar Design & EPC provider, offering all <b> Solar EPC services for Rooftops, Ground Mounts, Parking, Industrial Sheds, Offline Systems.</b>
                        <br></br><br></br>We also undertake <b>O & M services</b>  for all Solar Power <b>Plantsand Battery Energy Storage System.</b>
                    </Typography>
                    <a style={{ textDecoration: 'none' }} href='https://www.thermaxglobal.com/thermaxsolar/'>
                        <Button variant='outlined' style={{ borderColor: '#4B4C5D', color: '#4B4C5D', marginLeft: '3rem' }}>Know More</Button>
                    </a>



                </Grid>

                <Grid item xs={6} zeroMinWidth>

                    <img src={solar_power} alt="" style={{ maxHeight: '101%', maxWidth: '95%' }} />

                </Grid>



                {/* Electrical and Lightning Protection */}
                <Grid item xs={6} zeroMinWidth>
                    <img src={elp} alt="" style={{ maxHeight: '101%', maxWidth: '90%', margin: '3rem' }} />
                </Grid>
                <Grid item xs={6} zeroMinWidth>

                    <Typography variant='h4' align='left' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', margin: '3rem', fontWeight: '600' }}>
                        Electrical and Lightning Protection
                    </Typography>
                    <Typography variant='body1' align='left' style={{ fontFamily: 'Proza Libre', color: '#4B4C5D', margin: '3rem' }} >

                        <b>APS</b> undertakes comprehensive EPC for <b>Electrical and Lightning Protection</b>.
                        We source such Protection Equipment from One of the Global best <Link to='electrical' smooth={true} duration={600} style={{ textDecoration: 'none', cursor: 'pointer' }} ><b>Escoltrix</b></Link>, which is known for high-quality products,
                        expertise and experience in <b>electrical and electronic equipment protection</b>.<br></br> <br></br>
                        For Electrical Earthing Equipment, our Channel Partnership is with <b><Link to='electrical' smooth={true} duration={600} style={{ textDecoration: 'none', cursor: 'pointer' }}>Growth Associates</Link></b>,
                        who we share our ideology of
                        <b> “Not being the cheapest but the Most Inexpensive” </b> in the long term.
                        We take pride in the fact that our customers compare our quality of Installation with the global bests.

                    </Typography>
                    <KnowMore to='electrical' smooth={true} duration={600}>
                        <Button variant='outlined' style={{ borderColor: '#4B4C5D', color: '#4B4C5D', marginLeft: '2rem' }}>Know More</Button>
                    </KnowMore>
                </Grid>



                {/* Process Cooling Section */}

                <Grid item xs={6} zeroMinWidth>

                    <Typography variant='h4' align='left' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', margin: '3rem', fontWeight: '600' }}>
                        Process Cooling
                    </Typography>
                    <Typography variant='body1' align='left' style={{ fontFamily: 'Proza Libre', color: '#4B4C5D', margin: '3rem' }} >

                        The latest addition in the list of Solutions of APS to the Industrial Customers is <b>Process Cooling Solutions</b>.
                        We partnered with <b><a style={{ textDecoration: 'none' }} href='https://www.thermaxglobal.com/'>Thermax Ltd.</a></b> ,
                        one of the Global best in the fields of Heat Energy with their presence in <b>77 countries</b>.<br></br><br></br>
                        Energy Savings through our impeccably designed and manufactured Process Cooling solutions is unmatched in the country and can be matched by very few across the globe.
                        Such savings result in very fast <b>ROI and huge cost benefits</b>.
                        Our Equipment is also the <b>least Maintenance Intensive</b> among all the competitors.

                    </Typography>
                    <a style={{ textDecoration: 'none' }} href='https://www.thermaxglobal.com/process-cooling/'>
                        <Button variant='outlined' style={{ borderColor: '#4B4C5D', color: '#4B4C5D', marginLeft: '3rem' }}>Know More</Button>
                    </a>


                </Grid>

                <Grid item xs={6} zeroMinWidth>
                    <img src={pcl} alt="" style={{ maxHeight: '101%', maxWidth: '95%' }} />
                </Grid>

            </Grid>

        </Container>
    )
}

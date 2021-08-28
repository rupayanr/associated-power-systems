import { Typography, Grid, Button, IconButton } from '@material-ui/core'
import React from 'react'
import { FooterContainer, Info, NavLinks, NavLink, Social, Typo } from './Styles'
import FeatherIcon from 'feather-icons-react';




export default function Footer() {
    return (
        <FooterContainer>
            <Grid container alignItems="center">

                <Grid item xs={4} >
                    <div style={{ display: 'flex' }}>


                        <Info>
                            <Typography variant='h5' style={{ fontFamily: 'montserrat' }}>
                                Ashish Burman
                            </Typography>
                            <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                                #616, Lift no 7 Onyxe Paraiso Patiala Road
                                Zirakpur
                            </Typography>
                            <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                                +91 - 9646619367
                            </Typography>
                            <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                                associated.ashishb67@gmail.com
                            </Typography>
                        </Info>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30rem' }}>

                        <NavLinks style={{ width: '35rem' }}>
                            <NavLink to='header' smooth={true} duration={700}>Home</NavLink>
                            <NavLink to='learn' smooth={true} duration={700}>What We Do</NavLink>
                            <NavLink to='products' smooth={true} duration={700} >Products</NavLink>
                            <NavLink to='about' smooth={true} duration={700}>About</NavLink>

                        </NavLinks>

                        <Social>
                            <IconButton style={{ width: '2.5rem', height: '2.5rem', background: 'white' }}>
                                <FeatherIcon icon="linkedin" fill='#FF8E53' stroke='#FF8E53' size={20} />
                            </IconButton>
                            <IconButton style={{ width: '2.5rem', height: '2.5rem', background: 'white' }}>
                                <FeatherIcon icon="mail" fill='#FF8E53' stroke='white' size={20} />
                            </IconButton>
                            <IconButton style={{ width: '2.5rem', height: '2.5rem', background: 'white' }}>
                                <FeatherIcon icon="facebook" fill='#FF8E53' stroke='#FF8E53' size={20} />
                            </IconButton>

                        </Social>
                    </div>
                </Grid>


                <Grid item xs={4}>

                    <Info >
                        <Typography variant='h5' style={{ fontFamily: 'montserrat' }}>
                            Mukul Agrawal
                        </Typography>
                        <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                            #706, Bharti CGHS
                            Sector 21 C, Faridabad - 121 001
                            (Haryana)
                        </Typography>
                        <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                            +91 - 9999910463
                        </Typography>
                        <Typography variant='body2' style={{ fontFamily: 'montserrat' }}>
                            associated.mukula68@gmail.com
                        </Typography>
                    </Info>



                </Grid>


            </Grid>
        </FooterContainer >
    )
}

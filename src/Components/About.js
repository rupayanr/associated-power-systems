import { Typography, Grid, Button, TextField, FormControl, Dialog, DialogActions, IconButton, DialogContent, DialogContentText, DialogTitle, Divider } from '@material-ui/core'
import { Container, Circle, AboutContainer, useStyles, Bold } from './Styles'
import React, { useState } from 'react'
import about from '../Assets/Power-OM.jpg'
import Footer from './Footer'
import Projects from './Projects'
import ab from '../Assets/ashish.png'
import mk from '../Assets/mukul.png'
import CloseIcon from '@material-ui/icons/Close';

export default function About() {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };

    const handleSubmit = () => {
        const info = {
            'Name': name,
            'Email': email,
            'Number': number,
            'Message': message
        }

        console.log(info)
    }

    return (
        <Container>

            <Grid container alignItems='center'>

                <Grid item xs={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='h3' align='center' style={{ fontFamily: 'Mate', color: '#4B4C5D', margin: '3rem 0rem 0rem 1rem ', fontWeight: '600' }}>
                            About Us
                        </Typography>
                        <Divider variant="middle" style={{ width: '13rem', marginLeft: '2rem', height: '2px', backgroundColor: 'grey' }} />
                    </div>

                </Grid>

                <Grid item xs={12}>
                    <Typography variant='body1' align='left' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', margin: '3rem 10rem 3rem 10rem' }}>
                        We at <b>Associated Power Systems</b>,
                        are committed  to put all  our efforts in providing our valued customers
                        energy efficient and safe solutions which contributes to a healthy and sustainable life,
                        with minimum or no harsh effect on the environment.

                        <br></br><br></br>
                        Founders of Associated Power Systems put their entire <b>knowledge and experience </b>
                        into use to develop the concept of a company that has to reach heights and be a mountain of pride and strength for it’s customers and  stakeholders at the same time.
                        <br></br><br></br>We are also going to start providing <b>energy efficiency solutions</b> and <b>electrical turnkey contracts</b> very soon.
                        Our clientele include <b>Kapoor Industries - Panipat, Tynor Orthodontics - Mohali,  EM Foods - Panipat, Piet Engineering College Panipat</b>  and many more.
                    </Typography>
                    <div style={{ display: 'flex', width: '101%', alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            size='medium'
                            onClick={handleOpen}
                            style={{
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                border: 0,
                                borderRadius: 3,
                                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                color: 'white',
                                height: 48,
                                padding: '0 30px',
                                margin: '1rem',
                                marginTop: '-1rem'
                            }}

                        >
                            Contact Us
                        </Button>
                    </div>


                </Grid>

                <Grid item xs={12}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='h4' align='center' style={{ fontFamily: 'Mate', color: '#4B4C5D', margin: '5rem 0rem 0rem 1rem', fontWeight: '600' }}>
                            Projects We Have Undertaken
                        </Typography>
                        <Divider variant="middle" style={{ width: '25rem', marginLeft: '2rem', marginBottom: '2rem', height: '2px', backgroundColor: 'grey' }} />
                    </div>

                    <Projects />
                </Grid>


                <Grid item xs={6}>
                    <AboutContainer>
                        <Circle>
                            <img src={ab} alt="" style={{ width: '160px', height: '160px' }} />
                        </Circle>
                        <Typography variant='h6'>
                            <b>Mr. Ashish Burman</b>
                        </Typography>
                        <Typography variant='h6' style={{ color: 'grey' }}>
                            <i>Director</i>
                        </Typography>
                        <Typography variant='body1'>
                            Ashish Burman has done his diploma in Mechanical Engineering and has over <b>30 years</b> of experience in the energy sector.
                        </Typography>
                    </AboutContainer>

                </Grid>


                <Grid item xs={6}>
                    <AboutContainer>
                        <Circle>
                            <img src={mk} alt="" style={{ width: '160px', height: '160px' }} />
                        </Circle>
                        <Typography variant='h6'>
                            <b>Mr. Mukul Agrawal</b>

                        </Typography>
                        <Typography variant='h6' style={{ color: 'grey' }}>
                            <i>Principal Consultant</i>
                        </Typography>
                        <Typography variant='body1'>
                            Mukul Agrawal has done his Bachelor's and Master's in Engineering from IIT Roorkee and has over <b>28 years</b> of experience in the energy sector.
                        </Typography>
                    </AboutContainer>
                </Grid>

                <Grid item xs={12}>
                    <Footer />
                </Grid>


            </Grid>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form style={{ margin: '1rem', height: '30rem', width: '30rem' }}>
                    <div

                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginLeft: '1.5rem',
                            marginRight: '1rem'
                        }}
                    >

                        <Typography variant='h5' style={{ fontFamily: 'Montserrat', color: '#4B4C5D', width: '10rem' }}>
                            Contact Us
                        </Typography>

                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>


                    <DialogContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '25rem' }}>

                        <TextField
                            variant='outlined'
                            label='Name'
                            id='name'
                            margin='dense'
                            type='string'
                            placeholder='Enter your name'
                            fullWidth
                            onChange={handleNameChange}
                            size='Normal'
                        >


                        </TextField>

                        <TextField
                            variant='outlined'
                            label='Email'
                            id='email'
                            margin='dense'
                            type='string'
                            placeholder='Enter your email'
                            fullWidth
                            size='Normal'
                            onChange={handleEmailChange}>

                        </TextField>

                        <TextField
                            variant='outlined'
                            label='Contact Number'
                            margin='dense'
                            id='number'
                            type='string'
                            placeholder='Enter your contact number'
                            fullWidth
                            onChange={handleNumberChange}>

                        </TextField>
                        <TextField
                            multiline
                            rows={5}
                            margin='dense'
                            variant='outlined'
                            label='Message'
                            id='message'
                            type='string'
                            fullWidth
                            onChange={handleMessageChange}>

                        </TextField>
                        <Button style={{

                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            height: 48,
                            width: '10rem',
                            padding: '0 30px',

                        }}
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                    </DialogContent>

                </form>

            </Dialog>

        </Container>
    )
}

import React, { useState, useRef, useEffect } from 'react'

import { Navbar, Logo, NavLinks, NavLink, Contact, ButtonLink, StyDialogTitle } from './Styles'
import { Typography, Button, TextField, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, IconButton } from '@material-ui/core'
import { Link } from 'react-scroll'
import CloseIcon from '@material-ui/icons/Close';
import logo from '../Assets/logo.png'

export default function Header() {


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
        <div>

            <Navbar id='header'>
                <Link style={{ cursor: 'pointer' }} to='header' smooth={true} duration={700}>
                    <img src={logo} alt="" style={{ margin: '2rem 6rem 0rem 5rem', height: '5rem' }} />
                </Link>

                <NavLinks>
                    <NavLink to='header' smooth={true} duration={900}>Home</NavLink>
                    <NavLink to='learn' smooth={true} duration={900}>What We Do</NavLink>
                    <NavLink to='solutions' smooth={true} duration={900}>Solutions</NavLink>
                    <NavLink to='about' smooth={true} duration={900}>About Us</NavLink>
                    <NavLink onClick={handleOpen}>Contact Us</NavLink>

                </NavLinks>

                <Contact>

                </Contact>

                {/* <ContactButton variant='outlined' size='medium'>
                        <Typography variant='body2' style={{ color: 'white' }}>Contact Us</Typography>
                         </ContactButton> */}
            </Navbar>

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


        </div>
    )
}

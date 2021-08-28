import styled from 'styled-components';
import { Link } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom';
import { Button, Typography, DialogTitle } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({

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

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    
    
`

export const NavLink = styled(Link)`
  
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.20em;
  font-family: 'Montserrat';
  display: inline-block;
  padding: 10px 10px;
  position: relative;
  cursor: pointer;
  font-weight:700;
  font-size:14px;
  color:#ededed;


    &:after{
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
   }

   &:hover{
       color:white;
   }

   &:hover:after{
       
       width:100%;
       left:0;
   }



`


export const KnowMore = styled(Link)`

    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-family: 'Montserrat';
    display: inline-block;
    padding: 10px 20px;
    position: relative;
    cursor: pointer;

`

export const Contact = styled.div`
    width: 10rem;
    margin:50px;

`

export const NavLinks = styled.div`
    width:50rem;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Montserrat';
    align-items: center;
    margin-right: 50px;
    color:white;
    margin-top: 30px;
    


`

export const Logo = styled.div`
    width: 20rem;
    height: 4rem;
    color: black;
    display: flex;
    align-items: center;
    margin:20px;

`


export const HomeCard = styled.div`
    margin:3rem;
    width: 75rem;
    height: 29rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`


export const Container = styled.div`   
    height: 101%;
    width: 101%;
    background-color: #FBF8F8;

`

export const ButtonLink = styled(LinkR)`

    text-decoration: none;

`

export const Circle = styled.div`

  height: 10rem;
  width: 10rem;
  border: 0px solid black;
  border-radius: 50%;
  display: inline-block;

`

export const AboutContainer = styled.div`
 margin:5rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

`

export const FooterContainer = styled.div`

    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    height: 10rem;
    width: 100vw;

`
export const Info = styled.div`

    margin:1rem;
    width:40rem;
    display:flex;
    flex-direction: column;
    color:white;
    align-items: flex-start;
    justify-content: space-evenly;

`

export const Social = styled.div`
    margin-top:2rem;
    display:flex;
    width:15rem;
    height:2rem;
    justify-content: space-evenly;
    align-items: center;

`

export const ScrollButton = styled.div`
    position: fixed;
    bottom:12rem;
    right: 5rem;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius:4rem;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    z-index: 20;

`


export const Bold = styled(Typography)`
    
    font-weight: 600;

`


export const Item = styled.div`

   display:'flex';
   justify-content: center;
   align-items: center;
   height: 650px;
   width: 100%;
   margin: 0 15px;
   font-size:4em; 

`
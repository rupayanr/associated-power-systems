import './App.css';
import Header from './Components/Header'
import { ScrollButton, useStyles } from './Components/Styles'
import FeatherIcon from 'feather-icons-react';
import { IconButton, useScrollTrigger, Zoom } from '@material-ui/core'
import { BrowserRouter as Router, Link, Redirect, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import hero from './Assets/bg.jpg'
import LearnMore from './Components/LearnMore'
import About from './Components/About'
import Solutions from './Components/Solutions'

function ScrollTop(props) {
  const classes = useStyles();
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#header');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  );
}



function App() {


  return (
    <main>
      <Router>

        <ScrollTop>
          <IconButton>
            <ScrollButton>
              <FeatherIcon icon="chevron-up" size={30} stroke='white' />
            </ScrollButton>
          </IconButton>
        </ScrollTop>

        {/* <Header /> */}
        {/* <section id='main'>
          <Main />
        </section> */}
        <section id='header'>
          <Header />
        </section>

        <section id='home'>
          <div id='bg'>
            <img src={hero} alt="" />
          </div>

          <Home />


        </section>

        <section id='learn'>
          <LearnMore />

        </section>

        <section id='solutions'>
          <Solutions />
        </section>
        <section id='about'>
          <About />
        </section>




      </Router>
    </main>
  );
}

export default App;

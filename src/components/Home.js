import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import {createMuiTheme} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import * as ReactGA from "react-ga";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    boxColor: {
        backgroundColor: '#E9B5BD'
    },
    demo: {
        backgroundColor: 'white',
    },
    bigText: {
        [theme.breakpoints.down('lg')]: {
            fontSize: '70px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '34px'
        },
    },
    block: {
        [theme.breakpoints.up('lg')]: {
            padding: '32px',
            display: 'inline-block'
        },
        [theme.breakpoints.up('md')]: {
            padding: '16px',
            display: 'inline-block'
        }
    },
    icon: {
        fontSize: '80px',
        color: '#DC2A44'
    }
}));

const theme = createMuiTheme({palette: {primary: {main: '#DC2A44'}}})

export default function Home({state, setState}) {
    const classes = useStyles();
    useEffect(() => ReactGA.pageview('home'), []);
    return (
        <React.Fragment>
            <div style={{textAlign: "center"}}>
                <Box pt={4} pb={6} pl={[2, 4, 6, 24]} pr={[2, 4, 6, 24]} className={classes.boxColor}>
                    <h1 className={classes.bigText}>Are you facing an <span style={{color: '#DC2A44'}}>eviction</span>? This tool can help.</h1>
                    <p>If you're having trouble keeping up with your rent payments, the Federal Government has issued an order that prevents
                        landlords in the US from evicting many of their tenants until after December 31, 2020. Use this tool to see if you are covered,
                        and to produce the right letter (called a "Declaration") to send to your landlord, as required by the order.</p>
                    <Button style={{borderRadius: 15, textTransform:'none', height:50, width:200}} color='primary' variant='contained' disableElevation
                    onClick={() => {setState({...state, formNumber: 1})}}>
                        Start Free Tool
                    </Button>
                </Box>
                <Box>
                    <div className={classes.block}>
                        <ListAltIcon className={classes.icon}/>
                        <h3>Fill out the form in 5 minutes</h3>
                        <p>Answer a few questions and provide your<br/>landlord's contact information</p>
                    </div>
                    <div className={classes.block}>
                        <DescriptionIcon className={classes.icon}/>
                        <h3>The tool will create a letter</h3>
                        <p>The app will create a letter that is ready<br/>to send based on your answers</p>
                    </div>
                    <div className={classes.block}>
                        <EmailIcon className={classes.icon}/>
                        <h3>Send the letter to your landlord</h3>
                        <p>Download or print the letter to<br/>send to your landlord</p>
                    </div>
                </Box>
                <Box pt={2} pb={2} pl={[4, 8, 16, 40]} pr={[4, 8, 16, 40]}>
                    <h2>
                        About Nebraska Renters Help
                    </h2>
                    <p>
                        Nebraska Renters Help was built by Code for Nebraska.
                        The purpose of the site is to provide self-help tools and resources to struggling
                        Nebraska renters so that they can obtain protection they are entitled to under the current
                        CDC Federal Eviction Moratorium.
                    </p>
                </Box>
                <Box pt={10}>
                    <footer>
                        <p>2020 Open Nebraska</p>
                    </footer>
                </Box>
            </div>
        </React.Fragment>)
}

Home.propTypes = {
    formNumber: PropTypes.number,
}
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useMediaQuery } from 'react-responsive';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '30px',
        fontFamily: 'Poppins',
        fontSize: '35px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        },
        textAlign: 'center'
        // letterSpacing: '0.5px'
    },
    content: {
        fontFamily: 'poppins',
        color: '#d5d5d5',
        fontSize: '20px',
        paddingLeft: '8px',
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'poppins',
        color: '#e5e5e5',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    gridItem: {

        width: '100%',
        textAlign: 'center'
    },
    numberStyle: {
        fontSize: '50px',
        color: '#f36802'
    },
}));

const NumberCounter = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const [firstCounterDone, setFirstCounterDone] = React.useState(false)
    const [secondCounterDone, setSecondCounterDone] = React.useState(false)
    const [thirdCounterDone, setThirdCounterDone] = React.useState(false)
    const [fourthCounterDone, setFourthCounterDone] = React.useState(false)

    return (
        <>
            <div className={classes.heading}>
                Helping the local ecosystem
            </div>
            {!isMobile &&
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem} style={{ borderRight: 'solid', borderWidth: 'thin' }}>
                        <div className={classes.numberStyle}>
                            {!firstCounterDone ?
                                <CountUp end={42} onEnd={() => {
                                    setFirstCounterDone(true)
                                }}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> : 42}
                        </div>
                        <div>
                            Communities
                        </div>
                    </div>
                    <div className={classes.gridItem} style={{ borderRight: 'solid', borderWidth: 'thin' }}>
                        <div className={classes.numberStyle}>
                            {!secondCounterDone ?
                                <CountUp end={48} onEnd={() => {
                                    setSecondCounterDone(true)
                                }}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> : 48}
                        </div>
                        <div>
                            Independent Homes
                        </div>
                    </div>
                    <div className={classes.gridItem} style={{ borderRight: 'solid', borderWidth: 'thin' }}>
                        <div className={classes.numberStyle}>
                            {!thirdCounterDone ?
                                <CountUp end={33} onEnd={() => {
                                    setThirdCounterDone(true)
                                }}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> : 33}
                        </div>
                        <div>
                            Property Managers
                        </div>
                    </div>
                    <div className={classes.gridItem}>
                        <div className={classes.numberStyle}>
                            {!fourthCounterDone ?
                                <CountUp end={194} onEnd={() => {
                                    setFourthCounterDone(true)
                                }}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> : 194}
                        </div>
                        <div>
                            Home Owners
                        </div>
                    </div>
                </div>
            }
            {isMobile &&
                <>
                    <div className={classes.gridContainer}>
                        <div className={classes.gridItem} style={{ borderRight: 'solid', borderWidth: 'thin' }}>
                            <div className={classes.numberStyle}>
                                {!firstCounterDone ?
                                    <CountUp end={42} onEnd={() => {
                                        setFirstCounterDone(true)
                                    }}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp> : 42}
                            </div>
                            <div>
                                Communities
                        </div>
                        </div>
                        <div className={classes.gridItem} style={{ borderWidth: 'thin' }}>
                            <div className={classes.numberStyle}>
                                {!secondCounterDone ?
                                    <CountUp end={48} onEnd={() => {
                                        setSecondCounterDone(true)
                                    }}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp> : 48}
                            </div>
                            <div>
                                Independent Homes
                        </div>
                        </div>
                    </div>
                    <Divider style={{ backgroundColor: '#e5e5e5' }}/>
                    <div className={classes.gridContainer}>
                        <div className={classes.gridItem} style={{ borderRight: 'solid', borderWidth: 'thin' }}>
                            <div className={classes.numberStyle}>
                                {!thirdCounterDone ?
                                    <CountUp end={33} onEnd={() => {
                                        setThirdCounterDone(true)
                                    }}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp> : 33}
                            </div>
                            <div>
                                Property Managers
                        </div>
                        </div>
                        <div className={classes.gridItem}>
                            <div className={classes.numberStyle}>
                                {!fourthCounterDone ?
                                    <CountUp end={194} onEnd={() => {
                                        setFourthCounterDone(true)
                                    }}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp> : 194}
                            </div>
                            <div>
                                Home Owners
                        </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default NumberCounter

import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router"
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const tTime = 500; // Transition timing. (in milliseconds)

const MainComponent1 = styled.div`
    &.page-enter-active {
        position:absolute;
        top:0; left:0; width:100%;
        opacity:0;
        z-index:-1;
    }
    &.page-exit {
        ~ .wipe {
            transform: translateY(-100%);
        }
    }    
    &.page-exit-active{
        ~ .wipe {
            transform: translateY(0);
            transition: transform ${tTime}ms ease-in;
        }
        main{
            transform:translateY(-${props=>props.routingPageOffset}px);
        }
    }
    &.page-enter-done{
        ~ .wipe {
            transform: translateY(100%);
            transition: transform 500ms ease-out;
        }
    }
`;


const Wipe = styled.div`
    position: fixed;
    top:0; 
    left:0;
    width:100%;
    height:110vh;
    background-color: #f1f1f1;
    z-index: 5;
    transform: translateY(100%);
`;






const MainComponent = styled.div`
    &.page-enter {
        opacity: 0;
        transition: ${tTime}ms ease;
    }
    &.page-enter-active {
        opacity: 1;
        transition: ${tTime}ms ease;
        position:absolute;
        width:100%;
    }
    &.page-enter-done {
        transition: ${tTime}ms ease;
        opacity: 1;
    }
    &.page-exit {
        transition: ${tTime}ms ease;
        opacity: 1;
    }
    &.page-exit-active {
        opacity: 0;
        transition: ${tTime}ms ease;
    }
`;

const SecondaryComponent = styled.div`
    position:relative;
`;



const PageTransitions = ({ children, route, routingPageOffset }) =>  {

    const [transitioning, setTransitioning] = useState();

    const playTransition = () =>{
        setTransitioning(true);
        // console.log('playTransition');
    }

    const stopTransition = () =>{
        setTransitioning(false);
        // console.log('stopTransition');
    }

    return (
        <>
            <TransitionGroup component={null} className={transitioning ? "transitioning": ""}>
                <CSSTransition key={route} classNames="page" timeout={tTime}
                onEnter={playTransition}
                onExited={stopTransition} >
                    <MainComponent1 routingPageOffset={routingPageOffset}>
                        {children}
                    </MainComponent1>
                </CSSTransition>
            </TransitionGroup>
            <Wipe className="wipe" />
        </>
    );
};

export default PageTransitions; 
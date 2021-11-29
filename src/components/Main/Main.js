import React from "react";
import './main.modules.css'
import CardComponent from '../Card/Card'
import Container from '@mui/material/Container';

const Main = () => {

    return (
        <main id="main" className="main">
            <Container>
            <CardComponent />
            </Container>
        </main>
    )
}


export default Main
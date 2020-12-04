import React from 'react';
import {Container, Sidebar, Header, Content, Footer, Grid, Col} from 'rsuite';
import './AboutPage.css';


function About() {


    return (
    <Grid>
        <Container>
            <Sidebar></Sidebar>
                <Container className="text-content">
                    <Col xs={24} sm={24} md={6}>
                        <Header><h1>Clarade</h1></Header>
                        <Content><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Content>
                    </Col>
                    <Footer>Footer</Footer>
                </Container>
        </Container>
    </Grid>
    )
}


export default About;
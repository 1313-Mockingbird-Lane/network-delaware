import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import Page from '../layouts/main'
export default () => (
    <Page href='/about'>
    <Grid>
        <Row>
            <Col sm={12}> <p>My about page!</p> </Col>
        </Row>
    </Grid>
    </Page>
)
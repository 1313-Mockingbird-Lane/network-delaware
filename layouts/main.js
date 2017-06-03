import Router from 'next/router'
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function handleSelect(href) {
    Router.push(href)
}

export default ({href, children}) => (
  <div>
    <Grid>
        <Row>
            <Col sm={12}>
                <PageHeader>Network Delaware</PageHeader>
                    <Navbar>
                        <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/index"><img src="static/imgs/networkDE.png" alt="" class="logo" /></a>
                        </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
            </Col>
            <br />
        </Row>
    </Grid>
    { children }
  </div>
)
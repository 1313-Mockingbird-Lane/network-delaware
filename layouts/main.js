import Router from 'next/router'
import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

function handleSelect(href) {
    Router.push(href)
}

export default ({href, children}) => (
  <div>
    <Grid>
        <Row>
            <Col sm={12}>
                <PageHeader>Network Delaware</PageHeader>
                    <Nav bsStyle="pills" activeKey={ href } onSelect={handleSelect}>
                        <NavItem eventKey="/" href="/">Home</NavItem>
                        <NavItem eventKey="/about" href="/about">About</NavItem>
                    </Nav>
            </Col>
            <br />
        </Row>
    </Grid>
    { children }
  </div>
)
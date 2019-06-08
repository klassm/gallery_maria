import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavLink from 'react-bootstrap/NavLink';

const availableLinks = [{
  title: 'Acrylbilder',
  link: '/acryl'
}, {
  title: 'Aquarelle',
  link: '/aquarelle'
}, {
  title: 'Kerzen',
  link: '/kerzen'
}, {
  title: 'Glueckwunschkarten',
  link: '/glueckwunsch'
}];

interface HeaderState {
  navExpanded: boolean
}

interface HeaderProps {
}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      navExpanded: false
    }
  }

  private setNavExpanded(expanded: boolean) {
    this.setState({ navExpanded: expanded });
  };

  private closeNav() {
    this.setState({ navExpanded: false });
  }

  public render() {
    const links = availableLinks.map(({ title, link }) => {
      return <LinkContainer to={link} key={link} onSelect={this.closeNav.bind(this)}>
        <NavLink>{title}</NavLink>
      </LinkContainer>
    });
    return (
        <Navbar className="navbar navbar-dark bg-dark" expand="lg" onToggle={this.setNavExpanded.bind(this)} expanded={this.state.navExpanded}>
          <LinkContainer to="/" onClick={this.closeNav.bind(this)}>
            <Navbar.Brand>Gallery</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {links}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
};
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onClick = () => {
    if (this.props.footer)
      window.scrollTo(0,0)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fluid widths={6} secondary={this.props.footer} color={this.props.footer && 'blue'}>
          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
          >
           Home
          </Menu.Item>

          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/energy'
            name='energy'
            active={activeItem === 'energy'}
          >
           What is Energy Healing?
          </Menu.Item>

          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/simply'
            name='simply'
            active={activeItem === 'simply'}
          >
           SimplyHealed™
          </Menu.Item>

          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/about'
            name='about'
            active={activeItem === 'about'}
          >
           About Jen
          </Menu.Item>

          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/faq'
            name='faq'
            active={activeItem === 'faq'}
          >
           {"FAQ'S"}
          </Menu.Item>

          <Menu.Item
            onClick={this.onClick}
            as={Link}
            to='/contact'
            name='contact'
            active={activeItem === 'contact'}
          >
           Contact/Pay Me
          </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;

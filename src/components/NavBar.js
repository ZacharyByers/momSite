import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={6}>
          <Menu.Item
            as={Link}
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
           Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/energy'
            name='energy'
            active={activeItem === 'energy'}
            onClick={this.handleItemClick}
          >
           What is Energy Healing?
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/simply'
            name='simply'
            active={activeItem === 'simply'}
            onClick={this.handleItemClick}
          >
           SimplyHealed
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
           About Jen
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/faq'
            name='faq'
            active={activeItem === 'faq'}
            onClick={this.handleItemClick}
          >
           {"FAQ'S"}
          </Menu.Item>

          <Menu.Item
            as={Link}
            to='/contact'
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          >
           Contact/Pay Me
          </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;

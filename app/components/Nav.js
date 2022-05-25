import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../utils/contexts';

const activeStyle = {
  color: 'rgb(187, 46, 31)',
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className={`row nav nav-${theme}`}>
            <li>
              <NavLink
                exact
                activeStyle={activeStyle}
                className='navbar-link'
                to='/'
              >
                Top
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                className='navbar-link'
                to='/new'
              >
                New
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}

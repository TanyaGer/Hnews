import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './utils/contexts';

import Nav from './components/Nav.js';
import TopStories from './components/TopStories.js';
import NewStories from './components/NewStories';
import Author from './components/Author';
import Comments from './components/Comments';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <React.Suspense>
                <Switch>
                  <Route exact path='/' component={TopStories} />
                  <Route path='/new' component={NewStories} />
                  <Route path='/author' component={Author} />
                  <Route path='/post' component={Comments} />
                  <Route path='*' render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDomClient.createRoot(document.getElementById('app')).render(<App />);

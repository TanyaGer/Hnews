import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hacker news app</h1>
      </div>
    );
  }
}

ReactDomClient.createRoot(document.getElementById('app')).render(<App />);

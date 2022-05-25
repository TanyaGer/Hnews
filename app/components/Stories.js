import * as React from 'react';
import { getStoriesIds } from '../utils/api';

import Posts from './Posts';

export default class Stories extends React.Component {
  state = {
    stories: null,
    errorMessage: null,
  };

  componentDidMount() {
    const { storiesIdsURL } = this.props;
    getStoriesIds(storiesIdsURL)
      .then((res) => {
        this.setState({ stories: res });
      })
      .catch((e) => {
        this.setState({ errorMessage: e.message });
      });
  }

  render() {
    const { stories, errorMessage } = this.state;
    if (!!errorMessage) {
      return (
        <div>
          <h2>{errorMessage}</h2>
        </div>
      );
    }
    return (
      <div>
        <div>{stories !== null && <Posts storiesIds={stories} />}</div>
      </div>
    );
  }
}

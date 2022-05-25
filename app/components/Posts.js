import * as React from 'react';
import Loading from './Loading';
import Story from './Story';
import { getStoriesById, errorMessageStories } from '../utils/api';

export default class Posts extends React.Component {
  state = {
    stories: [],
    errorMessage: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories = () => {
    const { stories } = this.state;
    const { storiesIds } = this.props;
    const storiesIdsArray = storiesIds.slice(
      stories.length,
      stories.length + 25
    );
    this.setState({ loading: true });

    getStoriesById(storiesIdsArray)
      .then((res) => {
        this.setState(({ stories, loading }) => {
          return {
            stories: stories.concat(res.filter((item) => item.title)),
            loading: false,
          };
        });
      })
      .catch(() => {
        this.setState({ errorMessage: errorMessageStories, loading: false });
      });
  };

  render() {
    const { loading, stories, errorMessage } = this.state;

    if (!!errorMessage) {
      return (
        <div>
          <h2>{errorMessage}</h2>
        </div>
      );
    }

    return (
      <div>
        {loading && !errorMessage ? (
          <Loading />
        ) : stories.length === 0 ? (
          <h4>The user doesn't have any stories yet!</h4>
        ) : (
          <ul>
            {stories.map((story) => {
              return (
                <li key={story.id}>
                  <Story story={story} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

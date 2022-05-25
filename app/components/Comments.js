import * as React from 'react';
import { Link } from 'react-router-dom';
import Story from './Story';
import StoryHeader from './StoryHeader';
import StoryInfo from './StoryInfo';
import { ThemeConsumer } from '../utils/contexts';
import { getStoryComments, errorMessageComments } from '../utils/api.js';
import { formatDate } from '../utils/formatDate';

export default class Comments extends React.Component {
  state = {
    comments: [],
    errorMessage: null,
  };

  componentDidMount() {
    const { story } = this.props.location.state;
    getStoryComments(story.kids)
      .then((res) => this.setState({ comments: res }))
      .catch(() => {
        this.setState({ errorMessage: errorMessageComments });
      });
  }

  render() {
    const { story } = this.props.location.state;
    const { title, url } = story;
    const { comments, errorMessage } = this.state;

    if (!!errorMessage) {
      return (
        <div>
          <h2>{errorMessage}</h2>
        </div>
      );
    }

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div>
            <div className='meta-info-container'>
              <StoryHeader text={title} url={url} size='header-bg' />
              <StoryInfo story={story} />
            </div>
            <ul>
              {comments.map(({ id, by, time, text }) => (
                <li className='coment-container' key={id}>
                  <div className={`meta-info-coment meta-info-coment-${theme}`}>
                    <span>
                      by{' '}
                      <Link to={{ pathname: '/author', search: `?id=${by}` }}>
                        {by}
                      </Link>
                    </span>
                    <span> on {formatDate(time)}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

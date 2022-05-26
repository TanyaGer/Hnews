import * as React from 'react';
import queryString from 'query-string';
import Posts from './Posts';
import Loading from './Loading';
import { ThemeConsumer } from '../utils/contexts';
import { getAuthorProfile, errorMessageAuthor } from '../utils/api';
import { formatDate } from '../utils/formatDate';

export default class Author extends React.Component {
  state = {
    authorProfile: null,
    errorMessage: null,
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    getAuthorProfile(id)
      .then((profile) => this.setState({ authorProfile: profile }))
      .catch(() => {
        this.setState({ errorMessage: errorMessageAuthor });
      });
  }

  render() {
    const { authorProfile, errorMessage } = this.state;

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div>
            {authorProfile !== null && (
              <div>
                <div className={`meta-info-author meta-info-author-${theme}`}>
                  <h1>{authorProfile.id}</h1>
                  joined <span>
                    {formatDate(authorProfile.created)}
                  </span> has{' '}
                  <span>{authorProfile.karma.toLocaleString()}</span> karma
                  <p
                    dangerouslySetInnerHTML={{ __html: authorProfile.about }}
                  />
                </div>
              </div>
            )}
            {!!errorMessage && <h2>{errorMessage}</h2>}

            {errorMessage === null && authorProfile === null ? (
              <Loading />
            ) : (
              authorProfile && (
                <>
                  <span>
                    <h1>Posts</h1>
                  </span>
                  <Posts storiesIds={authorProfile.submitted} />
                </>
              )
            )}
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

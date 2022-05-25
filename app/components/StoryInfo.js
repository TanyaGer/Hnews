import * as React from 'react';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../utils/contexts';
import { formatDate } from '../utils/formatDate';

export default function StoryInfo({ story }) {
  const { id, by, time, kids: commentsList } = story;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`row meta-info-list meta-info-list-${theme}`}>
          <span>
            by{' '}
            <Link to={{ pathname: '/author', search: `?id=${by}` }}>{by}</Link>
          </span>
          <span>on {formatDate(time)}</span>
          <span>with</span>
          <span>
            <Link
              to={{
                pathname: '/post',
                search: `?id=${id}`,
                state: { story: story },
              }}
            >
              {Array.isArray(commentsList) ? `${commentsList.length}` : '0'}
            </Link>
          </span>
          <span>comments</span>
        </div>
      )}
    </ThemeConsumer>
  );
}

import * as React from 'react';
import StoryHeader from './StoryHeader';
import StoryInfo from './StoryInfo';

export default function Story({ story }) {
  const { title, url } = story;
  return (
    <div className='meta-info-container'>
      <StoryHeader text={title} url={url} />
      <StoryInfo story={story} />
    </div>
  );
}

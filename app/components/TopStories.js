import * as React from 'react';
import { topStoriesIdURL } from '../utils/api';
import Stories from './Stories';

export default function TopStories() {
  return <Stories storiesIdsURL={topStoriesIdURL} />;
}

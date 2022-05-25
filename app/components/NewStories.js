import * as React from 'react';
import { newStoriesIdURL } from '../utils/api';
import Stories from './Stories';

export default function TopStories() {
  return <Stories storiesIdsURL={newStoriesIdURL} />;
}

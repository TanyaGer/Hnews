import * as React from 'react';
import { ThemeConsumer } from '../utils/contexts';

export default function StoryHeader({ text, url, size = 'header-sm' }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <a
          className={`meta-info-header meta-info-header-${theme} ${size}`}
          href={url}
        >
          {text}
        </a>
      )}
    </ThemeConsumer>
  );
}

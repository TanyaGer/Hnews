export const topStoriesIdURL = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
export const newStoriesIdURL = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`;

export const errorMessageAuthor = `There was a problem fetching the author's profile!`;
export const errorMessageStories = 'There was a problem fetching the stories!';
export const errorMessageComments =
  'There was a problem fetching the comments!';

export function getStoriesIds(endpoint) {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((result) => {
      if (!Array.isArray(result)) {
        throw new Error(errorMessageStories);
      }
      return result;
    });
}

function getSingleItemById(id) {
  return fetch(
    window.encodeURI(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
  )
    .then((res) => res.json())
    .catch(() => {
      return null;
    });
}

export function getAuthorProfile(name) {
  return fetch(
    window.encodeURI(
      `https://hacker-news.firebaseio.com/v0/user/${name}.json?print=pretty`
    )
  ).then((res) => res.json());
}

export function getStoriesById(storiesIds) {
  return Promise.all(
    storiesIds.map((storyId) => getSingleItemById(storyId))
  ).then((allStories) => allStories);
}

export function getStoryComments(commentsList) {
  return Promise.all(
    commentsList.map((itemId) => getSingleItemById(itemId))
  ).then((allComments) => allComments);
}

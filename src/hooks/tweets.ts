import { useQuery, UseQueryResult } from 'react-query';
import { fetcher } from 'core/api';
import { Tweet } from 'core/types';
import { TweetSearchResponse } from 'core/types';

export function useTweets(): UseQueryResult<Array<Tweet>, unknown> {
  return useQuery(['tweets'], () =>
    fetcher
      .get(
        '/2/tweets/search/recent?query=javascript&tweet.fields=created_at&expansions=author_id',
        {
          headers: {
            authorization:
              'Bearer AAAAAAAAAAAAAAAAAAAAAFsMbwEAAAAAuE%2BhjesnnOlTtEk1xu19C7EgIYM%3DFHsOF09iseHnuzKQWHjoug6xsB4YiR90N4f54SwZABpuvU5J7u',
          },
        },
      )
      .then((response) => {
        const data = response.data as TweetSearchResponse;
        const tweets: Array<Tweet> = [];

        data.includes.users.forEach((user) => {
          const usersTweets = data.data.filter(
            (tweet) => tweet.author_id === user.id,
          );

          usersTweets.forEach((tweet) => {
            tweets.push({
              createdAt: new Date(tweet.created_at),
              id: tweet.id,
              name: user.name,
              username: user.username,
              text: tweet.text,
              reactions: {
                comments: 0,
                likes: 0,
                retweets: 0,
              },
            });
          });
        });

        return tweets;
      }),
  );
}

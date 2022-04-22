export type Tweet = {
  name: string;
  username: string;
  createdAt: Date;
  text: string;
  id: string;
  reactions: {
    comments: number;
    retweets: number;
    likes: number;
  };
};

export type TweetSearchResult = {
  author_id: string;
  created_at: string;
  id: string;
  text: string;
};

export type TweetUser = {
  id: string;
  name: string;
  username: string;
};

export type TweetSearchResponse = {
  data: Array<TweetSearchResult>;
  includes: { users: Array<TweetUser> };
};

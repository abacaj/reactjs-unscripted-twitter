import IconComment from 'assets/icons/IconComment';
import IconLike from 'assets/icons/IconLike';
import IconRetweet from 'assets/icons/IconRetweet';
import IconShare from 'assets/icons/IconShare';
import classNames from 'classnames';
import Avatar from 'components/Avatar/Avatar';
import { Tweet } from 'core/types';
import { formatTimelineTweet } from 'core/utils';
import { Link } from 'react-router-dom';
import styles from 'components/App/app.module.css';
import Loader from 'components/Loader/Loader';
import { useTweets } from 'hooks/tweets';

function TimelineTweet({ tweet }: { tweet: Tweet }) {
  return (
    <div className={classNames('flex ph3 pt3 pb2', styles.timelineTweet)}>
      <div className="mr3">
        <Avatar />
      </div>

      <div className="flex flex-column flex-auto">
        <div className="flex items-center mb2">
          <Link to="/" className="mr1">
            {tweet.name}
          </Link>
          <span className="color-gray-dark">@{tweet.username}</span>
          <span className="f8 mh1">•</span>
          <span className="color-gray-dark">
            {formatTimelineTweet(tweet.createdAt)}
          </span>
        </div>

        <p className="ma0 mb3">{tweet.text}</p>

        <div
          className={classNames('flex justify-between', styles.timelineToolbar)}
        >
          <button className="btn flex pa0 items-center f7">
            <IconComment className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.comments > 0 ? (
              <span>{tweet.reactions.comments}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconRetweet className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.retweets > 0 ? (
              <span>{tweet.reactions.retweets}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 items-center f7">
            <IconLike className="w125 h125 pa2 br-100 mr1" />
            {tweet.reactions.likes > 0 ? (
              <span>{tweet.reactions.likes}</span>
            ) : null}
          </button>
          <button className="btn flex pa0 mr5 items-center f7">
            <IconShare className="w125 h125 pa2 br-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Timeline({ tweets }: { tweets: Array<Tweet> }) {
  return (
    <>
      {tweets.map((t, i) => (
        <TimelineTweet key={t.id} tweet={t} />
      ))}
    </>
  );
}

export default function TimelineContainer() {
  const getTweets = useTweets();
  const tweets = getTweets.data ?? [];

  if (getTweets.isLoading) {
    return (
      <div className="flex justify-center flex-auto mv4">
        <Loader />
      </div>
    );
  }

  if (getTweets.isError) {
    return <p className="tc f4 b mv4">Failed to fetch tweets...</p>;
  }

  if (tweets.length === 0) {
    return <p className="tc f4 b mv4">No tweets yet...</p>;
  }

  return <Timeline tweets={tweets} />;
}

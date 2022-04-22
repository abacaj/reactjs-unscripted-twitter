import styles from 'components/App/app.module.css';
import classNames from 'classnames';
import Avatar from 'components/Avatar/Avatar';
import TweetComposer from 'components/App/TweetComposer';
import TimelineContainer from 'components/App/Timeline';

export default function MainContent() {
  return (
    <div className={classNames(styles.mainContent)}>
      <div className={classNames('ph3 pb3', styles.tweetComposer)}>
        <h3>Latest tweets</h3>

        <div className="flex">
          <div className="mr3">
            <Avatar src="https://pbs.twimg.com/profile_images/1271297901034078209/uqFna6Dz_normal.jpg" />
          </div>

          <TweetComposer />
        </div>
      </div>

      <TimelineContainer />
    </div>
  );
}

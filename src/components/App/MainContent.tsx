import styles from 'components/App/app.module.css';
import classNames from 'classnames';
import Avatar from 'components/Avatar/Avatar';
import IconImage from 'assets/icons/IconImage';
import IconGif from 'assets/icons/IconGif';
import IconPoll from 'assets/icons/IconPoll';
import IconEmoji from 'assets/icons/IconEmoji';
import IconSchedule from 'assets/icons/IconSchedule';
import IconLocation from 'assets/icons/IconLocation';
import { useState } from 'react';
import { isEmpty } from 'lodash';

function TweetAreaInput({ setText }: { setText: (text: string) => void }) {
  const adjustHeight = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const element = event.currentTarget;

    element.style.height = '1px';
    element.style.height = 25 + element.scrollHeight + 'px';

    setText(element.value);
  };

  return (
    <textarea
      onInput={adjustHeight}
      className={classNames('w-100 f4', styles.tweetArea)}
      placeholder={"What's happening?"}
    />
  );
}

function Toolbar() {
  return (
    <div className={classNames('flex', styles.tweetToolbar)}>
      <button className="btn pa2 br-100 flex mr1">
        <IconImage className="w125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconGif className="w125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconPoll className="w125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconEmoji className="w125 h125" />
      </button>
      <button className="btn pa2 br-100 flex mr1">
        <IconSchedule className="w125 h125" />
      </button>
      <button className="btn pa2 br-100 flex">
        <IconLocation className="w125 h125" />
      </button>
    </div>
  );
}

function TweetArea() {
  const [text, setText] = useState('');

  return (
    <div className="flex-auto">
      <TweetAreaInput setText={setText} />

      <div className="flex justify-between items-center">
        <Toolbar />

        <button
          className={classNames('btn btn-primary b ph3 pv2 br-pill', {
            'o-50': isEmpty(text),
          })}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className={classNames(styles.mainContent, 'ph3')}>
      <h3>Latest tweets</h3>

      <div className="flex">
        <div className="mr3">
          <Avatar src="https://pbs.twimg.com/profile_images/1271297901034078209/uqFna6Dz_normal.jpg" />
        </div>

        <TweetArea />
      </div>
    </div>
  );
}

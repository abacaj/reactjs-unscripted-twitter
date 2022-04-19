import IconBookmarks from 'assets/icons/IconBookmarks';
import IconCommunity from 'assets/icons/IconCommunity';
import IconHashtag from 'assets/icons/IconHashtag';
import IconHome from 'assets/icons/IconHome';
import IconMessages from 'assets/icons/IconMessages';
import IconNotifications from 'assets/icons/IconNotifications';
import IconProfile from 'assets/icons/IconProfile';
import Logo from 'assets/icons/Logo';
import { Link } from 'react-router-dom';
import IconMore from 'assets/icons/IconMore';
import styles from 'components/App/app.module.css';
import classNames from 'classnames';

export default function LeftSidebar() {
  return (
    <div className={styles.leftSidebar}>
      <div
        className={classNames(
          'flex flex-column items-start fixed overflow-auto h-100',
        )}
      >
        <Link className="pa2" to="/">
          <Logo />
        </Link>

        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconHome className="w15 h15 mr3" />
            Home
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconHashtag className="w15 h15 mr3" />
            Explore
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconCommunity className="w15 h15 mr3" />
            Communities
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconNotifications className="w15 h15 mr3" />
            Notifications
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconMessages className="w15 h15 mr3" />
            Messages
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconBookmarks className="w15 h15 mr3" />
            Bookmarks
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb2" to="/">
          <div className="flex items-center">
            <IconProfile className="w15 h15 mr3" />
            Profile
          </div>
        </Link>
        <Link className="btn f4 pl2 pr4 pv3 br-pill mb3" to="/">
          <div className="flex items-center">
            <IconMore className="w15 h15 mr3" />
            More
          </div>
        </Link>

        <button className="btn btn-primary b ph4 pv3 br-pill w-80">
          Tweet
        </button>
      </div>
    </div>
  );
}

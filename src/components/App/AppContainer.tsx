import styles from 'components/App/app.module.css';
import classNames from 'classnames';
import LeftSidebar from 'components/App/LeftSidebar';
import MainContent from 'components/App/MainContent';

export default function AppContainer() {
  return (
    <div className={classNames('flex center min-vh-100', styles.container)}>
      <LeftSidebar />

      <MainContent />

      <div className="right">Right</div>
    </div>
  );
}

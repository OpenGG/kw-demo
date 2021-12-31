import { nav, navTab, navTabActive } from './Nav.module.css';
import classnames from 'classnames'

type IAnchor = {
  id: string;
  text: string;
};

const Nav = ({
  active,
  anchors,
  onClick,
}: {
  active: string,
  anchors: IAnchor[],
  onClick: (active: string) => void
}) => (
  <div className={nav}>
    {anchors.map((anchor) => (
      <div
        className={classnames(navTab, active === anchor.id && navTabActive)}
        key={anchor.id}
        onClick={() => onClick(anchor.id)}
      >
        {anchor.text}
      </div>
    ))}
  </div >
);

export default Nav;

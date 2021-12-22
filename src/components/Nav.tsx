import { nav } from './Nav.module.css';

type IAnchor = {
  id: string;
  text: string;
};

const Nav = ({ anchors }: { anchors: IAnchor[] }) => (
  <div className={nav}>
    {anchors.map((anchor) => (
      <a key={anchor.id} href={anchor.id}>
        {anchor.text}
      </a>
    ))}
  </div>
);

export default Nav;

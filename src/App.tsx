import Nav from './components/Nav';
import DemoIcons from './DemoIcons/DemoIcons';
import DemoColors from './DemoColors/DemoColors';
import { useState } from 'react';

const anchors = [
  {
    id: '#demoIcons',
    text: '图标演示',
    Element: DemoIcons,
  },
  {
    id: '#demoColors',
    text: '颜色演示',
    Element: DemoColors,
  }
];

const App = () => {
  const [active, setActive] = useState(anchors[0].id)
  const onClick = (n: string) => {
    setActive(n)
  }

  const Element = anchors.find(item => item.id === active)?.Element

  return (
    <>
      <Nav anchors={anchors} active={active} onClick={onClick} />
      {Element && <Element />}
    </>
  );
}

export default App;

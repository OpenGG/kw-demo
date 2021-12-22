import Nav from './components/Nav';
import DemoIcons from './DemoIcons/DemoIcons';
import DemoColors from './DemoColors/DemoColors';

const anchors = [
  {
    id: '#demoIcons',
    text: '图标演示'
  },
  {
    id: '#demoColors',
    text: '颜色演示'
  }
];

const App = () => (
  <>
    <Nav anchors={anchors} />
    <DemoIcons id="demoIcons" />
    <DemoColors id="demoColors" />
  </>
);

export default App;

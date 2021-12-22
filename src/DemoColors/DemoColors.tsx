import PlanCss from './PlanCss';
import PlanSass from './PlanSass';
import PlanLess from './PlanLess';

const DemoColors = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <h1>颜色演示</h1>
    <PlanCss />
    <PlanSass />
    <PlanLess />
  </div>
);

export default DemoColors;

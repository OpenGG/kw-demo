import React, { useEffect } from 'react';
import PlanA from './PlanA';
import PlanB from './PlanB';
import PlanC from './PlanC';
import PlanCDom from './PlanCDom';

const DemoIcons = (props: React.HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    PlanCDom();
  }, []);
  return (
    <div {...props}>
      <h1>图标演示</h1>
      <h2>方案A：基于方案 B 改进，支持自动裁剪，推荐使用</h2>
      <PlanA />

      <h2>方案B：散图引用，推荐使用</h2>
      <PlanB />

      <h2>方案C：iconfont 方案，不推荐使用</h2>
      <PlanC />

      <div id="PlanCDom"></div>
    </div>
  );
};

export default DemoIcons;

// 引入图标
import '@ks/kw/icon/output/all/iconfont.css';

import { hello, hello1 } from './PlanC.module.less';

const PlanCDom = () => {
  const parent = document.getElementById('PlanCDom') as HTMLElement;
  parent.innerHTML = `
  <h2>方案C：iconfont 方案，不推荐使用</h2>
  <p>没使用 React/vue，直接渲染 span </p>
  <span
    aria-hidden="true"
    class="${hello}
      iconfont-all
      icon-common_base_like_24
      icon-common_base_like_24-dual
    "
    style="font-size: 40px;"
  ></span>${
/* 不推荐做法：在 class 规则 或 style 属性中自定义颜色，会覆盖掉图标本身颜色 */''
    }<span
    aria-hidden="true"
    class="${hello1}
      iconfont-all
      icon-common_base_like_24
      icon-common_base_like_24-dual
    "
    style="font-size: 30px;color: var(--color_base_black_1)"
  ></span>
  `;
};

export default PlanCDom;

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
  ></span>
  <span
    aria-hidden="true"
    class="${hello1}
      iconfont-all
      icon-common_base_like_24
      icon-common_base_like_24-dual
    "
    style="color: var(--color_base_black_1)"
  ></span>
  `;
};

export default PlanCDom;

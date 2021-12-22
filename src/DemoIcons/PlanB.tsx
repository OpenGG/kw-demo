import React from 'react';
// 第一步：引入图标
import Icon from '@ks/kw/icon/output/Icon.js';
import common_base_like_24 from '@ks/kw/icon/output/common/base/common_base_like_24/index.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import { color_base_black_1 } from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanB.module.less';

const PlanA = () => (
  <div>
    {/* 传入具体的图标模块，这样可以做到仅打包所使用的图标，避免冗余 */}
    <Icon config={common_base_like_24} className={hello} />

    {/* 不推荐做法：在 class 规则 或 style 属性中自定义颜色 */}
    <Icon
      config={common_base_like_24}
      className={hello1}
      style={{ color: color_base_black_1 }}
    />
  </div>
);

export default PlanA;

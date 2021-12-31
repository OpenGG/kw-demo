import React from 'react';
// 第一步：引入图标
import '@ks/kw/icon/output/all/iconfont.css';
import IconFont from '@ks/kw/icon/output/all/iconfont.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanC.module.less';

const PlanA = () => (
  <div>
    <IconFont icon="common_base_like_24" className={hello} />
    <IconFont
      icon="common_base_like_24"
      className={hello1}
      style={{ color: colors.color_base_black_1 }}
    />
  </div>
);

export default PlanA;

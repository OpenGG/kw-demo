import React from 'react';
// 第一步：引入图标
import Icon from '@ks/kw/icon/output/Icon.js';
import IconLight from '@ks/kw/icon/output/IconLight.js';
import * as icons from '@ks/kw/icon/output/icons.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanA.module.less';

const PlanA = () => (
  <div>
    <Icon
      /*
       * config:
       *   必填
       *   图标模块
       * size:
       *   * 可选
       *   图标尺寸
       *   可以在 app.css 中统一设好 .svgfont{ width: 40px; height: 40px; } 规则
       *   也可以调用组建时传入 size
       * color:
       *   * 可选
       *   颜色
       *   手动设置 color ，会覆盖掉图标本身颜色
       */
      config={icons.common_base_like_24}
      size={40}
      className={hello}
    />

    <IconLight
      config={icons.common_base_like_24}
      className={hello}
      size={30}
      color={colors.color_base_black_1}
    />

    <IconLight
      config={icons.common_base_like_24}
      className={hello1}
    />
  </div>
);

export default PlanA;

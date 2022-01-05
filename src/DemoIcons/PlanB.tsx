import React from 'react';
// 第一步：引入图标
import Icon from '@ks/kw/icon/output/Icon.js';
import IconLight from '@ks/kw/icon/output/IconLight.js';
import common_base_like_24 from '@ks/kw/icon/output/common/base/common_base_like_24/index.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanB.module.less';

const PlanA = () => (
  <div>
    <Icon
      /*
       * config:
       *   传入具体的图标模块，这样可以做到仅打包所使用的图标，避免荣誉
       * size:
       *   图标尺寸
       *   可以在 app.css 中统一设好 .svgfont{} 规则
       *   也可以调用组建时传入 siz*
       * color:
       *   手动设置 color ，会覆盖掉图标本身颜色
       */
      config={common_base_like_24}
      size={40}
      className={hello}
    />

    <IconLight
      config={common_base_like_24}
      className={hello1}
      size={30}
      color={colors.color_base_black_1}
    />
  </div>
);

export default PlanA;

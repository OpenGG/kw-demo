import React from 'react';
// 第一步：引入图标
import '@ks/kw/icon/output/all/iconfont.css';
import IconFont from '@ks/kw/icon/output/all/iconfont.js';
import IconFontLight from '@ks/kw/icon/output/all/IconFontLight.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanC.module.less';

const PlanA = () => (
  <div>
    <IconFont
      icon="common_base_like_24"
      className={hello}
      /*
       * 图标尺寸：
       * 可以在 app.css 中统一设好 .svgfont{} 规则
       * 也可以调用组建时传入 size
       */
      size={40}
    />

    {/* 不推荐做法：在 class 规则 或 style 属性中自定义颜色，会覆盖掉图标本身颜色 */}
    <IconFontLight
      icon="common_base_like_24"
      className={hello1}
      style={{ color: colors.color_base_black_1 }}
      size={30}
    />
  </div>
);

export default PlanA;

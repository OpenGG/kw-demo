import React from 'react';
// 第一步：引入图标
import '@ks/kw/icon/output/all/iconfont.css';
import IconFont from '@ks/kw/icon/output/all/iconfont.js';
import IconFontLight from '@ks/kw/icon/output/all/iconfontLight.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

import { hello, hello1 } from './PlanC.module.less';

const PlanC = () => (
  <div>
    <IconFont
      /*
       * icon:
       *   必填
       *   图标名称
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
      icon="common_base_like_24"
      size={40}
      className={hello}
    />

    <IconFont
      icon="common_base_like_24_png"
      size={40}
      className={hello}
    />

    <IconFontLight
      icon="common_base_like_24"
      className={hello}
      size={30}
      color={colors.color_base_black_1}
    />

    <IconFontLight
      icon="common_base_like_24_png"
      className={hello}
      size={30}
      color={colors.color_base_black_1}
    />

    <IconFontLight
      icon="common_base_like_24"
      className={hello1}
    />

    <IconFontLight
      icon="common_base_like_24_png"
      className={hello1}
    />
  </div>
);

export default PlanC;

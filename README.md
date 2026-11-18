# 头皮大作战96H：千禧蓬松物语

Y2K 复古像素风 · 移动端竖屏互动测试 H5。纯 HTML / CSS / JavaScript，无需构建。

> 这是可直接部署的 H5 单页。如需放进微信小程序，可用 `web-view` 承载本页面；海报下载在微信内置浏览器中可能受下载权限限制，可提示用户长按保存。

## 运行

```bash
cd y2k-scalp-battle
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080/`。

> 直接双击 `index.html` 也可以运行；但用本地 HTTP 服务打开，`html2canvas` 保存海报和本地字体加载更稳定。

## 当前流程（3 个页面）

1. **首页**：封面标题、马卡龙 Y2K 装饰、左右切换三个人设、直接点击 START 以当前人设开始挑战。
2. **96H 挑战**：5 个关卡依次作答，实时播放 8-bit 音效和茶萃适配飘字。
3. **本命报告**：适配度、称号、诊断、推荐、功效标签、产品图、淘宝购买链接和领券入口；可保存战报海报或重新挑战。

角色切换和开始挑战已经合并进首页，不再有独立角色选择页。

## 文件结构

```
y2k-scalp-battle/
├── index.html                 # 页面结构 + 全部样式
├── app.js                     # ASSETS_CONFIG / 剧本 / 计分 / 交互 / 海报截图
├── assets/
│   ├── 01–20*.jpg             # 20 张角色/场景/结算图
│   ├── 21-result-home.jpg     # 居家宅最终结算页
│   └── product-front.png      # 产品透明底图
├── vendor/
│   ├── html2canvas.min.js     # 本地截图依赖
│   └── zpix.woff2             # 中文像素字体
├── preview/                   # 预览截图
└── README.md
```

## 21 个图片槽位

统一配置在 `app.js` 顶部 `ASSETS_CONFIG` 中。

| key | 编号 | 对应图片 | 文件 |
| --- | --- | --- | --- |
| 1 | 图1 | 元气大学生 · 初始立绘 | `assets/01-student-portrait.jpg` |
| 2 | 图13 | 都市职场人 · 初始立绘 | `assets/02-office-portrait.jpg` |
| 3 | 图20 | 慵懒居家宅 · 初始立绘 | `assets/03-home-portrait.jpg` |
| 4 | 图7 | 大学生第1关 · 赶早八 | `assets/04-student-hour08.jpg` |
| 5 | 图2 | 大学生第2关 · 梅雨天 | `assets/05-student-hour32.jpg` |
| 6 | 图4 | 大学生第3关 · 图书馆 | `assets/06-student-hour56.jpg` |
| 7 | 图3 | 大学生第4关 · 逛夜市 | `assets/07-student-hour80.jpg` |
| 8 | 图5 | 大学生第5关 · 校园乐队 | `assets/08-student-hour96.jpg` |
| 9 | 图12 | 职场人第1关 · 挤地铁 | `assets/09-office-hour08.jpg` |
| 10 | 图11 | 职场人第2关 · 公司Pre | `assets/10-office-hour32.jpg` |
| 11 | 图10 | 职场人第3关 · 吃火锅 | `assets/11-office-hour56.jpg` |
| 12 | 图9 | 职场人第4关 · 深夜加班 | `assets/12-office-hour80.jpg` |
| 13 | 图8 | 职场人第5关 · 乐队蹦迪 | `assets/13-office-hour96.jpg` |
| 14 | 图19 | 居家宅第1关 · 赖床起床 | `assets/14-home-hour08.jpg` |
| 15 | 图18 | 居家宅第2关 · 厨房做饭 | `assets/15-home-hour32.jpg` |
| 16 | 图17 | 居家宅第3关 · 宅家运动 | `assets/16-home-hour56.jpg` |
| 17 | 图16 | 居家宅第4关 · 沉浸玩游戏 | `assets/17-home-hour80.jpg` |
| 18 | 图15 | 居家宅第5关 · 沙发玩猫 | `assets/18-home-hour96.jpg` |
| 19 | 图1 | 大学生 · 最终结算页背景 | `assets/19-result-student.jpg` |
| 20 | 图14 | 职场人 · 最终结算页背景 | `assets/20-result-office.jpg` |
| 21 | 图1 | 居家宅 · 最终结算页背景 | `assets/21-result-home.jpg` |

### 替换图片

1. 把图片放入 `assets/`，建议尺寸 `768 × 1376`（9:16 竖图，JPG/PNG/WebP 均可）。
2. 修改 `app.js` 顶部对应槽位的 `src`，例如：

```js
21: { slot: '21', tag: '图1', label: '居家宅 · 最终结算页背景图', src: 'assets/21-result-home.jpg' },
```

3. 产品图使用独立的透明底 `assets/product-front.png`，不占用 21 个剧情图片槽位。

## 淘宝购买链接

链接统一放在 `app.js` 顶部：

```js
const SHOP_URL = 'https://e.tb.cn/h.jPV4QIeE5Kyx7NO?tk=fEHe6fTmJes';
```

结算页只显示“淘宝直接购买”和“领优惠券 / 点此直接购买”两个短文案，完整 URL 不会出现在界面上。两个入口都是可点击的新窗口超链接。

## 结算弹窗定位微调

`index.html` 的 `:root` 中：

```css
--result-left: 44%;
--result-top: 18%;
--result-width: 50%;
--result-height: 68%;
```

如果换成右侧空白窗口位置不同的人设结算图，只改这四个变量即可。短屏（≤700px / ≤600px 高）有单独适配。

## 计分

- 初始分：`50`
- 每关：A +10 / B +7 / C +9；第5关 A、C 均 +10
- 5 关总分范围：`85 ~ 100`
- 映射适配度：`75% ~ 99%`

| 总分 | 适配度 | 档位 |
| --- | --- | --- |
| 98–100 | 95–99% | 天选茶萃救星 |
| 93–97 | 88–94% | 96H高颅顶天花板 |
| 89–92 | 81–87% | 佛系蓬松潜力股 |
| 85–88 | 75–80% | 清爽茶香生活家 |

## 说明

- 页面宽 375 × 812 的桌面手机框预览；移动端自动铺满视口，短屏有收缩适配。
- 音效由 Web Audio 实时合成，无额外音频文件。
- “保存战报海报”使用本地 `html2canvas`，截图时会自动隐藏操作按钮并替换为品牌页脚。
- 产品全称为 **100年润发冷萃国风控油蓬松洗发露**。

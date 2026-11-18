'use strict';

/* ============================================================
   《头皮大作战96H：千禧蓬松物语》
   21 个图片槽位统一配置（把 src 换成你的图片地址即可）
   ------------------------------------------------------------
   槽位 A：首页角色立绘（1-3）
   槽位 B：大学生 5 关场景（4-8）
   槽位 C：职场人 5 关场景（9-13）
   槽位 D：居家宅 5 关场景（14-18）
   槽位 E：最终结算页背景（19-21）
   ============================================================ */
const ASSETS_CONFIG = {
  /* ---------- 槽位 A：角色初始立绘 ---------- */
  1:  { slot: '01', tag: '图1',  label: '元气大学生 · 初始立绘',           src: 'assets/01-student-portrait.jpg' },
  2:  { slot: '02', tag: '图13', label: '都市职场人 · 初始立绘',           src: 'assets/02-office-portrait.jpg' },
  3:  { slot: '03', tag: '图20', label: '慵懒居家宅 · 初始立绘',           src: 'assets/03-home-portrait.jpg' },

  /* ---------- 槽位 B：剧本1 · 大学生 5 关场景 ---------- */
  4:  { slot: '04', tag: '图7',  label: '大学生第1关 · 赶早八',             src: 'assets/04-student-hour08.jpg' },
  5:  { slot: '05', tag: '图2',  label: '大学生第2关 · 梅雨天',             src: 'assets/05-student-hour32.jpg' },
  6:  { slot: '06', tag: '图4',  label: '大学生第3关 · 图书馆',             src: 'assets/06-student-hour56.jpg' },
  7:  { slot: '07', tag: '图3',  label: '大学生第4关 · 逛夜市',             src: 'assets/07-student-hour80.jpg' },
  8:  { slot: '08', tag: '图5',  label: '大学生第5关 · 校园乐队',           src: 'assets/08-student-hour96.jpg' },

  /* ---------- 槽位 C：剧本2 · 职场人 5 关场景 ---------- */
  9:  { slot: '09', tag: '图12', label: '职场人第1关 · 挤地铁',             src: 'assets/09-office-hour08.jpg' },
  10: { slot: '10', tag: '图11', label: '职场人第2关 · 公司Pre',            src: 'assets/10-office-hour32.jpg' },
  11: { slot: '11', tag: '图10', label: '职场人第3关 · 吃火锅',             src: 'assets/11-office-hour56.jpg' },
  12: { slot: '12', tag: '图9',  label: '职场人第4关 · 深夜加班',           src: 'assets/12-office-hour80.jpg' },
  13: { slot: '13', tag: '图8',  label: '职场人第5关 · 乐队蹦迪',           src: 'assets/13-office-hour96.jpg' },

  /* ---------- 槽位 D：剧本3 · 居家宅 5 关场景 ---------- */
  14: { slot: '14', tag: '图19', label: '居家宅第1关 · 赖床起床',           src: 'assets/14-home-hour08.jpg' },
  15: { slot: '15', tag: '图18', label: '居家宅第2关 · 厨房做饭',           src: 'assets/15-home-hour32.jpg' },
  16: { slot: '16', tag: '图17', label: '居家宅第3关 · 宅家运动',           src: 'assets/16-home-hour56.jpg' },
  17: { slot: '17', tag: '图16', label: '居家宅第4关 · 沉浸玩游戏',         src: 'assets/17-home-hour80.jpg' },
  18: { slot: '18', tag: '图15', label: '居家宅第5关 · 沙发玩猫',           src: 'assets/18-home-hour96.jpg' },

  /* ---------- 槽位 E：最终结算页背景图 ---------- */
  19: { slot: '19', tag: '图1',  label: '大学生 · 最终结算页背景图',         src: 'assets/19-result-student.jpg' },
  20: { slot: '20', tag: '图14', label: '职场人 · 最终结算页背景图',         src: 'assets/20-result-office.jpg' },
  /* 居家宅结算图暂缺：保留编号占位卡；补图后把 src 改为对应路径即可。 */
  21: { slot: '21', tag: '图1',  label: '居家宅 · 最终结算页背景图',         src: 'assets/21-result-home.jpg' }
};

const PRODUCT_FULL_NAME = '100年润发冷萃国风控油蓬松洗发露';
const SHOP_URL = 'https://e.tb.cn/h.jPV4QIeE5Kyx7NO?tk=fEHe6fTmJes';

/* ============================================================
   角色配置
   ============================================================ */
const ROLES = {
  student: {
    key: 'student',
    index: '01',
    slot: 1,
    resultSlot: 19,
    name: '元气大学生',
    en: 'ENERGETIC STUDENT',
    file: 'FILE_01.PNG',
    theme: 'student',
    tags: ['早八特种兵', '夜市收割机', '乐队气氛组'],
    desc: '早八、夜市、社团演出，大学生活永远电量满格。只是96小时不洗头的极限挑战，随时可能让刘海变成条形码。',
    sceneSlots: [4, 5, 6, 7, 8]
  },
  office: {
    key: 'office',
    index: '02',
    slot: 2,
    resultSlot: 20,
    name: '都市职场人',
    en: 'OFFICE LADY',
    file: 'FILE_02.PNG',
    theme: 'office',
    tags: ['PPT战士', '地铁挤挤王', '高颅顶执念'],
    desc: '地铁、提案、火锅和加班，都市丽人的日程表精确到分钟。高颅顶是铠甲，冷萃茶是续命水。',
    sceneSlots: [9, 10, 11, 12, 13]
  },
  home: {
    key: 'home',
    index: '03',
    slot: 3,
    resultSlot: 21,
    name: '慵懒居家宅',
    en: 'COZY HOME BODY',
    file: 'FILE_03.PNG',
    theme: 'home',
    tags: ['赖床冠军', '厨房实验家', '猫毛收集器'],
    desc: '周末赖床、厨房翻车、沙发吸猫，宅家快乐无人打扰。唯一的原则是：能躺着绝不坐着。',
    sceneSlots: [14, 15, 16, 17, 18]
  }
};

const ROLE_ORDER = ['student', 'office', 'home'];

/* ============================================================
   三大剧本 · 5 关完整文案
   每关 A +10 / B +7 / C +9；第5关 A / C 均 +10
   ============================================================ */
const SCRIPTS = {
  student: [
    {
      slot: 4,
      hour: '08',
      title: '赶早八',
      meta: '校园事件',
      desc: '闹钟响了第三遍，距离早八高数课只剩10分钟！',
      choices: [
        { key: 'A', text: '抓起鸭舌帽一扣直接冲向教室', score: 10 },
        { key: 'B', text: '疯狂扑散粉救急刘海', score: 7 },
        { key: 'C', text: '提前用冷萃茶洗发露快速洗吹，清爽出门', score: 9 }
      ]
    },
    {
      slot: 5,
      hour: '32',
      title: '梅雨天',
      meta: '校园事件',
      desc: '南方的梅雨季说下就下，空气湿度99%，撑伞走在去教学楼的路上。',
      choices: [
        { key: 'A', text: '水汽全糊在头上，刘海瞬间变成“条形码”', score: 10 },
        { key: 'B', text: '随手用鲨鱼夹把湿哒哒的头发全盘起来', score: 7 },
        { key: 'C', text: '得益于冷萃茶控油配方，发根依然坚挺不塌', score: 9 }
      ]
    },
    {
      slot: 6,
      hour: '56',
      title: '图书馆',
      meta: '校园事件',
      desc: '期末周泡在图书馆自习一整天，对着高数题疯狂抓头。',
      choices: [
        { key: 'A', text: '越抓头皮越痒，头顶油光在台灯下反光', score: 10 },
        { key: 'B', text: '去卫生间用湿纸巾擦擦发际线凑合一下', score: 7 },
        { key: 'C', text: '头皮清爽零负担，发丝隐约散发冷萃茶香', score: 9 }
      ]
    },
    {
      slot: 7,
      hour: '80',
      title: '逛夜市',
      meta: '校园事件',
      desc: '考完试和室友冲向学校后门小吃街，站在铁板鱿鱼和螺蛳粉摊前大快朵颐。',
      choices: [
        { key: 'A', text: '站在下风口，头发吸满了重口味油烟味', score: 10 },
        { key: 'B', text: '吃完狂喷花果香香水，结果混合成奇怪味道', score: 7 },
        { key: 'C', text: '回宿舍用冷萃茶洗发露一冲，瞬间去油去异味', score: 9 }
      ]
    },
    {
      slot: 8,
      hour: '96',
      title: '校园乐队',
      meta: '校园事件',
      desc: '周末校园草坪音乐节，暗恋的学长在台上弹吉他，你在台下挥舞荧光棒。',
      choices: [
        { key: 'A', text: '不敢挤到前排，生怕灯光照出三天没洗的油头', score: 10 },
        { key: 'B', text: '狂喷干发喷雾，结果发丝泛白结块超尴尬', score: 7 },
        { key: 'C', text: '96小时依然高颅顶蓬松，晚风吹过发丝超心动', score: 10 }
      ]
    }
  ],

  office: [
    {
      slot: 9,
      hour: '08',
      title: '挤地铁',
      meta: '通勤战场',
      desc: '早高峰地铁1号线人挤人，车厢空调不足闷热无比。',
      choices: [
        { key: 'A', text: '戴着耳机硬扛，出站时头发全贴在头皮上', score: 10 },
        { key: 'B', text: '到工位赶紧用吸油纸按压额前碎发', score: 7 },
        { key: 'C', text: '出门前冷萃茶控油洗护，挤完地铁依然干爽', score: 9 }
      ]
    },
    {
      slot: 10,
      hour: '32',
      title: '公司Pre',
      meta: '职场战场',
      desc: '连续两小时向大客户做方案 Pre，聚光灯和紧张感让人头皮发热。',
      choices: [
        { key: 'A', text: '一边讲PPT一边焦虑挠头，形象大打折扣', score: 10 },
        { key: 'B', text: '趁茶歇偷偷去洗手间用梳子猛梳企图弄蓬', score: 7 },
        { key: 'C', text: '发根立挺自带高颅顶气场，轻松拿下客户', score: 9 }
      ]
    },
    {
      slot: 11,
      hour: '56',
      title: '吃火锅',
      meta: '职场战场',
      desc: '下班部门团建吃正宗川渝九宫格牛油火锅，热气腾腾。',
      choices: [
        { key: 'A', text: '毫无防备大吃一顿，头发吸饱牛油火锅味', score: 10 },
        { key: 'B', text: '全程戴着一次性浴帽吃火锅，社死但有效', score: 7 },
        { key: 'C', text: '回家用冷萃茶洗发露洗头，茶多酚秒去油腻异味', score: 9 }
      ]
    },
    {
      slot: 12,
      hour: '80',
      title: '深夜加班',
      meta: '职场战场',
      desc: '临时接到紧急修改需求，加班到深夜十一点才打车回家。',
      choices: [
        { key: 'A', text: '累到灵魂出窍，倒头就睡明天再说', score: 10 },
        { key: 'B', text: '只洗个刘海吹干，后脑勺继续封印', score: 7 },
        { key: 'C', text: '5分钟冷萃茶快速洗吹，清凉茶香瞬间解压', score: 9 }
      ]
    },
    {
      slot: 13,
      hour: '96',
      title: '乐队蹦迪',
      meta: '夜生活',
      desc: '周五下班直奔 Livehouse 看摇滚乐队演出，全场跟着节奏一起跳。',
      choices: [
        { key: 'A', text: '跳到一半刘海汗湿成一绺一绺，不敢甩头', score: 10 },
        { key: 'B', text: '每隔十分钟就掏出小镜子整理塌掉的头顶', score: 7 },
        { key: 'C', text: '96小时长效蓬松在线，跟着鼓点尽情甩头蹦迪', score: 10 }
      ]
    }
  ],

  home: [
    {
      slot: 14,
      hour: '08',
      title: '赖床起床',
      meta: '居家日常',
      desc: '周末没有闹钟的一天，在被窝里刷手机一直躺到中午12点。',
      choices: [
        { key: 'A', text: '头发炸成鸡窝且头顶扁塌，继续翻身躺平', score: 10 },
        { key: 'B', text: '随手抓个鲨鱼夹一夹，下楼拿个外卖', score: 7 },
        { key: 'C', text: '起来洗个晨间冷萃茶澡，开启清爽周末', score: 9 }
      ]
    },
    {
      slot: 15,
      hour: '32',
      title: '厨房做饭',
      meta: '居家日常',
      desc: '突发奇想在厨房复刻网红爆炒美食，结果油烟机没开最大档。',
      choices: [
        { key: 'A', text: '炒完菜刘海沾满油烟水汽，油腻感拉满', score: 10 },
        { key: 'B', text: '拿厨房纸巾擦了擦额头上的油汗', score: 7 },
        { key: 'C', text: '做完大餐立刻冷萃茶洗护，发丝秒回清新', score: 9 }
      ]
    },
    {
      slot: 16,
      hour: '56',
      title: '宅家运动',
      meta: '居家日常',
      desc: '晚上心血来潮跟着健身视频跳了30分钟高强度燃脂操。',
      choices: [
        { key: 'A', text: '爆汗后觉得太累，吹干汗水直接躺沙发', score: 10 },
        { key: 'B', text: '只用温水随便冲了一下头，没用洗发水', score: 7 },
        { key: 'C', text: '冷萃茶净澈头皮油脂，运动完零黏腻负担', score: 9 }
      ]
    },
    {
      slot: 17,
      hour: '80',
      title: '沉浸玩游戏',
      meta: '居家日常',
      desc: '戴着头戴式耳机在电脑前连打4小时排位赛，全神贯注。',
      choices: [
        { key: 'A', text: '摘下耳机瞬间，头顶被压出深深的扁塌印子', score: 10 },
        { key: 'B', text: '用手随便抓两下头发继续开下一局', score: 7 },
        { key: 'C', text: '头皮干爽透气，摘下耳机拨一拨依然蓬松', score: 9 }
      ]
    },
    {
      slot: 18,
      hour: '96',
      title: '沙发玩猫',
      meta: '居家日常',
      desc: '窝在客厅沙发上边追剧边撸猫，主子热情地往你头上蹭。',
      choices: [
        { key: 'A', text: '猫毛和薯片碎屑全粘在出油的头发上了', score: 10 },
        { key: 'B', text: '顺手拿粘毛器在自己头发上滚了两下', score: 7 },
        { key: 'C', text: '发丝清爽顺滑不粘毛，实现快乐吸猫自由', score: 10 }
      ]
    }
  ]
};

/* ============================================================
   4 大结算档位（按总分判定）
   ============================================================ */
const RESULT_TIERS = [
  {
    id: 'tier-1',
    min: 98,
    max: 100,
    persona: '极致油头 / 高频用脑作死派',
    badge: '★ 天选茶萃救星 ★',
    diagnosis: '你的头皮正在经历96小时极限拉扯！熬夜、暴汗、重油烟全占齐了，普通洗发水根本扛不住你的造作节奏。',
    recommend: '100年润发冷萃国风控油蓬松洗发露简直为你量身定制！高浓冷萃茶多酚深层净澈油脂，72-96小时长效控油蓬松，让你随时告别条形码刘海。',
    tags: ['高浓冷萃茶多酚', '72-96H长效控油', '深层净澈', '发根蓬松']
  },
  {
    id: 'tier-2',
    min: 93,
    max: 97,
    persona: '精致护发 / 高颅顶追求者',
    badge: '★ 96H高颅顶天花板 ★',
    diagnosis: '你对发丝蓬松度有着极高的审美要求，绝不允许扁塌毁掉精心搭配的造型，头皮微生态保持得相当不错！',
    recommend: '100年润发冷萃国风控油蓬松洗发露的微米级丰盈泡沫与你的护发理念100%同频！洗完发根自带空气感支撑，清冷茶香更是氛围感加分神器。',
    tags: ['微米级丰盈泡沫', '空气感高颅顶', '清冷茶香', '氛围感加分']
  },
  {
    id: 'tier-3',
    min: 89,
    max: 92,
    persona: '随性佛系 / 间歇性懒人派',
    badge: '★ 佛系蓬松潜力股 ★',
    diagnosis: '平时能躺平绝不折腾，偶尔靠帽子和散粉续命，但关键时刻还是希望头发能体面在线，属于典型的‘间歇性精致’。',
    recommend: '懒人福音就是一瓶搞定长效续航！冷萃茶温和控油配方让你就算多赖床一天，发顶依然保持自然干爽不油腻。',
    tags: ['长效续航', '温和控油', '懒人友好', '自然干爽']
  },
  {
    id: 'tier-4',
    min: 85,
    max: 88,
    persona: '稳健养生 / 日常清爽派',
    badge: '★ 清爽茶香生活家 ★',
    diagnosis: '你的生活作息和洗护习惯非常稳健，很少让头皮陷入极度油腻的危机，注重温和清洁与自然舒适的洗感。',
    recommend: '低温冷萃工艺保留茶叶天然活性，0硅油温和不刺激头皮，完美契合你追求自然、清爽、无负担的日常洗护哲学。',
    tags: ['低温冷萃', '0硅油', '温和清洁', '清爽无负担']
  }
];

/* 总分 85~100 → 适配度 75%~99%，严格覆盖四个档位 */
const PERCENT_BY_SCORE = {
  85: 75, 86: 77, 87: 78, 88: 80,
  89: 81, 90: 83, 91: 85, 92: 87,
  93: 88, 94: 90, 95: 91, 96: 93, 97: 94,
  98: 95, 99: 97, 100: 99
};

/* ============================================================
   基础工具
   ============================================================ */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const STORAGE_KEY = 'scalp96_sound';

function readSoundSetting() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch (error) {
    return true;
  }
}

function writeSoundSetting(enabled) {
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
  } catch (error) {
    /* localStorage 不可用时静默降级 */
  }
}

/* ============================================================
   8-bit 音效（Web Audio，无外部音频资源）
   ============================================================ */
const SoundFX = {
  ctx: null,
  enabled: true,

  ensure() {
    if (!this.enabled) return null;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      if (!this.ctx) this.ctx = new Ctx();
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return this.ctx;
    } catch (error) {
      return null;
    }
  },

  tone(frequency, duration = 0.06, options = {}) {
    if (!this.enabled) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const { type = 'square', volume = 0.035, delay = 0 } = options;
    try {
      const startAt = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, startAt);
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startAt);
      osc.stop(startAt + duration + 0.025);
    } catch (error) {
      /* 忽略音频异常 */
    }
  },

  click() {
    this.tone(880, 0.035, { volume: 0.026 });
    this.tone(1320, 0.045, { volume: 0.02, delay: 0.035 });
  },

  select() {
    this.tone(523, 0.045, { volume: 0.032 });
    this.tone(784, 0.06, { volume: 0.028, delay: 0.055 });
    this.tone(1047, 0.075, { volume: 0.022, delay: 0.115 });
  },

  start() {
    [523, 659, 784, 1047].forEach((frequency, index) => {
      this.tone(frequency, 0.07, { volume: 0.03, delay: index * 0.065 });
    });
  },

  success() {
    [523, 659, 784, 1047, 1319, 1568].forEach((frequency, index) => {
      this.tone(frequency, 0.1, { volume: 0.03, delay: index * 0.08 });
    });
    this.tone(2093, 0.32, { volume: 0.018, delay: 0.5, type: 'triangle' });
  },

  error() {
    this.tone(220, 0.12, { volume: 0.026, type: 'sawtooth' });
    this.tone(165, 0.16, { volume: 0.02, delay: 0.1, type: 'sawtooth' });
  }
};

/* ============================================================
   页面状态
   ============================================================ */
const state = {
  page: 'cover',
  roleIndex: 0,
  roleKey: 'student',
  levelIndex: 0,
  matchScore: 50,
  answers: [],
  percent: 0,
  tier: null,
  locked: false,
  runId: 0,
  sound: readSoundSetting(),
  capturing: false,
  imageToken: 0
};

const dom = {};

function cacheDom() {
  dom.app = $('#app');
  dom.phone = $('#phone');
  dom.pages = {
    cover: $('#page-cover'),
    game: $('#page-game'),
    result: $('#page-result')
  };
  dom.startBtn = $('#startBtn');
  dom.startRoleName = $('#startRoleName');
  dom.prevRole = $('#prevRole');
  dom.nextRole = $('#nextRole');
  dom.roleStage = $('#roleStage');
  dom.portraitFrame = $('#portraitFrame');
  dom.charImg = $('#charImg');
  dom.charPlaceholder = $('#charPlaceholder');
  dom.roleFile = $('#roleFile');
  dom.roleSlotTag = $('#roleSlotTag');
  dom.roleIndex = $('#roleIndex');
  dom.roleEn = $('#roleEn');
  dom.roleName = $('#roleName');
  dom.roleDesc = $('#roleDesc');
  dom.roleTags = $('#roleTags');
  dom.roleDots = $('#roleDots');
  dom.roleCounter = $('#roleCounter');

  dom.sceneImg = $('#sceneImg');
  dom.scenePlaceholder = $('#scenePlaceholder');
  dom.hudFileName = $('#hudFileName');
  dom.hudStep = $('#hudStep');
  dom.hudSegments = $('#hudSegments');
  dom.hudHour = $('#hudHour');
  dom.hudLevel = $('#hudLevel');
  dom.storyFileName = $('#storyFileName');
  dom.storyMeta = $('#storyMeta');
  dom.storyText = $('#storyText');
  dom.choiceList = $('#choiceList');
  dom.scoreLayer = $('#scoreLayer');

  dom.resultImg = $('#resultImg');
  dom.resultPlaceholder = $('#resultPlaceholder');
  dom.resultRole = $('#resultRole');
  dom.resultRaw = $('#resultRaw');
  dom.resultPercent = $('#resultPercent');
  dom.resultBar = $('#resultBar');
  dom.resultPersona = $('#resultPersona');
  dom.resultBadge = $('#resultBadge');
  dom.resultDiagnosis = $('#resultDiagnosis');
  dom.resultRecommend = $('#resultRecommend');
  dom.resultTags = $('#resultTags');
  dom.resultMetrics = $('#resultMetrics');
  dom.resultProductName = $('#resultProductName');
  dom.buyLinks = $$('.result-buy-link, .coupon-link');
  dom.resultConfetti = $('#resultConfetti');
  dom.savePosterBtn = $('#savePosterBtn');
  dom.restartBtn = $('#restartBtn');
  dom.toast = $('#toast');
}

/* ============================================================
   页面 & 弹窗工具
   ============================================================ */
function showPage(pageName) {
  const target = dom.pages[pageName];
  if (!target) return;
  state.page = pageName;
  Object.entries(dom.pages).forEach(([name, page]) => {
    const active = name === pageName;
    page.classList.toggle('active', active);
    page.setAttribute('aria-hidden', String(!active));
  });
}

let toastTimer = null;
function toast(message, duration = 1800) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), duration);
}

function updateSoundUI() {
  $$('.sound-toggle').forEach((button) => {
    button.setAttribute('aria-pressed', String(state.sound));
    button.classList.toggle('muted', !state.sound);
    const label = button.querySelector('.sound-label');
    if (label) label.textContent = state.sound ? 'SFX ON' : 'SFX OFF';
    button.setAttribute('aria-label', state.sound ? '关闭音效' : '打开音效');
  });
}

function toggleSound() {
  state.sound = !state.sound;
  SoundFX.enabled = state.sound;
  writeSoundSetting(state.sound);
  updateSoundUI();
  if (state.sound) {
    SoundFX.ensure();
    SoundFX.click();
  }
}

/* ============================================================
   图片加载 & 占位卡
   ============================================================ */
function placeholderMarkup(slotNumber) {
  const asset = ASSETS_CONFIG[slotNumber] || {
    slot: String(slotNumber).padStart(2, '0'),
    tag: `图${slotNumber}`,
    label: '图片槽位待配置'
  };
  return `
    <div class="ph-inner">
      <span class="ph-spark s1" aria-hidden="true">✦</span>
      <span class="ph-spark s2" aria-hidden="true">✦</span>
      <span class="ph-spark s3" aria-hidden="true">✦</span>
      <span class="ph-slot">${asset.slot}</span>
      <span class="ph-tag">${asset.tag}</span>
      <p class="ph-label">${asset.label}</p>
      <p class="ph-note">IMAGE SLOT · 待替换</p>
    </div>
  `;
}

function resultPlaceholderMarkup(role) {
  const asset = ASSETS_CONFIG[role.resultSlot] || {};
  return `
    <div class="placeholder-collage" aria-hidden="true"></div>
    <div class="placeholder-window">
      <div class="placeholder-window-title"><span>IMAGE_SLOT_${asset.slot || '--'}.BMP</span><span>MISSING</span></div>
      <div class="placeholder-slot">${asset.slot || '--'}<small>${asset.tag || '图n'}</small></div>
      <h4>${role.name} · 结算背景加载失败</h4>
      <p>${asset.label || '最终结算页背景图'}<br>请检查 ASSETS_CONFIG[${role.resultSlot}].src 路径。</p>
      <div class="placeholder-pixels" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    </div>
  `;
}

function setAssetImage(img, placeholder, slotNumber, altText, customPlaceholderMarkup) {
  const asset = ASSETS_CONFIG[slotNumber];
  const token = String(++state.imageToken);
  placeholder.innerHTML = customPlaceholderMarkup || placeholderMarkup(slotNumber);
  placeholder.classList.add('show');
  img.classList.remove('is-loaded');
  img.dataset.assetToken = token;
  img.alt = altText || (asset ? asset.label : '图片占位');

  if (!asset || !asset.src) {
    img.removeAttribute('src');
    return;
  }

  img.onload = () => {
    if (img.dataset.assetToken !== token) return;
    img.classList.add('is-loaded');
    placeholder.classList.remove('show');
  };
  img.onerror = () => {
    if (img.dataset.assetToken !== token) return;
    img.classList.remove('is-loaded');
    placeholder.classList.add('show');
  };
  img.src = asset.src;
}

function preloadSlots(slotNumbers) {
  slotNumbers.forEach((slotNumber) => {
    const asset = ASSETS_CONFIG[slotNumber];
    if (!asset || !asset.src) return;
    const image = new Image();
    image.decoding = 'async';
    image.src = asset.src;
  });
}

/* ============================================================
   角色选择
   ============================================================ */
function renderRole(index, animate = true) {
  const nextIndex = ((index % ROLE_ORDER.length) + ROLE_ORDER.length) % ROLE_ORDER.length;
  state.roleIndex = nextIndex;
  const role = ROLES[ROLE_ORDER[nextIndex]];
  state.roleKey = role.key;

  dom.roleStage.dataset.role = role.theme;
  dom.roleStage.setAttribute('aria-label', `${role.name}角色卡，第${nextIndex + 1}个，共3个`);
  dom.roleFile.textContent = role.file;
  dom.roleSlotTag.textContent = `SLOT ${String(role.slot).padStart(2, '0')}`;
  dom.roleIndex.textContent = role.index;
  dom.roleEn.textContent = role.en;
  dom.roleName.textContent = role.name;
  dom.roleDesc.textContent = role.desc;
  dom.roleCounter.textContent = `${role.index} / 03`;

  dom.roleTags.innerHTML = '';
  role.tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.className = 'tag';
    chip.textContent = `✦ ${tag}`;
    dom.roleTags.appendChild(chip);
  });

  dom.roleDots.innerHTML = '';
  ROLE_ORDER.forEach((key, dotIndex) => {
    const dot = document.createElement('span');
    dot.className = `role-dot${dotIndex === nextIndex ? ' active' : ''}`;
    dom.roleDots.appendChild(dot);
  });

  if (dom.startRoleName) dom.startRoleName.textContent = role.name;

  setAssetImage(dom.charImg, dom.charPlaceholder, role.slot, `${role.name}初始立绘`);
  preloadSlots([role.slot]);

  if (animate) {
    dom.portraitFrame.classList.remove('swap-in');
    void dom.portraitFrame.offsetWidth;
    dom.portraitFrame.classList.add('swap-in');
  }
}

function cycleRole(direction) {
  if (state.page !== 'cover') return;
  SoundFX.select();
  renderRole(state.roleIndex + direction, true);
}

function preloadRoleScript(role) {
  preloadSlots([role.slot, ...role.sceneSlots, role.resultSlot]);
}

/* ============================================================
   游戏流程
   ============================================================ */
function beginStory() {
  const role = ROLES[state.roleKey];
  if (!role) return;
  SoundFX.start();
  state.runId += 1;
  state.matchScore = 50;
  state.answers = [];
  state.levelIndex = 0;
  state.percent = 0;
  state.tier = null;
  state.locked = false;
  preloadRoleScript(role);
  showPage('game');
  renderLevel(0);
}

function updateHud(levelIndex, scene) {
  dom.hudFileName.textContent = `MISSION_0${levelIndex + 1}.EXE · 96H LIVE LOG`;
  dom.hudStep.textContent = `SCENE 0${levelIndex + 1}/05`;
  dom.hudHour.textContent = scene.hour;
  dom.hudLevel.textContent = scene.title;
  dom.hudSegments.setAttribute('aria-valuenow', String(levelIndex + 1));
  dom.hudSegments.innerHTML = '';
  for (let index = 0; index < 5; index += 1) {
    const segment = document.createElement('span');
    segment.className = 'progress-segment';
    if (index < levelIndex) segment.classList.add('done');
    if (index === levelIndex) segment.classList.add('current');
    dom.hudSegments.appendChild(segment);
  }
  dom.storyFileName.textContent = `LOG_${scene.hour}.TXT · EVENT RECORD`;
  dom.storyMeta.textContent = `HOUR ${scene.hour} · ${scene.meta}`;
}

function renderLevel(index) {
  const role = ROLES[state.roleKey];
  const scene = SCRIPTS[state.roleKey] && SCRIPTS[state.roleKey][index];
  if (!role || !scene) return;

  state.levelIndex = index;
  state.locked = false;
  dom.scoreLayer.innerHTML = '';

  setAssetImage(dom.sceneImg, dom.scenePlaceholder, scene.slot, `${role.name} · ${scene.title}`);
  updateHud(index, scene);

  dom.storyText.textContent = scene.desc;
  dom.storyText.setAttribute('aria-live', 'polite');
  dom.choiceList.innerHTML = '';

  scene.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice';
    button.dataset.key = choice.key;
    button.setAttribute('aria-label', `选项${choice.key}：${choice.text}`);

    const key = document.createElement('span');
    key.className = 'choice-key';
    key.textContent = choice.key;

    const text = document.createElement('span');
    text.className = 'choice-text';
    text.textContent = choice.text;

    const arrow = document.createElement('span');
    arrow.className = 'choice-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '▶';

    button.append(key, text, arrow);
    button.addEventListener('click', (event) => handleChoice(scene, choice, button, event));
    dom.choiceList.appendChild(button);
  });
}

function spawnScorePopup(delta, event) {
  const appRect = dom.app.getBoundingClientRect();
  let x = 50;
  let y = 58;
  if (event && Number.isFinite(event.clientX) && Number.isFinite(event.clientY) && appRect.width > 0) {
    x = ((event.clientX - appRect.left) / appRect.width) * 100;
    y = ((event.clientY - appRect.top) / appRect.height) * 100;
  }
  x = clamp(x, 14, 86);
  y = clamp(y - 4, 30, 78);

  const popup = document.createElement('div');
  popup.className = 'score-pop';
  popup.style.left = `${x}%`;
  popup.style.top = `${y}%`;
  popup.innerHTML = '<span aria-hidden="true">✦</span><span>茶萃适配 +' + delta + '</span>';
  dom.scoreLayer.appendChild(popup);
  setTimeout(() => popup.remove(), 1100);
}

function handleChoice(scene, choice, button, event) {
  if (state.locked || state.page !== 'game') return;
  state.locked = true;
  const runId = state.runId;

  SoundFX.select();
  if (navigator.vibrate) {
    try { navigator.vibrate(12); } catch (error) { /* ignore */ }
  }

  $$('.choice', dom.choiceList).forEach((item) => {
    item.disabled = true;
    if (item === button) {
      item.classList.add('picked');
    } else {
      item.classList.add('dim');
    }
  });

  state.answers.push({
    level: state.levelIndex + 1,
    key: choice.key,
    score: choice.score
  });
  state.matchScore = Math.min(100, state.matchScore + choice.score);
  spawnScorePopup(choice.score, event);

  setTimeout(() => {
    if (runId !== state.runId) return;
    if (state.levelIndex >= 4) {
      finishGame();
    } else {
      renderLevel(state.levelIndex + 1);
    }
  }, 800);
}

/* ============================================================
   结算
   ============================================================ */
function scoreToPercent(score) {
  if (PERCENT_BY_SCORE[score] != null) return PERCENT_BY_SCORE[score];
  const clamped = clamp(Math.round(score), 85, 100);
  return Math.min(99, Math.max(75, Math.round(75 + ((clamped - 85) * 24) / 15)));
}

function getTierByScore(score) {
  return RESULT_TIERS.find((tier) => score >= tier.min && score <= tier.max) || RESULT_TIERS[RESULT_TIERS.length - 1];
}

function finishGame() {
  const percent = scoreToPercent(state.matchScore);
  const tier = getTierByScore(state.matchScore);
  state.percent = percent;
  state.tier = tier;
  renderResult();
  showPage('result');
  SoundFX.success();
}

function renderResultMetrics(percent) {
  const metrics = [
    { name: '控油力', value: Math.min(99, percent) },
    { name: '蓬松力', value: Math.min(99, percent + 1) },
    { name: '温和度', value: Math.max(75, percent - 6) }
  ];
  dom.resultMetrics.innerHTML = '<div class="result-metrics-title">96H SCALP METER</div>';
  metrics.forEach((metric) => {
    const row = document.createElement('div');
    row.className = 'result-metric-row';

    const name = document.createElement('span');
    name.className = 'metric-name';
    name.textContent = metric.name;

    const track = document.createElement('span');
    track.className = 'metric-track';
    const fill = document.createElement('i');
    fill.style.width = `${metric.value}%`;
    track.appendChild(fill);

    const value = document.createElement('span');
    value.className = 'metric-value';
    value.textContent = String(metric.value);

    row.append(name, track, value);
    dom.resultMetrics.appendChild(row);
  });
}

function renderResult() {
  const role = ROLES[state.roleKey];
  const tier = state.tier || getTierByScore(state.matchScore);
  const percent = state.percent || scoreToPercent(state.matchScore);

  dom.resultRole.textContent = `${role.name} / ${role.en}`;
  dom.resultRaw.textContent = `SCORE ${state.matchScore}/100`;
  dom.resultPersona.textContent = tier.persona;
  dom.resultBadge.textContent = tier.badge;
  dom.resultDiagnosis.textContent = tier.diagnosis;
  dom.resultRecommend.textContent = tier.recommend;
  dom.resultTags.innerHTML = '';
  tier.tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.textContent = tag;
    dom.resultTags.appendChild(chip);
  });

  renderResultMetrics(percent);

  dom.resultPercent.textContent = '0';
  dom.resultBar.style.width = '0%';
  setAssetImage(dom.resultImg, dom.resultPlaceholder, role.resultSlot, `${role.name}最终结算页背景`, resultPlaceholderMarkup(role));
  preloadSlots([role.resultSlot]);

  launchConfetti();
  requestAnimationFrame(() => {
    setTimeout(() => animateResultNumbers(percent), 100);
  });
}

let resultRaf = null;
function animateResultNumbers(target) {
  cancelAnimationFrame(resultRaf);
  const start = performance.now();
  const duration = 760;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    dom.resultPercent.textContent = String(target);
    dom.resultBar.style.width = `${target}%`;
    return;
  }

  const tick = (now) => {
    const progress = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    dom.resultPercent.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      resultRaf = requestAnimationFrame(tick);
    } else {
      dom.resultPercent.textContent = String(target);
    }
  };
  dom.resultBar.style.width = `${target}%`;
  resultRaf = requestAnimationFrame(tick);
}

function settleResultNumbers() {
  cancelAnimationFrame(resultRaf);
  if (state.percent) {
    dom.resultPercent.textContent = String(state.percent);
    dom.resultBar.style.width = `${state.percent}%`;
  }
}

function launchConfetti() {
  const icons = ['i-heart', 'i-star', 'i-sparkle', 'i-flower'];
  dom.resultConfetti.innerHTML = '';
  for (let index = 0; index < 18; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.round(Math.random() * 96)}%`;
    piece.style.width = `${6 + Math.round(Math.random() * 9)}px`;
    piece.style.height = `${6 + Math.round(Math.random() * 9)}px`;
    piece.style.setProperty('--dur', `${3.2 + Math.random() * 2.8}s`);
    piece.style.setProperty('--delay', `${Math.random() * 1.4}s`);
    piece.innerHTML = `<svg class="px-icon" aria-hidden="true"><use href="#${icons[index % icons.length]}"></use></svg>`;
    dom.resultConfetti.appendChild(piece);
  }
}

/* ============================================================
   保存战报海报（html2canvas）
   ============================================================ */
async function savePoster() {
  if (state.capturing) return;
  if (typeof window.html2canvas !== 'function') {
    toast('截图组件未加载，请刷新页面后重试');
    SoundFX.error();
    return;
  }

  state.capturing = true;
  dom.savePosterBtn.disabled = true;
  settleResultNumbers();
  document.body.classList.add('is-capturing');

  try {
    // 等待结算图完成加载；若缺失则保留编号占位卡。
    if (dom.resultImg.getAttribute('src') && !dom.resultImg.complete) {
      await Promise.race([
        new Promise((resolve) => {
          dom.resultImg.addEventListener('load', resolve, { once: true });
          dom.resultImg.addEventListener('error', resolve, { once: true });
        }),
        wait(1600)
      ]);
    }
    await wait(120);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const target = dom.pages.result;
    const canvas = await window.html2canvas(target, {
      backgroundColor: '#F3D3EA',
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
      width: target.clientWidth,
      height: target.clientHeight,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDocument) => {
        const phone = clonedDocument.getElementById('phone');
        if (phone) phone.style.transform = 'none';
      }
    });

    const role = ROLES[state.roleKey];
    const fileName = `头皮大作战96H_${role.name}_${state.percent}分适配.png`;
    await downloadCanvas(canvas, fileName);
    toast('战报海报已生成，正在下载 ✦');
    SoundFX.success();
  } catch (error) {
    console.error('[海报生成失败]', error);
    toast('海报生成失败，请稍后重试');
    SoundFX.error();
  } finally {
    document.body.classList.remove('is-capturing');
    dom.savePosterBtn.disabled = false;
    state.capturing = false;
  }
}

function downloadCanvas(canvas, fileName) {
  return new Promise((resolve, reject) => {
    try {
      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Canvas blob is empty'));
            return;
          }
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          link.rel = 'noopener';
          document.body.appendChild(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(url), 4000);
          resolve();
        }, 'image/png');
        return;
      }
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

/* ============================================================
   事件绑定 & 初始化
   ============================================================ */
function bindEvents() {
  dom.startBtn.addEventListener('click', () => {
    SoundFX.ensure();
    beginStory();
  });

  dom.prevRole.addEventListener('click', () => cycleRole(-1));
  dom.nextRole.addEventListener('click', () => cycleRole(1));

  dom.savePosterBtn.addEventListener('click', savePoster);

  dom.restartBtn.addEventListener('click', () => {
    SoundFX.click();
    state.runId += 1;
    state.matchScore = 50;
    state.answers = [];
    state.levelIndex = 0;
    state.percent = 0;
    state.tier = null;
    state.locked = false;
    showPage('cover');
    renderRole(state.roleIndex, false);
    toast('挑战已重置，可直接切换人设再开始');
  });

  $$('.sound-toggle').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleSound();
    });
  });

  // 触屏左右滑动切换角色
  let touchStartX = 0;
  let touchStartY = 0;
  dom.roleStage.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });
  dom.roleStage.addEventListener('touchend', (event) => {
    if (event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      cycleRole(dx > 0 ? -1 : 1);
    }
  }, { passive: true });

  // 桌面键盘快捷操作
  document.addEventListener('keydown', (event) => {
    if (state.page === 'cover') {
      if (event.key === 'ArrowLeft') cycleRole(-1);
      if (event.key === 'ArrowRight') cycleRole(1);
      if (event.key === 'Enter') dom.startBtn.click();
    } else if (state.page === 'game' && !state.locked) {
      const key = event.key.toUpperCase();
      if (['A', 'B', 'C'].includes(key)) {
        const button = dom.choiceList.querySelector(`.choice[data-key="${key}"]`);
        if (button) button.click();
      } else if (['1', '2', '3'].includes(key)) {
        const button = dom.choiceList.querySelectorAll('.choice')[Number(key) - 1];
        if (button) button.click();
      }
    }
  });

  window.addEventListener('resize', fitPhone);
  window.addEventListener('orientationchange', () => setTimeout(fitPhone, 160));

  // 首次手势解锁 Web Audio
  document.addEventListener('pointerdown', () => SoundFX.ensure(), { once: true });
}

function fitPhone() {
  if (!dom.phone) return;
  if (window.innerWidth <= 600) {
    dom.phone.style.transform = '';
    return;
  }
  const scale = Math.min(1, (window.innerHeight - 46) / 812, (window.innerWidth - 46) / 375);
  dom.phone.style.transform = `scale(${scale.toFixed(4)})`;
}

function init() {
  cacheDom();
  if (dom.resultProductName) dom.resultProductName.textContent = PRODUCT_FULL_NAME;
  dom.buyLinks.forEach((link) => { link.href = SHOP_URL; });
  SoundFX.enabled = state.sound;
  updateSoundUI();
  bindEvents();
  fitPhone();

  // 首屏先渲染默认角色，图片在后台预加载
  renderRole(0, false);
  preloadSlots([1, 2, 3, 4, 9, 14]);
  showPage('cover');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* 调试 / 自动化测试入口（不影响正常游戏） */
window.__SCALP96__ = {
  state,
  assets: ASSETS_CONFIG,
  roles: ROLES,
  scripts: SCRIPTS,
  tiers: RESULT_TIERS,
  showPage,
  renderRole,
  renderLevel,
  beginStory,
  finishGame,
  scoreToPercent,
  setScore(score) {
    state.matchScore = clamp(Number(score) || 50, 0, 100);
    state.percent = scoreToPercent(state.matchScore);
    state.tier = getTierByScore(state.matchScore);
    state.roleKey = state.roleKey || 'student';
    renderResult();
    showPage('result');
  }
};

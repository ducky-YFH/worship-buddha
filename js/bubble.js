const textArr = [
  "佛教",
  "佛陀",
  "四圣谛",
  "八正道",
  "悟道",
  "禅定",
  "悉达多",
  "涅槃",
  "轮回",
  "因果律",
  "般若心经",
  "佛教寺庙",
  "三宝",
  "僧侣",
  "出家",
  "菩提树",
  "法师",
  "尊者",
  "坐禅",
  "经蔵",
  "经典",
  "佛像",
  "忍辱",
  "戒律",
  "清净",
  "智慧",
  "慈悲",
  "善行",
  "业力",
  "修行",
  "心灵净化",
  "涅槃寂静",
  "观想",
  "修禅",
  "世俗真理",
  "禅宗",
  "华严宗",
  "净土宗",
  "南传佛教",
  "大乘佛教",
  "小乘佛教",
  "密宗",
  "禅禅宗",
  "禅师",
  "佛教故事",
  "轮回转世",
  "佛教仪式",
  "佛法",
  "六度",
  "信仰",
  "善知识",
  "忏悔"
];

function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = Math.random() * (window.innerWidth - 50) + 'px';
  // 从这个数组里面随机取一个字段

  bubble.textContent = textArr[Math.floor(Math.random() * textArr.length)];
  document.body.appendChild(bubble);
  
  bubble.addEventListener('click', function() {
      document.body.removeChild(bubble);
  });

  setTimeout(() => {
      document.body.removeChild(bubble);
  }, 5000); // 设置5秒后气泡消失
}

function generateBubbles() {
  setInterval(createBubble, 1000); // 每隔1秒生成一个气泡
}

generateBubbles();
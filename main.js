const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';

function createMap(sourceStr, targetStr) {
  const map = {};
  const targetChars = Array.from(targetStr);
  for (let i = 0; i < sourceStr.length; i++) {
    const targetChar = targetChars[i];
    if (targetChar) {
      map[sourceStr[i]] = targetChar;
    }
  }
  return map;
}

const CONVERTERS = [
  {
    id: 'script',
    name: 'Script (スクリプト体)',
    map: {
      ...createMap(UPPER, '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'),
      ...createMap(LOWER, '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏')
    }
  },
  {
    id: 'script-bold',
    name: 'Script Bold (スクリプト太字)',
    map: {
      ...createMap(UPPER, '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'),
      ...createMap(LOWER, '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃')
    }
  },
  {
    id: 'fraktur',
    name: 'Fraktur (フラクチャー体)',
    map: {
      ...createMap(UPPER, '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'),
      ...createMap(LOWER, '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷')
    }
  },
  {
    id: 'fraktur-bold',
    name: 'Fraktur Bold (フラクチャー太字)',
    map: {
      ...createMap(UPPER, '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'),
      ...createMap(LOWER, '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝕕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟')
    }
  },
  {
    id: 'circled',
    name: 'Circled (丸囲み)',
    map: {
      ...createMap(UPPER, 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ'),
      ...createMap(LOWER, 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'),
      ...createMap(DIGITS, '⓪①②③④⑤⑥⑦⑧⑨')
    }
  },
  {
    id: 'circled-neg',
    name: 'Circled Negative (黒丸囲み)',
    map: {
      ...createMap(UPPER, '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩'),
      ...createMap(LOWER, '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩'),
      ...createMap(DIGITS, '⓿❶❷❸❹❺❻❼❽❾')
    }
  },
  {
    id: 'double-struck',
    name: 'Double Struck (白抜き)',
    map: {
      ...createMap(UPPER, '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ'),
      ...createMap(LOWER, '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'),
      ...createMap(DIGITS, '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡')
    }
  },
  {
    id: 'monospace',
    name: 'Monospace (等幅)',
    map: {
      ...createMap(UPPER, '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉'),
      ...createMap(LOWER, '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'),
      ...createMap(DIGITS, '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿')
    }
  },
  {
    id: 'bold-italic',
    name: 'Bold Italic (太字 斜体)',
    map: {
      ...createMap(UPPER, '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝑁'), // Adjust to Z
      ...createMap(LOWER, '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛')
    }
  },
  {
    id: 'squared',
    name: 'Squared (四角囲み)',
    map: {
      ...createMap(UPPER, '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'),
      ...createMap(LOWER, '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉')
    }
  }
];

class FonterApp {
  constructor() {
    this.sourceText = document.getElementById('sourceText');
    this.convertersContainer = document.getElementById('convertersContainer');
    this.favorites = this.loadFavorites();

    this.notificationEl = document.createElement('div');
    this.notificationEl.className = 'notification';
    document.body.appendChild(this.notificationEl);
    this.notificationTimeout = null;

    this.fixSpecificMappings();
    this.init();
  }

  fixSpecificMappings() {
    // Correcting bold-italic Z
    const bi = CONVERTERS.find(c => c.id === 'bold-italic');
    if (bi) {
      bi.map['Z'] = '𝒁';
    }
  }

  init() {
    this.renderConverters();
    this.sourceText.addEventListener('input', () => this.updateOutputs());
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('fonter_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveFavorites() {
    localStorage.setItem('fonter_favorites', JSON.stringify(this.favorites));
  }

  toggleFavorite(id) {
    const idx = this.favorites.indexOf(id);
    if (idx !== -1) {
      this.favorites.splice(idx, 1);
    } else {
      this.favorites.push(id);
    }
    this.saveFavorites();
    this.renderConverters(); // Trigger layout update based on favorites
    this.updateOutputs();
  }

  convertText(text, map) {
    if (!text) return '';
    let result = '';
    for (const char of text) {
      result += map[char] || char;
    }
    return result;
  }

  getSortedConverters() {
    const favs = [];
    const others = [];
    for (const c of CONVERTERS) {
      if (this.favorites.includes(c.id)) {
        favs.push(c);
      } else {
        others.push(c);
      }
    }
    return [...favs, ...others];
  }

  renderConverters() {
    this.convertersContainer.innerHTML = '';
    const sorted = this.getSortedConverters();
    const currentText = this.sourceText.value;

    sorted.forEach((converter, index) => {
      const isFav = this.favorites.includes(converter.id);

      const card = document.createElement('div');
      card.className = 'converter-card';
      card.dataset.id = converter.id;
      // Staggered animation
      card.style.animationDelay = `${index * 0.05}s`;

      card.innerHTML = `
        <div class="converter-header">
          <span class="converter-name">${converter.name}</span>
          <button class="icon-btn favorite-btn ${isFav ? 'active' : ''}" data-action="favorite" title="${isFav ? 'お気に入りから削除' : 'お気に入りに追加'}">
            <span class="material-symbols-outlined">star</span>
          </button>
        </div>
        <div class="converter-body">
          <div class="output-text" id="out-${converter.id}">${this.convertText(currentText, converter.map)}</div>
          <div class="converter-actions">
            <button class="icon-btn action-btn" data-action="copy" title="コピー">
              <span class="material-symbols-outlined">content_copy</span>
            </button>
            <button class="icon-btn action-btn" data-action="share" title="共有">
              <span class="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      `;

      card.querySelector('[data-action="favorite"]').addEventListener('click', () => {
        this.toggleFavorite(converter.id);
      });

      card.querySelector('[data-action="copy"]').addEventListener('click', () => {
        const outEl = card.querySelector('.output-text');
        this.copyToClipboard(outEl.textContent || '');
      });

      card.querySelector('[data-action="share"]').addEventListener('click', () => {
        const outEl = card.querySelector('.output-text');
        this.shareText(converter.name, outEl.textContent || '');
      });

      this.convertersContainer.appendChild(card);
    });
  }

  updateOutputs() {
    const text = this.sourceText.value;
    CONVERTERS.forEach(converter => {
      const el = document.getElementById(`out-${converter.id}`);
      if (el) {
        el.textContent = this.convertText(text, converter.map);
      }
    });
  }

  async copyToClipboard(text) {
    if (!text) {
      this.showNotification('コピーするテキストがありません');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      this.showNotification('コピーしました ✨');
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        this.showNotification('コピーしました ✨');
      } catch (err) {
        this.showNotification('コピーに失敗しました');
      }
      document.body.removeChild(textArea);
    }
  }

  async shareText(title, text) {
    if (!text) {
      this.showNotification('共有するテキストがありません');
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Fonter - ${title}`,
          text: text
        });
        this.showNotification('共有機能を開きました');
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      this.copyToClipboard(text);
      this.showNotification('コピーしました（共有非対応）');
    }
  }

  showNotification(message) {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
    this.notificationEl.textContent = message;
    this.notificationEl.classList.add('show');
    
    this.notificationTimeout = setTimeout(() => {
      this.notificationEl.classList.remove('show');
    }, 2500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FonterApp();
});

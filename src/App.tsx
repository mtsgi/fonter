import { type Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import table from './assets/table.csv?raw';

const [text, setText] = createSignal('');

// CSVファイルからCharacterキーと指定したキーの対応Mapを生成
const csvToMap = (key: string) => {
  const map = new Map<string, string>();
  const rows = table.split('\n');
  const headers = rows[0].split(',');
  const characterIndex = headers.indexOf('Character');
  const keyIndex = headers.indexOf(key);
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i]) { continue; }
    const row = rows[i].split(',');
    map.set(row[characterIndex], row[keyIndex]);
  }
  return map;
}

const scriptMap = csvToMap('script');
const boldMap = csvToMap('bold');
const italicMap = csvToMap('italic');

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>

      <textarea
        value={text()}
        onInput={(e) => setText(e.currentTarget.value)}
        class={styles.textarea}
      />

      <pre class={styles.result}>
        {text() || 'Type something in the textarea...'}
      </pre>

      <pre class={styles.result}>
        <For each={Array.from(scriptMap)}>
          {([key, value]) => (
            <div>
              {key}: {value}
            </div>
          )}
        </For>
      </pre>
    </div>
  );
};

export default App;

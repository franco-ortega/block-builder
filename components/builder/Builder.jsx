'use client';

import { useState } from 'react';
import Block from '../block/Block';
import styles from './Builder.module.css';

export default function Builder() {
  const [blocks, setBlocks] = useState([]);
  const [blockColor, setBlockColor] = useState('');

  const addBlock = () => {
    setBlocks((prev) => [
      {
        id: Math.random().toFixed(4) * 10000,
        color: blockColor,
      },
      ...prev,
    ]);
  };

  return (
    <main className={styles.Builder}>
      <section>
        <p>Click on the button to build a block.</p>
        <button onClick={addBlock}>Build</button>
        <p>Select color</p>
        <select onChange={(e) => setBlockColor(e.target.value)}>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
        </select>
      </section>
      <section>
        {blocks.map(({ id, color }) => (
          <Block key={id} color={color} />
        ))}
      </section>
    </main>
  );
}

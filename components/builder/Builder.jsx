'use client';

import { useState } from 'react';
import Block from '../block/Block';
import styles from './Builder.module.css';

export default function Builder() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    setBlocks((prev) => [
      {
        id: Math.random().toFixed(4) * 10000,
      },
      ...prev,
    ]);
  };

  return (
    <main className={styles.Builder}>
      <section>
        <p>Click on the button to build a block.</p>
        <button onClick={addBlock}>Build</button>
      </section>
      <section>
        {blocks.map(({ id }) => (
          <Block key={id} />
        ))}
      </section>
    </main>
  );
}

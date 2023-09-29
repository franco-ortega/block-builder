'use client';

import { useState } from 'react';
import Block from '../block/Block';

export default function Builder() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    console.log('clicked');
    setBlocks((prev) => [
      ...prev,
      {
        id: Math.random().toFixed(4) * 10000,
      },
    ]);
  };

  console.log(blocks);

  return (
    <main>
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
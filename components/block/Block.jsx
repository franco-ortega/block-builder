import styles from './Block.module.css';

export default function Block({ color }) {
  return (
    <div className={styles.Block} style={{ backgroundColor: color }}></div>
  );
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Paper from '../components/Paper';

export default function Home() {
  const [space, setSpace] = useState(false);
  const [deepLearning, setDeepLearning] = useState(false);
  const [machineLearning, setMachineLearning] = useState(false);

  const setSpaceClick = () => {
    setSpace(!space);
  };

  const setDeepLearningClick = () => {
    setDeepLearning(!deepLearning);
  };

  const setMachineLearningClick = () => {
    setMachineLearning(!machineLearning);
  };

  return (
    <div className={styles.container}>
      <div>
        <button
          onClick={setSpaceClick}
          className={space ? styles.filters : styles.inactive}
        >
          SPACE
        </button>
        <button onClick={setDeepLearningClick} className={styles.filters}>
          DEEP LEARNING
        </button>
        <button onClick={setMachineLearningClick} className={styles.filters}>
          MACHINE LEARNING
        </button>
      </div>
      <div>
        <h1 className={space ? styles.space : styles.inactive}>SPACE</h1>
      </div>
      <div className={deepLearning ? styles.space : styles.inactive}>
        {<h1>DEEP LEARNING</h1>}
      </div>
      <div
        className={
          machineLearning || deepLearning ? styles.space : styles.inactive
        }
      >
        {<h1>MACHINE LEARNING</h1>}
      </div>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/index.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | gopep</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}

export default Home;
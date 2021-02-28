import React, { useContext, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Button, Container, GithubButton, Input } from '../styles/pages/Index';
import { UserContext } from '../contexts/UserContext';

const Index: React.FC = () => {
  const [name, setName] = useState('');
  const { name: userName, handleChangeName } = useContext(UserContext);

  const router = useRouter();

  function handleLoginWithName() {
    if (name.length < 4) return;

    handleChangeName(name);
    router.push('/home');
  }

  useEffect(() => {
    if (userName !== '') {
      router.push('/home');
    }
  }, [userName]);

  return (
    <>
      <Head>
        <title>Moevit - Home</title>
      </Head>

      <Container>
        <div>
          <img src="/logo-full-light.svg" alt="Moevit" />

          <strong>Bem-vindo</strong>

          <span>
            Digite seu nome ou faça login para começar
        </span>

          <div>
            <section>
              <Input
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                onClick={handleLoginWithName}
                active={name.length >= 4}
              >
                <FiArrowRight />
              </Button>
            </section>

            <span>Ou</span>

            <section>
              <GithubButton disabled>
                <FaGithub />
              Github
            </GithubButton>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Index;
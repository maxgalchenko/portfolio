import React from 'react';
import styled from '@emotion/styled';
import Header from './Hero/Header';
import Hero from './Hero';
import { a } from '@react-spring/web';
import Advantages from './Advantages';
import SelectedCompanies from './SelectedCompanies';
import Footer from './Footer';
import PageContainer from '../../components/common/PageContainer';

function Home() {
  return (
    <PageContainer>
      <main>
        <Hero />
        <Advantages />
        <SelectedCompanies />
      </main>
      <Footer />
    </PageContainer>
  );
}

export default Home;

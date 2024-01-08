import PageContainer from '../../components/common/PageContainer';
import Advantages from './Advantages';
import Footer from './Footer';
import Hero from './Hero';
import SelectedCompanies from './SelectedCompanies';

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

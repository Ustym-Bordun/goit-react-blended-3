import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList />
      </Container>
    </Section>
  );
};
export default Home;

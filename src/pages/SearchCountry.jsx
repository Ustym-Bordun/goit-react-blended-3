import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

import SearchForm from '../components/SearchForm/SearchForm';

const SearchCountry = () => {
  const handleSubmit = region => {
    console.log(region);
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
};

export default SearchCountry;

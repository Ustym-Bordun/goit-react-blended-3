import { useEffect, useState } from 'react';
import { getCountries } from '../../service/countryApi';

import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link } from 'react-router-dom';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      const countryListData = await getCountries();
      setCountries(countryListData);
    };
    asyncWrapper();
  }, []);

  return (
    <>
      <Grid>
        {countries.map(country => {
          return (
            <GridItem key={country.id}>
              <Link to={`${country.country}`}>
                <img src={country.flag} alt={country.country} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default CountryList;

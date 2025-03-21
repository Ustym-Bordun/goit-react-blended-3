import { useEffect, useState } from 'react';
import { getCountries } from '../../service/countryApi';

import GridItem from 'GridItem';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      const countryListData = await getCountries();
      // console.log(countryListData);
      setCountries(countryListData);
    };
    asyncWrapper();
  }, []);

  console.log(countries);

  return (
    <>
      {countries.map(country => {
        console.log(country);
        return (
          <GridItem key={country}>
            <Link>
              <img src="" alt="" />
            </Link>
          </GridItem>
        );
      })}
    </>
  );
};
export default CountryList;

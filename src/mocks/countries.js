const getCountries = () =>
  Promise.resolve({
    countries: [
      {
        countryID: 1,
        countryFlag: "url",
        population: 14997297,
        active: 264623556,
        cases: 4657748,
        Country: "Russia",
      },
    ],
  });

export default getCountries;

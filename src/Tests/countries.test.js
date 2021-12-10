import '@testing-library/jest-dom/extend-expect';
import getCountries from '../mocks/countries';

describe('test fetching data', () => {
    it('test fetching country id', async() => {
        await getCountries().then((data) => expect(data.countries[0].countryID).toBe(1));
    });

    it('test fetching country name', async() => {
        await getCountries().then((data) => expect(data.countries[0].Country).toBe('Russia'));
    });

    it('test fetching country deaths', async() => {
        await getCountries().then((data) => expect(data.countries[0].population).toBe(14997297));
    });

    it('test fetching country img', async() => {
        await getCountries().then((data) => expect(data.countries[0].countryFlag).toBe('url'));
    });

    // it('test fetching country continent', async() => {
    //     await getCountries().then((data) => expect(data.countries[0].continent).toBe('Africa'));
    // });
});
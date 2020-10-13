import fakeRestProvider from 'ra-data-fakerest';

import data from './data';

const dataProvider = fakeRestProvider(data, true);

export default dataProvider;
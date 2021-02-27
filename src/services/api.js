import axios from 'axios';

import makeServer from '../server/server';

makeServer();

const API = {
  base: axios.create({
    baseURL: `api`,
    timeout: 2000,
    headers: {"Content-type": `application/json`}
  }),
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getOffers() {
    return this.base.get(`/offers`);
  },
};

export default API;

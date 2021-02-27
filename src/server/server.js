import {Server, Model} from 'miragejs';
import getRandomOffer from '../mocks/offer';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const makeServer = ({environment = `development`} = {}) => {
  return new Server({
    environment,

    models: {
      offers: Model
    },

    seeds(server) {
      for (let offerIndex = 0; offerIndex < 20; offerIndex++) {
        server.create(`offer`, getRandomOffer());
      }
    },

    routes() {
      this.namespace = `api`;
      this.timing = 500;

      this.get(`/offers`, (schema) => {
        return schema.offers.all();
      });
    }
  });
};

export default makeServer;

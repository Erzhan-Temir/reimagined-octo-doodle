import {Server, Model} from 'miragejs';
import getRandomOffer from '../mocks/offer';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeServer = ({environment = `development`} = {}) => {
  return new Server({
    environment,

    models: {
      offers: Model,
      users: Model,
    },

    seeds(server) {
      for (let offerIndex = 0; offerIndex < 20; offerIndex++) {
        server.create(`offer`, getRandomOffer());
      }
    },

    routes() {
      this.namespace = `api`;
      this.timing = 1000;

      this.get(`/offers`, (schema) => {
        return schema.offers.all();
      });

      this.post(
          `/users`,
          (schema, request) => {
            let attrs = JSON.parse(request.requestBody).email;
            return schema.users.create(attrs);
          },
          {timing: 1000}
      );
    }
  });
};

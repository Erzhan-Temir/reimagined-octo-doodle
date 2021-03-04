import {Server, Model} from 'miragejs';
import getRandomOffer from '../mocks/offer';
import getRandomReview from '../mocks/review';
import {OFFERS_COUNT, REVIEWS_COUNT} from '../mocks/utils';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeServer = ({environment = `development`} = {}) => {
  return new Server({
    environment,

    models: {
      offers: Model,
      users: Model,
      reviews: Model,
    },

    seeds(server) {
      for (let offerIndex = 0; offerIndex < OFFERS_COUNT; offerIndex++) {
        server.schema.offers.create(getRandomOffer());
      }

      for (let reviewIndex = 0; reviewIndex < REVIEWS_COUNT; reviewIndex++) {
        server.schema.reviews.create(getRandomReview());
      }
    },

    routes() {
      this.namespace = `api`;
      this.timing = 1000;

      this.get(`/offers`, (schema) => {
        return schema.offers.all();
      });

      this.get(`/offers/:id`, (schema, request) => {
        let id = request.params.id;
        return schema.offers.find(id);
      });

      this.get(`/reviews`, (schema) => {
        return schema.reviews.all();
      });

      this.post(`/users`, (schema, request) => {
        let attrs = JSON.parse(request.requestBody).email;
        return schema.users.create(attrs);
      }, {timing: 1000}
      );

      this.post(`/reviews`, (schema, request) => {
        let attrs = JSON.parse(request.requestBody).review;
        return schema.reviews.create(attrs);
      }, {timing: 1000}
      );

      this.patch(`/offers/:id`, (schema, request) => {
        let attrs = JSON.parse(request.requestBody).offer;

        return schema.offers.find(request.params.id).update(attrs);
      });
    }
  });
};

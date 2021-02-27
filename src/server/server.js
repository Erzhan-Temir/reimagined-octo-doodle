import {Server, Model} from 'miragejs';

const makeServer = ({environment = `development`} = {}) => {
  return new Server({
    environment,

    models: {
      offers: Model
    },

    seeds(server) {
      server.create(`offer`, {
        isPremium: true,
        image: `img/apartment-01.jpg`,
        price: 120,
        isBookmarked: false,
        rating: 93,
        heading: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
      });
      server.create(`offer`, {
        isPremium: false,
        image: `img/room.jpg`,
        price: 80,
        isBookmarked: true,
        rating: 80,
        heading: `Wood and stone place`,
        type: `Private room`,
      });
      server.create(`offer`, {
        isPremium: false,
        image: `img/apartment-02.jpg`,
        price: 132,
        isBookmarked: false,
        rating: 80,
        heading: `Canal View Prinsengracht`,
        type: `Apartment`,
      });
      server.create(`offer`, {
        isPremium: true,
        image: `img/apartment-03.jpg`,
        price: 180,
        isBookmarked: false,
        rating: 100,
        heading: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
      });
    },

    routes() {
      this.namespace = `api`;
      this.timing = 150;

      this.get(`/offers`, (schema) => {
        return schema.offers.all();
      });
    }
  });
};

export default makeServer;

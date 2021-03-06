/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import {makeServer} from '../server/server';


makeServer();


const API = {
  base: axios.create({
    baseURL: `api`,
    timeout: 2000,
    headers: {"Content-type": `application/json`}
  }),

  getOffers() {
    return this.base.get(`/offers`);
  },

  getOffer(id) {
    return this.base.get(`/offers/${id}`);
  },

  getReviews() {
    return this.base.get(`/reviews`);
  },

  addReview(review) {
    return this.base.post(`/reviews`, {
      review
    });
  },

  updateOffer(id, offer) {
    return this.base.patch(`/offers/${id}`, {
      offer
    });
  },

  login(email) {
    return this.base.post(`/users`, {
      email: {email}
    });
  }
};

export default API;

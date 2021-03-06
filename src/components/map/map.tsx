import React, {useRef, useEffect} from 'react';
import {cities} from '../../constants/constants';
import {getActiveOfferID, getCurrentCity, getOffersFilteredByCity} from '../../reducers/offers-data/offers-data-selectors';
import L from 'leaflet';
import {useSelector} from 'react-redux';
import './map.css';

const pin = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
});

const activePin = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 42],
});

const Map = (): JSX.Element => {
  const offers = useSelector(getOffersFilteredByCity);
  const currentCity = useSelector(getCurrentCity);
  const activeOfferID = useSelector(getActiveOfferID);

  const mapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let map: any;

  const createMap = () => {
    const city = cities[currentCity];
    const cityCoords = new L.LatLng(city.LAT, city.LNG);
    const zoom = 12;

    map = L.map(mapRef.current, {
      center: cityCoords,
      zoom,
      zoomControl: true,
    });

    map.setView(cityCoords, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(map);

    const offersCopy = offers.slice();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const activeOffer: any = offersCopy.find((offer) => offer.id === activeOfferID);
    const indexOfActiveOffer = offersCopy.indexOf(activeOffer);

    if (indexOfActiveOffer > -1) {
      offersCopy.splice(indexOfActiveOffer, 1);
      const offerCoords = new L.LatLng(activeOffer.coords.LAT, activeOffer.coords.LNG);
      L.marker(offerCoords, {icon: activePin}).addTo(map);
    }

    offersCopy.map((offer) => {
      const offerCoords = new L.LatLng(offer.coords.LAT, offer.coords.LNG);
      L.marker(offerCoords, {icon: pin}).addTo(map);
    });
  };


  useEffect(() => {
    createMap();
    return () => map.remove();
  }, [currentCity, activeOfferID]);


  return (
    <div className="map-wrapper" ref={mapRef}></div>
  );
};

export default Map;

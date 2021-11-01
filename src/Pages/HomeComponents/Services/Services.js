import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className='container'>
      <h2 className='section__title'>Our Services</h2>
      <div className='service__container '>
        {
          // map data
          services.map((service) => (
            <Service key={service.id} service={service} />
          ))
        }
      </div>
    </section>
  );
};

export default Services;

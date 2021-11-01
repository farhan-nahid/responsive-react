import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
  {
    img: mechanic1,
    name: 'Andrew Smith',
    expertize: '-Engine Expert-',
  },
  {
    img: mechanic2,
    name: 'John Anderson',
    expertize: '-Polish Expert-',
  },
  {
    img: mechanic3,
    name: 'Zakaria Smith',
    expertize: '-Coloring Expert-',
  },
  {
    img: mechanic4,
    name: 'Sakib Anderson',
    expertize: '-Al rounder Expert-',
  },
  {
    img: mechanic5,
    name: 'John Dou',
    expertize: '-Tire Expert-',
  },
];

const Experts = () => {
  return (
    <section className='container'>
      <h2 className='text-primary section__title'>Our Experts</h2>
      <div className='row g-5'>
        {
          // map experts
          experts.map((expert, idx) => (
            <Expert key={idx} expert={expert} />
          ))
        }
      </div>
    </section>
  );
};

export default Experts;

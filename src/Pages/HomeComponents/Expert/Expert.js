import React from 'react';

const Expert = ({ expert: { img, name, expertize } }) => {
  return (
    <div className='col-lg-4 col-sm-6 col-12'>
      <div className='bg-light text-center rounded'>
        <img src={img} alt={name} />
        <div className='p-4'>
          <h3>{name}</h3>
          <h5 className='text-danger'>{expertize}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;

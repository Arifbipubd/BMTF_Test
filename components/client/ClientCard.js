/** @format */

import React from "react";

const ClientCard = ({ data }) => (
  <div className='clientCard'>
    <img src={data.image} alt={data.name} />
    <h3>{data.name}</h3>
  </div>
);

export default ClientCard;

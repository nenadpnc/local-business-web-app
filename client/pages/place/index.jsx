import React from 'react';
import OpeningHours from '../../components/OpeningHours';
import { getPlaceInfo } from '../../utils/dataAccess';

function Place({ data }) {
  return (
    <div className="place-wrapper">
      <div className="place-info">
        <h2 className="place-title">{data.name}</h2>
        <h3 className="place-info-address">{data.address}</h3>
      </div>
      <OpeningHours data={data.openingHours} />
    </div>
  )
};

Place.getInitialProps = async ({ query }) => {
  // Fetch data from external API
  const data = await getPlaceInfo(query.id);

  // Pass data to the page via props
  return { data }
};

export default Place;
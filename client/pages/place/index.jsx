import React from 'react';
import OpeningHours from '../../components/OpeningHours';
import { getPlaceInfo } from '../../utils/dataAccess';

function Place({ data }) {
  return (
    <div className="place-wrapper">
      {data.error ? (
        <h3>Error fetching place information.</h3>
      ) : (
        <>
          <div className="place-info">
            <h2 className="place-title">{data.name}</h2>
            <h3 className="place-info-address">{data.address}</h3>
          </div>
          <OpeningHours data={data.openingHours} />
        </>
      )}
    </div>
  )
};

Place.getInitialProps = async ({ query }) => {
  try {
    // Fetch data from external API
    const data = await getPlaceInfo(query.id);
  
    // Pass data to the page via props
    return { data }
  } catch (err) {
    return { data: { error: true } };
  }
};

export default Place;
import React from 'react';

export default function OpeningHours({ data = [] }) {
  return (
    <div className="place-hours-wrapper">
      <h2 className="place-title">Opening Hours</h2>
      <div className="place-hours">
        {data.map((item) => (
          <div className="place-hours-row">
            <div className="days">{item[0].join(' - ')}</div>
            <div className="hours">{item[1].split(',').map((hour) => (
              <div className="hour">{hour.toLowerCase()}</div>
            ))}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react';

const Availability = (props) => {

  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json")
    .then(response => response.json())
    .then(results => setAvailability(results.data.stations));
  }, [setAvailability]);

  return (
    <div className="Availability">
      {availability
        .filter(info => {return info.station_id === props.id})
        .map((avail) =>
          <div>
            <p><b>Ledige sykler: </b>{avail.num_bikes_available}</p>
            <p><b>Ledige plasser: </b>{avail.num_docks_available}</p>
          </div>
        )
      }
    </div>
  );
}

export default Availability;
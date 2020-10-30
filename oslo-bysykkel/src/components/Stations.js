import React, { useEffect, useState } from 'react';
import Availability from './Availability';

const Stations = (props) => {

  const [stationsData, setStationsData] = useState([]);
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json")
    .then(response => response.json())
    .then(results => (setStationsData(results.data.stations), setUpdated(results.last_updated)));
  }, [setStationsData, setUpdated]);

  return (
    <div className="Stations">
      {stationsData
        .filter((info) => {
          return info.name.toLowerCase().startsWith(props.word.toLowerCase())
        })
        .map((station) =>
          <div style={{borderStyle: 'dashed none', margin: '10px', padding: '10px'}}>
            <h2 >{station.name}</h2>
            <p><b>Maks kapasitet: </b>{station.capacity}</p>
            <p><b>Adresse: </b>{station.address}</p>
            <div><Availability id={station.station_id} /></div>
          </div>
        )
      }
      <p>~ ~ ~ ~</p>
      <p><i>{new Date(updated*1000).toString()}</i></p>
    </div>
  );
}

export default Stations;
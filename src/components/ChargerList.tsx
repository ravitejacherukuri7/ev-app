import React from 'react';
import { useSelector } from 'react-redux';
import { selectChargers } from '../features/chargers/chargerSlice';
import ChargerItem from './ChargerItem';

const ChargerList: React.FC = () => {
  const chargers = useSelector(selectChargers);

  if (chargers === null) {
    // In case of loading or error states, you can extend to handle that
    return <p>Loading chargers...</p>;
  }

  if (chargers.length === 0) {
    return <p>No chargers available. Add one!</p>;
  }

  return (
    <div className="charger-grid">
      {chargers.map((charger) => (
        <ChargerItem key={charger.id} charger={charger} />
      ))}
    </div>
  );
};

export default ChargerList;
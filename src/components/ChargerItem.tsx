import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Charger, ChargerStatus } from '../features/chargers/types';
import { updateChargerStatus, removeCharger } from '../features/chargers/chargerSlice';
import Dialog from './Dialog';

interface ChargerItemProps {
  charger: Charger;
}

const statusColors: Record<ChargerStatus, string> = {
  offline: 'gray',
  online: 'blue',
  charging: 'green',
  fault: 'red',
  ready: 'orange',
};

const ChargerItem: React.FC<ChargerItemProps> = ({ charger }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleUpdateStatus = async (status: ChargerStatus) => {
    setLoading(true);
    setError(null);
    try {
      
      await new Promise(res => setTimeout(res, 300));
      dispatch(updateChargerStatus({ id: charger.id, status }));
    } catch (err) {
      setError('Failed to update status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = () => {
    setShowDialog(true);
  };

  const handleConfirmRemove = () => {
    try {
      dispatch(removeCharger(charger.id));
    } catch (err) {
      setError('Failed to remove charger.');
    } finally {
      setShowDialog(false);
    }
  };

  const handleCancelRemove = () => {
    setShowDialog(false);
  };

  return (
    <div
      className="charger-item"
      style={{
        border: `2px solid ${statusColors[charger.status]}`,
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '10px',
        opacity: loading ? 0.6 : 1,
        position: 'relative',
      }}
    >
      <h4>{charger.name}</h4>
      <p>Status: {charger.status}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div className="button-group" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {charger.status === 'offline' && (
          <button
            onClick={() => handleUpdateStatus('online')}
            disabled={loading}
            aria-busy={loading}
          >
            Turn On
          </button>
        )}
        {charger.status === 'online' && (
          <button
            onClick={() => handleUpdateStatus('charging')}
            disabled={loading}
            aria-busy={loading}
          >
            Start Charging
          </button>
        )}
        {charger.status === 'charging' && (
          <button
            onClick={() => handleUpdateStatus('ready')}
            disabled={loading}
            aria-busy={loading}
          >
            Stop Charging
          </button>
        )}
        {charger.status !== 'fault' && (
          <button
            onClick={() => handleUpdateStatus('fault')}
            disabled={loading}
            aria-busy={loading}
          >
            Simulate Fault
          </button>
        )}
        <button
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={handleRemove}
          disabled={loading}
        >
          Remove
        </button>
      </div>

      {showDialog && (
        <Dialog
          title="Confirm Removal"
          message="Are you sure you want to remove this charger?"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </div>
  );
};

export default ChargerItem;

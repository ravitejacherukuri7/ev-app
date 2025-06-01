import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAll, removeAll } from '../features/chargers/chargerSlice';
import { selectChargers } from '../features/chargers/chargerSlice';
import Dialog from './Dialog';

const ChargerActions: React.FC = () => {
  const dispatch = useDispatch();
  const chargers = useSelector(selectChargers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);

  const handleResetAll = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(res => setTimeout(res, 300));
      dispatch(resetAll());
    } catch (err) {
      setError('Failed to reset chargers.');
    } finally {
      setLoading(false);
      setShowResetDialog(false);
    }
  };

  const handleRemoveAll = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise(res => setTimeout(res, 300));
      dispatch(removeAll());
    } catch (err) {
      setError('Failed to remove all chargers.');
    } finally {
      setLoading(false);
      setShowRemoveDialog(false);
    }
  };

  if (chargers.length === 0) return null;

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <button
        onClick={() => {
          if (!loading) setShowResetDialog(true);
        }}
        style={{ backgroundColor: 'orange', color: 'white' }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Reset All'}
      </button>
      <button
        onClick={() => {
          if (!loading) setShowRemoveDialog(true);
        }}
        style={{ backgroundColor: 'red', color: 'white' }}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Remove All'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showResetDialog && (
        <Dialog
          title="Confirm Reset"
          message="Are you sure you want to reset all chargers?"
          onConfirm={handleResetAll}
          onCancel={() => setShowResetDialog(false)}
        />
      )}

      {showRemoveDialog && (
        <Dialog
          title="Confirm Remove All"
          message="This will remove all chargers. Proceed?"
          onConfirm={handleRemoveAll}
          onCancel={() => setShowRemoveDialog(false)}
        />
      )}
    </div>
  );
};

export default ChargerActions;
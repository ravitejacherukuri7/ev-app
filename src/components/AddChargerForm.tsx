import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharger } from '../features/chargers/chargerSlice';

const AddChargerForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Charger name cannot be empty.');
      return;
    }
    
     // eslint-disable-next-line
    if (!/^[a-zA-Z0-9\s\-]{1,50}$/.test(trimmedName)) {
      setError('Name contains invalid characters or is too long.');
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        dispatch(addCharger({ name: trimmedName }));
        setName('');
      } catch (err) {
        setError('Failed to add charger. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} aria-label="Add Charger">
      <input
        type="text"
        placeholder="Charger Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Charger Name"
        style={{ padding: '8px', marginRight: '8px', width: '200px' }}
        disabled={loading}
        required
      />
      <button type="submit" disabled={loading} aria-busy={loading}>
        {loading ? 'Adding...' : 'Add Charger'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddChargerForm;
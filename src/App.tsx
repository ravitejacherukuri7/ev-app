import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ChargerList from './components/ChargerList';
import AddChargerForm from './components/AddChargerForm';
import { ErrorBoundary } from './components/ErrorBoundary';
import ChargerActions from './components/ChargerActions';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>EV Charger Simulator</h1>
        <ErrorBoundary>
          <AddChargerForm />
          <ChargerActions />
          <ChargerList />
        </ErrorBoundary>
      </div>
    </Provider>
  );
};

export default App;
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# EV Charger Simulator

A React and Redux Toolkit-based application that simulates the management of electric vehicle (EV) chargers. Users can add, remove, and update chargers' statuses, with persistent storage using localStorage.

---

## Features

- Add new chargers with user-defined names.
- View a list of chargers with their current statuses.
- Change charger statuses: turn on, start/stop charging, simulate faults.
- Remove individual chargers.
- Reset all chargers or remove all chargers with confirmation dialogs.
- Persistent storage of chargers via localStorage.

---

## Technologies Used

- React
- Redux Toolkit
- TypeScript
- React Hooks
- LocalStorage API
- CSS for styling

---

## Structure

- `features/chargers/types.ts` — Defines types for chargers and statuses.
- `features/chargers/chargerSlice.ts` — Redux slice for managing chargers.
- `store.ts` — Configures the Redux store.
- `components/` — Contains React components:
  - `ChargerItem.tsx` — Displays individual charger info and controls.
  - `ChargerList.tsx` — Lists all chargers.
  - `AddChargerForm.tsx` — Form to add new chargers.
  - `ChargerActions.tsx` — Actions like reset or remove all chargers.
  - `Dialog.tsx` — Confirmation dialogs.
  - `ErrorBoundary.tsx` — Error boundary component.
- `App.tsx` — Main application component.
- `index.tsx` — Entry point.
- `styles.css` — Basic styling.

---

## Usage

1. **Add a Charger:** Enter a name in the input and click "Add Charger".
2. **Manage Chargers:**
   - Turn on chargers when offline.
   - Start/stop charging when online/charging.
   - Simulate faults.
   - Remove individual chargers.
3. **Bulk Actions:**
   - Reset all chargers.
   - Remove all chargers (with confirmation).

All changes are saved in your browser's localStorage, so your data persists across sessions.

---

## Setup and Run

1. Clone the repository:

```bash
git clone <https://github.com/ravitejacherukuri7/ev-app.git>
import React from 'react';

const LandingContext = React.createContext();
const initialState = {
  isMobileMenuOpen: false,
};

function landingReducer(state, action) {
  return {
    ...state,
    ...action,
  };
}

function LandingProvider({ children }) {
  const [state, dispatch] = React.useReducer(landingReducer, initialState);

  const value = { state, dispatch };

  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
}

function useLanding() {
  const context = React.useContext(LandingContext);

  if (context === undefined) {
    throw new Error('useLanding must be used within a LandingProvider');
  }

  return [context.state, context.dispatch];
}

export { LandingProvider, useLanding };

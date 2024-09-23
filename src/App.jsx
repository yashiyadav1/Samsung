// In App.jsx
import React from 'react';
import YashiSamsungPortfolio from './components/YashiSamsungPortfolio';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  console.log('App component rendered');
  return (
    <ErrorBoundary>
      <YashiSamsungPortfolio />
    </ErrorBoundary>
  );
}

export default App;
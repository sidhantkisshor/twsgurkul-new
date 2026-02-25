import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF8F5', fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2C3539', marginBottom: '0.75rem' }}>Something went wrong.</h1>
            <p style={{ color: '#2C3539', opacity: 0.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
                style={{ background: '#C87533', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{ display: 'inline-block', background: 'transparent', color: '#2C3539', padding: '0.6rem 1.4rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', border: '1px solid #2C353933' }}
              >
                Return to homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("React Crash:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "3rem",
          textAlign: "center",
          color: "#001f3f"
        }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

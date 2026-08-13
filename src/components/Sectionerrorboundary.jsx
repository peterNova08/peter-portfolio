import { Component } from "react";

// Wraps a lazy-loaded section so that if its chunk fails to load or throws
// during render, only that section falls back — the rest of the page
// (including everything already mounted, like Hero) stays up instead of
// the whole app unmounting.
class SectionErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Look for this in your browser console — it'll tell you exactly
    // which section/import is failing.
    console.error("Section failed to load:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default SectionErrorBoundary;
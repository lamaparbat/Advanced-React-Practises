import React, { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /*
    # Update state to indicate that an error occurred
    # It is called when an error is thrown in a component's child component during rendering.
    # This method is called during the render phase before the render() method is executed.
  */
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  /*
    # Donot update the state
    # is used for error logging or displaying an error boundary UI.
    # It allows you to perform additional error handling logic, such as logging the error or showing a custom error UI. 
    # This method is called during the commit phase after the component has rendered.
  */
  componentDidCatch(error, info) {
    console.log({ error, info });
  }

  render = () => {
    if (this.state.hasError) {
      return <h1>Something went wrong !</h1>;
    }
    return this.props.children;
  };
}

export default ErrorBoundary;

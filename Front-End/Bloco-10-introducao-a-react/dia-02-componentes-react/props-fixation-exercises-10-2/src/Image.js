import React from 'react';

class Image extends React.Component { // 'Image' é o componente React.
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
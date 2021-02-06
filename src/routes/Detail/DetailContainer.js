import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  state = {
    result: null,
    error: false,
    loading: true
  };

  render() {
    const { result, error, loading } = this.state;

    return (
      <DetailPresenter
        {...{ result, error, loading }}
      />
    );
  }
}

export default DetailContainer;
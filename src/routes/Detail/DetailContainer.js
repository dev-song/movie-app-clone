import React from 'react';
import DetailPresenter from './DetailPresenter';

import { MOVIE_API, TV_API } from '../../api';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }

    let result = null;
    const { isMovie } = this.state;
    try {
      ({ data: result } = isMovie
        ? await MOVIE_API.movieDetail(id)
        : await TV_API.TVDetail(id))
    } catch {
      this.setState({ error: `Can't find anything :(` })
    } finally {
      this.setState({ loading: false, result })
    }
  }

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
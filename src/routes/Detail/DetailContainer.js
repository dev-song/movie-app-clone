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
      id: null,
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
    this.setState({ id });

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
    const { id, result, error, loading, isMovie } = this.state;

    return (
      <DetailPresenter
        {...{ id, result, error, loading, isMovie }}
      />
    );
  }
}

export default DetailContainer;
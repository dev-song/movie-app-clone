import React, { useState } from 'react';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  return (
    <HomePresenter
      {...{ nowPlaying, upcoming, popular, error, loading }}
    />
  )
}

export default HomeContainer;
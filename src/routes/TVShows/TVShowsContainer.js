import React, { useState } from 'react';
import TVShowsPresenter from './TVShowsPresenter';

const HomeContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  return (
    <TVShowsPresenter
      {...{ topRated, popular, airingToday, error, loading }}
    />
  )
}

export default HomeContainer;
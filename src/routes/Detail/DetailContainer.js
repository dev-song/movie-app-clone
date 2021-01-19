import React, { useState } from 'react';
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  return (
    <DetailPresenter
      {...{ result, error, loading }}
    />
  )
}

export default DetailContainer;
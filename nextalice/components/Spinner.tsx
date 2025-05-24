import React from 'react';
import Cliploader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
}

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <Cliploader
      color='rgba(140, 140, 5, 0.8)'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner;
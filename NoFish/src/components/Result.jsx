import React from 'react'
import { SafeIcon, UnsafeIcon } from '../icons';

const Result = ({ value }) => {
  return (
    <div className="card">
      <div>
        <img src={value > 0.5 ? UnsafeIcon : SafeIcon} alt="NoFish" className="avatar" />
      </div>
      <div className="user-info">
        <h2 style={value > 0.5 ? { color: '#ff0000' } : { color: '#00ff00' }}>
          {value > 0.5 ? "Website is not Safe to Visit" : "Website is Safe to Visit"}
        </h2>
        <div className="result">
          <u>Predicted Value</u>:
          <strong>{value}</strong>
        </div>
      </div>
    </div>
  )
}

export default Result;
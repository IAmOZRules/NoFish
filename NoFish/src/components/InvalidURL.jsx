import React from 'react'
import { WarningIcon } from '../icons';

const InvalidURL = () => {
    return (
        <div className="card">
            <div>
                <img src={WarningIcon} alt="NoFish" className="avatar" />
            </div>
            <div className="user-info">
                <h2 style={{ color: 'yellow' }}>
                    Please enter a valid URL!
                </h2>
            </div>
        </div>
    );
}

export default InvalidURL
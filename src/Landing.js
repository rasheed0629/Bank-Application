import React, { useState, useEffect } from 'react';
import MainContent from './MainContent';

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(loaderTimeout);
        };
    }, []);

    return (
        <div>
            {isLoading ? (           
                <div style={{ textAlign: 'center', marginTop: '150px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="bank.jpg" style={{ width: '20%', maxWidth: '200px', marginRight: '10px' }} />
                        <p>-------------------</p>
                        <img src="bank.jpg" style={{ width: '20%', maxWidth: '200px', marginLeft: '10px' }} />
                    </div>
                    <h3 style={{ marginTop: '20px' }}>Discovering bank details...</h3>
                </div>

            ) : (               
                <MainContent />
            )}
        </div>
    );
};
export default Landing;

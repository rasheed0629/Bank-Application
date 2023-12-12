import React,{useState,useEffect} from 'react'
import Values from './Values';

function Effect() {
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
        <>
            {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:"75px" }}>
                <img src="effect.png" style={{ width: '90%', maxWidth: '500px' }} />
            </div>

            ):(
                <Values/>
            )}
        </>
    )
}
export default Effect
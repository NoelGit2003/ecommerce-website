import ProgressBar from 'react-bootstrap/ProgressBar';

function ProductProgress() {
    return (
        <div className='main-ProgressBar'>
            
            <div className="star-rating">
                <p style={{color: 'black'}}>5 stars
                <ProgressBar variant="success" now={40} />
                </p>
            </div>
           
            <div className="star-rating">
                <p style={{color: 'black'}}>4 stars
                <ProgressBar variant="info" now={20} />
                </p>
            </div>
            <div className="star-rating">
                <p style={{color: 'black'}}>3 stars
                <ProgressBar variant="warning" now={60} />
                </p>
            </div>
            <div className="star-rating">
                <p style={{color: 'black'}}>2 stars
                <ProgressBar variant="danger" now={80} />
                </p>
            </div>

            <div className="star-rating">
                <p style={{color: 'black'}}>1 star
                <ProgressBar variant=".text-danger-emphasis" now={80} />
                </p>
            </div>
            </div>
            );
}

            export default ProductProgress;
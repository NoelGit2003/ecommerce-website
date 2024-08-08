import ProgressBar from 'react-bootstrap/ProgressBar';

function ProductProgress() {
    return (
        <div className='main-ProgressBar'>
            
            <div className="star-rating">
                <span style={{color: 'black'}}>5 stars
                <ProgressBar variant="success" now={40} />
                </span>
            </div>
           
            <div className="star-rating">
                <span style={{color: 'black'}}>4 stars
                <ProgressBar variant="info" now={20} />
                </span>
            </div>
            <div className="star-rating">
                <span style={{color: 'black'}}>3 stars
                <ProgressBar variant="warning" now={60} />
                </span>
            </div>
            <div className="star-rating">
                <span style={{color: 'black'}}>2 stars
                <ProgressBar variant="danger" now={80} />
                </span>
            </div>

            <div className="star-rating">
                <span style={{color: 'black'}}>1 star
                <ProgressBar variant=".text-danger-emphasis" now={80} />
                </span>
            </div>
            </div>
            );
}

            export default ProductProgress;
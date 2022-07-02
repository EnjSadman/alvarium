import './Card.scss';
import img from './img.png';

export const Card : React.FC = () => {
    return (
        <div className="card">
            <div className="card__imageContainer">
                <img
                    className="card__imageContainer--image"
                    src={img}
                    alt="phone"
                />
            </div>
            <div className="card__info info">
                <h3 className="info__header">Phone Name</h3>
                <h4 className="info__price">Phone price</h4>
                <p className="info__description">phone description</p>
            </div>
        </div>
    )
}
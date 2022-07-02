import './Card.scss';

interface Props {
    name: string,
    price: number,
    description: string,
    image: string,
}

export const Card : React.FC<Props> = ({name, price, description, image}) => {
    return (
        <div className="card">
            <div className="card__imageContainer">
                <img
                    className="card__imageContainer--image"
                    src={require(`./products/${image}`)}
                    alt="phone"
                />
            </div>
            <div className="card__info info">
                <h3 className="info__header">{name}</h3>
                <h4 className="info__price">{price}</h4>
                <p className="info__description">{description}</p>
            </div>
        </div>
    )
}
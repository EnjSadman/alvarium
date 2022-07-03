import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandedCardAction } from '../../store/actions';
import { getCurrentCurrencySelector, getExpandedCardSelector } from '../../store/selectors';
import './Card.scss';

interface Props {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
}

export const Card : React.FC<Props> = ({id, name, price, description, image}) => {
    const dispatch = useDispatch();
    const expandedCard = useSelector(getExpandedCardSelector);
    const currencyName = useSelector(getCurrentCurrencySelector);

    let calculatedPrice = price;

    switch (currencyName) {
        case 'uah' : {
            calculatedPrice *= 1;
            break;
        }

        case 'usd' : {
            calculatedPrice = Math.round(calculatedPrice * 0.034);
            break;
        }

        default : {
            calculatedPrice *= 1;
            break;
        }
    }

    useEffect(() => {
        
    })

    return (
        <div className={classNames("card", {"card__expanded" : (id ===  expandedCard)})}>
            <div className="card__imageContainer">
                <img
                    className="card__imageContainer--image"
                    src={require(`./products/${image}`)}
                    alt="phone"
                />
            </div>
            <div className="card__info info">
                <h3 className="info__header">{name}</h3>
                <h4 className="info__price">{`${calculatedPrice} ${currencyName.toUpperCase()}`}</h4>
                {((description.length <= 150) || (id === expandedCard))
                ?   (<p className="info__description">{description}</p>)
                : (
                    <>
                        <p className="info__description">
                            {description.slice(0, description.indexOf(' ', 150)) + '...'}
                            <button
                                type="button"
                                className="info__description--expandable"
                                onClick={() => {
                                    dispatch(setExpandedCardAction(id));
                                }}
                            >
                            expand
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}
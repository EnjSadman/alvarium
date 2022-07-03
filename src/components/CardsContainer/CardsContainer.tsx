import { useSelector } from 'react-redux';
import { getPhonesArraySelector } from '../../store/selectors';
import { Card } from '../Card/Card';
import './CardsContainer.scss';

export const CardsContainer : React.FC = () => {
  const phonesArray = useSelector(getPhonesArraySelector);

  return (
    <div className="cardsContainer">
      {phonesArray.map(singlePhone => (
        <Card
          id={singlePhone.id}
          name={singlePhone.name}
          price={singlePhone.price}
          image={singlePhone.image}
          description={singlePhone.description}
        />
      ))}
    </div>
  )
}
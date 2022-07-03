import { useSelector } from 'react-redux';
import { getMaximalPrice, getMinimalPrice, getPhonesArraySelector, getSortedBy } from '../../store/selectors';
import { Card } from '../Card/Card';
import './CardsContainer.scss';

export const CardsContainer : React.FC = () => {
  const phonesArray = useSelector(getPhonesArraySelector);
  const sorter = useSelector(getSortedBy);
  const minimal = useSelector(getMinimalPrice);
  const maximal = useSelector(getMaximalPrice);

  let sortedPhones;

  switch(sorter) {
    case 'priceUp' : {
      sortedPhones = [...phonesArray].sort((a, b) => b.price - a.price);
      break;
    }

    case 'alphabetical' : {
      sortedPhones = [...phonesArray].sort((a, b) => a.name.localeCompare(b.name));
      break;
    }

    default : {
      sortedPhones = [...phonesArray].sort((a, b) => a.price - b.price);
      break;
    }
  }

  sortedPhones = sortedPhones.filter(singlePhone => ((singlePhone.price > minimal) && (singlePhone.price < maximal)));

  return (
    (sortedPhones.length > 0)
    ? (<div className="cardsContainer">
      {sortedPhones.map(singlePhone => (
        <Card
          key={singlePhone.id}
          id={singlePhone.id}
          name={singlePhone.name}
          price={singlePhone.price}
          image={singlePhone.image}
          description={singlePhone.description}
        />
      ))}
    </div>)
    : (<h1>Sorry nothing matching parameters</h1>)
  )
}
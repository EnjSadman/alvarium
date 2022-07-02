import { Card } from '../Card/Card';
import './CardsContainer.scss';

export const CardsContainer : React.FC = () => {
  return (
    <div className="cardsContainer">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
import './cards.css'
import { Link } from 'react-router-dom';

/**
 * Renders a list of cards based on the provided data.
 */
const Cards = ({ data }) => {
  const cardItems = data.map((item) => (
    <figure key={item.id}>
      <Link to={`/accommodation/${item.id}`}>
        <div>
          <figcaption>{item.title}</figcaption>
        </div>
        <img src={item.cover} alt={item.title} />
      </Link>
    </figure>
  ));

  return (
    <section className="card-container">
      {cardItems}
    </section>
  );
}

export default Cards;
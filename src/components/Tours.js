import Reactfr from "react";
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className='title'>
        <h1>Our Tours</h1>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id, image, name, info, price } = tour;

          return (
            <article className='single-tour' key={id}>
              <img src={image} alt={name} />
              <footer>
                <div className='tour-info'>
                  <h2>{name}</h2>
                  <h4 className='tour-price'>₹ {price}</h4>
                </div>
                <p>{info}</p>
                <button className='delete-btn' onClick={() => deleteTour(id)}>
                  Remove
                </button>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

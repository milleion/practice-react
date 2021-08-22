import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/18/c2aac4feb7c5fe07b8d118311cc8141a1.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://www.thebilliards.kr/news/photo/202107/11837_14570_187.png",
    rating: 4.9,
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.8,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={image} alt="" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((item) => (
        <Food key={item.id} name={item.name} image={item.image} rating={item.rating} />
      ))}
    </div>
  );
}

export default App;

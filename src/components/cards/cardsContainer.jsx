import Card from './card';
import { useSelector } from 'react-redux';
const CardsContainer = () => {
  //достаем из стейта информацию и создаем итоговый массив
  const posts = useSelector((state) => state.cards.posts);
  const usersInfo = useSelector((state) => state.cards.usersInfo);
  const photos = useSelector((state) => state.cards.photos);
  const cardsTotal = [];
  //преобразуем в итоговый формат (cardsTotal)
  if (posts.length > 1 && usersInfo.length > 1 && photos.length > 0) {
    const cards = [...usersInfo, ...posts, ...photos];
    const cardUserPost = [];

    for (let i = 0; i < 20; i++) {
      if (cards[i].id === cards[i + 10].id) {
        cardUserPost.push({ ...cards[i], ...cards[i + 10] });
      } else {
        return false;
      }
    }

    for (let i = 0; i < 10; i++) {
      if (cardUserPost[i].id === cardUserPost[i + 10].id) {
        cardsTotal.push({ ...cardUserPost[i], ...cardUserPost[i + 10] });
      } else {
        return false;
      }
    }
  }
  return (
    <div className="container">
      {cardsTotal.map((val, i) => (
        <Card
          key={i}
          body={val.body}
          company={val.company}
          name={val.name}
          title={val.title}
          url={val.url}
        />
      ))}
    </div>
  );
};
export default CardsContainer;

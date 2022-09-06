import AutorizationContainer from './components/autorization/autorizationContainer';
import CardsContainer from './components/cards/cardsContainer';
import HeaderConteiner from './components/header/headerContainer';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPostState, getUserInfoState, setPhotosState } from './store/slices/cardsSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //эти переменные идут в редакс , затем в компаненты
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();
  //гет запросы
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      //изменяем массив, чтоб мусора не было
      setUsers(
        res.data.map((val) => ({
          id: val.id,
          name: val.name,
          company: val.company.name,
        })),
      );
    };

    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      let data = await res.data;

      setPosts(
        data.map((val) => ({
          id: val.userId,
          body: val.body,
          title: val.title,
        })),
      );
    };

    const getPhotos = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500');
      let data = await res.data;

      setPhotos(
        data.map((val) => ({
          id: val.albumId,
          url: val.url,
        })),
      );
    };
    getPhotos();
    getPosts();
    getUsers();
  }, []);

  //диспатчим данные в стейт
  if (posts.length > 0 && users.length > 0 && photos.length > 0) {
    dispatch(setPostState(posts));
    dispatch(getUserInfoState(users));
    dispatch(setPhotosState(photos));
  }
  //auth?
  const isAuth = useSelector((state) => state.auth.isAuth);

  //jsx
  return isAuth ? (
    <div className="App">
      <HeaderConteiner />
      <Routes>
        <Route path="*" element={<AutorizationContainer />} />
        <Route path="/cards" element={<CardsContainer />} />
      </Routes>
    </div>
  ) : (
    <div className="App">
      <HeaderConteiner />
      <Routes>
        <Route path="*" element={<AutorizationContainer />} />
      </Routes>
    </div>
  );
}

export default App;

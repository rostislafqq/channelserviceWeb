const Autorization = ({
  setLogin,
  setPassword,
  login,
  password,
  onSubmit,
  isRealLogin,
  isRealPas,
}) => {
  return (
    <div className="home">
      <h3 className="home__autorization">Autorization</h3>

      <form className="home__form" autoComplete="on">
        <label className="home__label" htmlFor="username">
          login
        </label>
        <input
          className={isRealLogin ? 'home__input' : ' bad '}
          type="text"
          name="login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <br />
        <label className="home__label" htmlFor="username">
          password
        </label>
        <input
          className={isRealPas ? 'home__input' : 'bad'}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>

      <button
        className="home__authLink"
        onClick={() => {
          onSubmit();
        }}>
        Submit
      </button>
    </div>
  );
};

export default Autorization;

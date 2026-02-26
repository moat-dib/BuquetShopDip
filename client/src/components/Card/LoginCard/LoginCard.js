import { Link } from "react-router-dom";
import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Войти</h1>
        </div>
        <div className="login__inputs">
          <div className="email__input__container input__container">
            <label className="email__label input__label">Почта</label>
            <input
              type="email"
              className="email__input login__input"
              placeholder="example@yandex.tv"
            />
          </div>
          <div className="password__input__container input__container">
            <label className="password__label input__label">Пароль</label>
            <input
              type="password"
              className="password__input login__input"
              placeholder="**********"
            />
          </div>
          <div className="login__button__container">
            <button className="login__button">Войти</button>
          </div>
        </div>
        <div className="login__other__actions">
          <div className="login__forgot__password">Забыл пароль?</div>
          <div className="login__new__account">
            Нет аккаунта?{" "}
            <Link to="/account/register">Создать аккаунт</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;

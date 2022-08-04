import Modal from "../components/Modal";
import { useState } from "react";

import "./Morepage.scss";

const Calcpage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <section className="pages__section">
        <div className="pages__background calc__background"></div>
        <div className="container">
          <article className="pages__article">
            <div className="title-top d-fl">
              <span>Дата публикации: 01/06/2017</span>
              <span>5 000+ заявок</span>
            </div>
            <h1>
              Калькулятор <span>ежемесячного дохода</span> от продажи
              отработанных масел
            </h1>
            <p className="content-top">
              Отработанное масло представляет колоссальную опасность для Вашего
              здоровья.
              <br />
              <br />
              Вы можете обратиться в сертифицированный пункт приема переработки
              и пополнить Ваш карман. Избавляясь от отработанного масла
              правильным путем, вы сохраняете чистоту природы и шагаете рука об
              руку с ‘’Экология сервис’’. Позаботимся о здоровом будущем
              поколении вместе.
            </p>
            <div className="content-center d-fl-col">
              <div className="society d-fl-col">
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#mail-page"></use>
                  </svg>
                </a>
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#phone-page"></use>
                  </svg>
                </a>
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#vk-page"></use>
                  </svg>
                </a>
              </div>

              <h3>"Экология Сервис" – Ваш дополнительный источник доходов</h3>
              <button
                className="btn pages__btn"
                onClick={() => setModalActive(true)}
              >
                Продать
              </button>
              <a className="pages__email" href="/">
                ecos172@yandex.ru
              </a>
            </div>
            <p className="content-bottom">
              Калькулятор отражает только примерный уровень дохода от продажи
              отработанных масел, для того чтобы точно рассчитать прибыль,
              пожалуйста, свяжитесь с нами по телефону или оставьте заявку
              онлайн
            </p>
          </article>
        </div>
      </section>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          possimus distinctio, ut eveniet adipisci, accusamus aliquid dicta id
          impedit et rerum dolores. Nihil porro beatae dignissimos tempore
          repellendus, magnam saepe. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus possimus distinctio, ut eveniet adipisci,
          accusamus aliquid dicta id impedit et rerum dolores. Nihil porro
          beatae dignissimos tempore repellendus, magnam saepe. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minus possimus
          distinctio, ut eveniet adipisci, accusamus aliquid dicta id impedit et
          rerum dolores. Nihil porro beatae dignissimos tempore repellendus,
          magnam saepe.
        </p>
      </Modal>
    </main>
  );
};

export { Calcpage };
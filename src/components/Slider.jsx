import { useState, useEffect } from "react";

const Slider = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const initializeSwiper = () => {
      setSwiper(
        new Swiper(".swiper-container", {
          slidesPerView: "auto",
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        })
      );
    };

    initializeSwiper();

    // Cleanup Swiper instance on unmount
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="card" style={{ "--clr": "#3f0303" }}>
        <div className="img-box">
          <img
            src="https://i.ibb.co/hmvSn8r/547-1920x1080-desktop-1080p-dota-2-wallpaper-photo.jpg"
            alt="Dota 2"
          />
        </div>
        <div className="content">
          <h2>Dota 2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti repellat
            quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#202A3A" }}>
        <div className="img-box">
          <img src="https://i.ibb.co/1nvYmvL/fb-image.png" alt="CS GO" />
        </div>
        <div className="content">
          <h2>CS GO</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti repellat
            quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#DA3E4B" }}>
        <div className="img-box">
          <img
            src="https://i.ibb.co/XkhBZDp/ESPORTS-Riot-Games-overhauling-Valorant-esports-for-2023-scaled.jpg"
            alt="Valorant"
          />
        </div>
        <div className="content">
          <h2>Valorant</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti repellat
            quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>

        <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
      </div>
    </div>
  );
};

export default Slider;

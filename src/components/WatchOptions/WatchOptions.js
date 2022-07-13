import React from "react";
import "../WatchOptions/WatchOptions.scss"

export default function WatchOptions() {
  return (
    <section className="options">
      <nav className="options__nav-container">
        <div className="options__seven-container">
          <img className="options__seven-image" src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_series_7_light__dv9ck4f6pyi6_large.svg" alt="Series 7 Watch" />
          <p className="options__seven">Apple Watch Series 7 </p>
        </div>
        <div className="options__se-container">
          <img className="options__se-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_se_light__c2mzuz6w15km_large.svg" alt="SE Watch" />
          <p className="options__se">Apple Watch SE</p>
        </div>
        <div  className="options__three-container">
          <img className="options__three-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_series_3_light__mmwjed73owia_large.svg" alt="Series 3 Watch" />
          <p className="options__three">Apple Watch Series 3</p>
        </div>
        <div className="options__nike-container">
          <img className="options__nike-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_nike_light__b7zt65jh0i76_large.svg" alt="Nike Watch" />
          <p className="options__nike">Apple Watch Nike</p>
        </div>
        <div  className="options__hermes-container">
          <img className="options__hermes-image" src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_hermes_light__danq731vuiy6_large.svg" alt="Hermes Watch" />
          <p className="options__hermes">Apple Watch Hermes</p>
        </div>
        <div  className="options__studio-container">
          <img className="options__studio-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_studio_light__btlmt8t0oe02_large.svg" alt="Studio Watch" />
          <p className="options__studio">Apple Watch Studio</p>
        </div>
        <div  className="options__compare-container">
          <img className="options__compare-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_compare__b9nnoiqjkxki_large.svg" alt="Compare Watch" />
          <p className="options__compare">Compare</p>
        </div>
        <div  className="options__bands-container">
          <img  className="options__band-image" src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_bands__fyke1oo6sfyy_large.svg" alt="Bands Watch" />
          <p className="options__bands">Bands</p>
        </div>
        <div  className="options__airpods-container">
          <img className="options__airpods-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_airpods__b481yj4nw0vm_large.svg" alt="AirPods Watch" />
          <p className="options__airpods">AirPods</p>
        </div>
        <div  className="options__accessories-container">
          <img className="options__accessories-image" src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_accessories__bu98chbn5rea_large.svg" alt="Accessories Watch" />
          <p className="options__accessories">Accessories</p>
        </div>
        <div className="options__fitness-container">
          <img className="options__fitness-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_fitness__gb78ob6kpiem_large.svg" alt="Fitness Watch" />
          <p className="options__fitness">Apple Fitness+</p>
        </div>
        <div className="options__os-container">
          <img className="options__os-image"  src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_watch_os__bv24twycj3aq_large.svg" alt="OS Watch" />
          <p className="options__os">watchOS</p>
        </div>
        <div className="options__shop-container">
          <img src="https://www.apple.com/v/watch/ax/images/overview/icons/watch_nav_shop_watch_light__fkrdcz8nfwi2_large.svg" alt="Shop Watch" />
          <p className="options__shop">Shop</p>
        </div>
      </nav>
    </section>
  );
}

import Link from "next/link";
import React from "react";

const LocationOne = () => {
  return (
    <>
      <section className="locations-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Visit Us Today</span>
            <h2>Our Locations</h2>
          </div>
          <div className="map-box">
            <figure className="map">
              <img src="/images/icons/dotted-map.png" title="Hash Stack" />
            </figure>
            {/* Location 1*/}
            <div className="location location-1">
              <span className="location-dot" />
              <div className="location-info">
                <ul className="info-list">
                  <li>
                    <Link href="tel:+880123456789">(+91) 756 933 7031</Link>
                  </li>
                  <li>
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India
                  </li>
                  <li>
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Location 2*/}
            <div className="location location-2">
              <span className="location-dot" />
              <div className="location-info">
                <ul className="info-list">
                  <li>
                    <Link href="tel:+880123456789">(+91) 756 933 7031</Link>
                  </li>
                  <li>
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India
                  </li>
                  <li>
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Location 3*/}
            <div className="location location-3 align-center">
              <span className="location-dot" />
              <div className="location-info">
                <ul className="info-list">
                  <li>
                    <Link href="tel:+880123456789">(+91) 756 933 7031</Link>
                  </li>
                  <li>
                    {" "}
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India
                  </li>
                  <li>
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Location 4*/}
            <div className="location location-4 align-right">
              <span className="location-dot" />
              <div className="location-info">
                <ul className="info-list">
                  <li>
                    <Link href="tel:+880123456789">(+91) 756 933 7031</Link>
                  </li>
                  <li>
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India{" "}
                  </li>
                  <li>
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Location 5*/}
            <div className="location location-5 align-right">
              <span className="location-dot" />
              <div className="location-info">
                <ul className="info-list">
                  <li>
                    <Link href="tel:+880123456789">+880123456789</Link>
                  </li>
                  <li>
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India
                  </li>
                  <li>
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationOne;

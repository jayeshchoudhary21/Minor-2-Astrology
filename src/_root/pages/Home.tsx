
// import { Models } from "appwrite";
import zodiacWheel from '../../../public/assets/images/zodiac-wheel.png';
import MohanImage from '../../../public/assets/images/Mohanlal.png';
import News1 from '../../../public/assets/images/News1.png';
import News2 from '../../../public/assets/images/News2.png';
import News3 from '../../../public/assets/images/News3.png';
// import Logo from '../../../public/assets/images/LOGO.png';



export const Home = () => {


  return (
    <div >


      <div className="topimg">
        <div className="topbar1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                {/* <img
                  src={Logo}
                  className="img-responsive"
                  alt="logo"
                  style={{ paddingTop: '12px' }}
                /> */}
              </div>

              {/* <div className="col-md-8"></div>

              <div className="col-md-1">
                <div
                  className="fa fa-2x fa-facebook"
                  style={{ paddingTop: '12px', paddingLeft: '70px', color: 'white' }}
                />
              </div>

              <div className="col-md-1">
                <div
                  className="fa fa-2x fa-twitter"
                  style={{ paddingTop: '12px', color: 'white' }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <div className="container">



        <div className="container">
          <div className="row">
            <div className="col-md-12 zodic">
              <div className="col-md-3 cont1"></div>
              <div className="col-md-5 cont2">
                <img src={zodiacWheel} className="img-responsive" alt="Zodiac Wheel" />
              </div>
              <div className="col-md-2 cont3"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="city">
                <div className="city_1">
                  <div className="text">Checkout your June horoscope</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="june1">
                <div className="june1_cover">
                  <div className="june1_cover_text">TODAY'S<br />HOROSCOPE</div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="june2">
                <div className="june2_cover">
                  <div className="june2_cover_text">TOMORROW'S<br />HOROSCOPE</div>
                </div>
              </div>
              <br />
              <div className="june3">
                <div className="june3_cover">
                  <div className="june3_cover_text">YOUR<br />HEALTH</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


      <div className="container">
        <div className="row">
          <br />

          {/* SHARE YOUR PROBLEM */}
          <div className="col-md-4">
            <div className="box">
              <div className="col-md-12">
                <b className="box_head">
                  <i className="fa fa-comments"></i> SHARE YOUR PROBLEM, GET SOLUTIONS
                </b>
              </div>

              <div className="box_text">
                <div className="col-md-6">
                  <br />
                  <p><i className="fa fa-heart-o"></i> LOVE</p>
                  <p><i className="fa fa-handshake-o"></i> RELATIONSHIP</p>
                  <p><i className="fa fa-suitcase"></i> CAREER</p>
                  <p><i className="fa fa-line-chart"></i> BUSINESS</p>
                  <p><i className="fa fa-child"></i> FAMILY</p>
                  <p><i className="fa fa-dollar"></i> FINANCE</p>
                </div>

                <div className="col-md-6" style={{ textAlign: 'center' }}>
                  <img src={MohanImage} alt="Mohan" />
                  <b>Mohan Green Topi Wala</b><br />
                  Experience<br />
                  15 Years
                </div>
              </div>

              <div className="col-md-12" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <button className="btn btn-success">TALK TO ASTROLOGER NOW</button>
              </div>
            </div>
          </div>

          {/* DAILY HOROSCOPE */}
          <div className="col-md-4">
            <div className="box">
              <b className="box_head"><i className="fa fa-star"></i> DAILY HOROSCOPES</b>
              <div className="box_text">
                <br /><br />
                <p>
                  Daily horoscopes are prepared by astrologers taking into account the planetary configurations for the day.
                  Most people, whether they admit it or not, are addicted to reading their daily horoscope first thing in the morning
                  in the newspaper, or online. Daily horoscopes are generic in nature, people easily relate to them in some way or another,
                  and as they mostly focus on the positive aspects, it brightens up their day and makes them happy, and they plan out their day accordingly.
                </p>
              </div>
            </div>
          </div>

          {/* TOP NEWS */}
          <div className="col-md-4">
            <div className="box">
              <div className="col-md-12">
                <b className="box_head"><i className="fa fa-newspaper-o"></i> TOP STORIES</b>
              </div>
              <br /><br /><br />

              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <img src={News1} className="img-responsive" alt="News1" />
                  </div>
                </div>
                <div className="col-md-9">
                  <b>Weekly Horoscope - Free Astrology Predictions This Week</b>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <img src={News2} className="img-responsive" alt="News2" />
                  </div>
                </div>
                <div className="col-md-9">
                  <b>Your Cosmic Calendar For The Upcoming Week</b>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <img src={News3} className="img-responsive" alt="News3" />
                  </div>
                </div>
                <div className="col-md-9">
                  <b>Shani Jayanti</b>
                </div>
              </div>

              <div className="col-md-12" style={{ textAlign: 'center', paddingTop: '5px' }}>
                <button className="btn btn-danger">MORE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-success">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tarot_back">
        {/* <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ marginLeft: "340px" }}>
              <div className="card_text" style={{ fontSize: "30px", marginLeft: "-110px" }}>
                Get a simple yes or no answer with actionable advice
              </div>
              <div className="card_text">PICK A CARD</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-3" style={{ marginLeft: "300px" }}>
              {[...Array(8)].map((_, index) => (
                <img
                  key={index}
                  src="Taroit%20Card.png"
                  className="img-responsive card"
                  style={{
                    marginLeft: `${index * 50}px`,
                    marginTop: index === 0 ? 0 : "-454px",
                  }}
                  alt={`Tarot Card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div> */}

        {/* SITE STAT */}
        <br /><br />
        <div className="back">
          <div className="container">
            <div className="row" style={{ marginTop: "45px" }}>
              <div className="col-md-2"><i className="fa fa-3x fa-mobile"></i> 80% Mobile Users</div>
              <div className="col-md-2"><i className="fa fa-3x fa-umbrella"></i> Trusted Since 1995</div>
              <div className="col-md-2"><i className="fa fa-3x fa-file-text"></i> 99.25 Million Page Views</div>
              <div className="col-md-2"><i className="fa fa-3x fa-users"></i> 92 Lacs Active Users</div>
              <div className="col-md-2"><i className="fa fa-3x fa-globe"></i> Users from 180 Countries</div>
              <div className="col-md-2"><i className="fa fa-3x fa-smile-o"></i> 50Million+ Active Customers</div>
            </div>
          </div>
        </div>

        {/* EMAIL SUBSCRIBE */}
        <div className="back1">
          <div className="container">
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-9">
                <div className="back1_text">
                  Stay Updated With Your Daily, Weekly, Monthly & Yearly{" "}
                  <span style={{ fontSize: "38px" }}>Horoscopes</span> & Read Predictions By Our Expert Astrologers
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="email"
                  placeholder="Input Email"
                  className="form-control"
                  style={{ marginTop: "30px" }}
                />
              </div>
              <div className="col-md-1" style={{ marginTop: "30px", marginLeft: "-25px" }}>
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHTS */}
        <div className="copy_back">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                Copyright &copy; 2025 Astro Ventures Private Limited.
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}

export default Home;


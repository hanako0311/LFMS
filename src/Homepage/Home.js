import { useCallback } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import LostButtonImage from './/lost-btn.png';
import userImage from './Placeholder.png';
import logo from './LF splash 1.png';
import home from './Home.png';
import profile from './profile.png';
import found from './report found.png';
import lost1 from './Group.png';
import lost2 from './search.png';
import magnifier from './magnifier.png';
import history from './image 5.png';
import back from './Subtract.png';
import tablet from './tablet.png';
import umbrella from './umbrella.png';
import money from './money.png';
import tumbler from './tumbler.png';
import calc from './calc.png';
import heart from './heart.png';

const Home = () => {
  const navigate = useNavigate();

  const onContainer1Click = useCallback(() => {
    // Please sync "Dashboard Lost Items" to the project
  }, []);

  const onRectangle1Click = useCallback(() => {
    // Please sync "Status/Claim Item Owner Side" to the project
  }, []);

  const onReportLostClick = useCallback(() => {
    navigate("/report-lost-items"); // Update with your form's route
  }, [navigate]);

  const onReportFoundClick = useCallback(() => {
    navigate("/report-found-items"); // Update with your form's route
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onSubtractClick = useCallback(() => {
    // Please sync "Landing" to the project
  }, []);

  const onSearchBarContainerClick = useCallback(() => {
    // Please sync "Search item" to the project
  }, []);

  return (
    <div className="dashboard-found-items-defaul">
      <div className="top-menu">
        <div className="bg" />
        <img className="top-menu-child" alt="" src="/line.svg" />
        <div className="user">
          <img className="placeholder-icon" alt="" src={userImage} />
          <div className="name">
            <b className="zara-wardani">Zara Wardani</b>
            <div className="admin">Admin</div>
          </div>
        </div>
      </div>
      <b className="dashboard">Dashboard</b>
      <div className="content">
        <div className="overview">
          <div className="col-1" />
          <div className="col-2">
            <div className="div" onClick={onContainer1Click}>
              <div className="content1">
                <div className="found-items">Found Items</div>
              </div>
              <b className="b">15</b>
            </div>
          </div>
        </div>
      </div>
      <div className="div1" onClick={onContainer1Click}>
        <div className="content2">
          <div className="lost-items">Lost Items</div>
        </div>
        <b className="b">34</b>
      </div>
      <div className="found-items-2">
        <div className="div2">
          <div className="image">
            <div className="background" />
            <img className="image-icon" alt="" src={tablet} />
            <div className="tags">
              <div className="tag">
                <div className="tech">Tech</div>
              </div>
              <div className="tag">
                <div className="tech">Electronics</div>
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content4">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">Huawei Tablet</b>
              </div>
              <div className="content5">
                <div className="matebook-14d-grey-container">
                  <p className="matebook-14d-grey">Matebook 14d, Grey</p>
                  <p className="matebook-14d-grey">Found in Library</p>
                </div>
              </div>
            </div>
          </div>
          <div className="child" />
          <div className="claim">Claim</div>
        </div>
        <div className="div3">
          <img className="image-3-icon" alt="" src={umbrella} />
          <div className="content6">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content7">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">Blue Umbrella</b>
              </div>
              <div className="content8">
                <div className="blue-automatic-found-container">
                  <p className="matebook-14d-grey">Blue, Automatic</p>
                  <p className="matebook-14d-grey">Found in GLE Study Area</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item" onClick={onRectangle1Click} />
          <div className="claim1">Claim</div>
          <div className="image1">
            <div className="tags1">
              <div className="tag">
                <div className="tech">Essentials</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div3">
          <img className="image-3-icon1" alt="" src={money} />
          <div className="content6">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content7">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">100 Php</b>
              </div>
              <div className="content11">
                <div className="blue-automatic-found-container">
                  <p className="matebook-14d-grey">Year 2008</p>
                  <p className="matebook-14d-grey">Found in Accounting</p>
                </div>
                <div className="content-child" />
              </div>
            </div>
          </div>
          <div className="inner" />
          <div className="claimed">Claimed</div>
          <div className="image1">
            <div className="tags1">
              <div className="tag">
                <div className="tech">Cash</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="found-items1">
        <div className="div2">
          <div className="image">
            <div className="background" />
            <img className="image-icon" alt="" src={tumbler} />
            <div className="tags3">
              <div className="tag">
                <div className="tech">Tumbler</div>
              </div>
            </div>
          </div>
          <div className="content3">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content4">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">Aquaflask</b>
              </div>
              <div className="content5">
                <div className="matebook-14d-grey-container">
                  <p className="matebook-14d-grey">
                    40mL, Peaches and Cream, with Paracord and Booot
                  </p>
                  <p className="matebook-14d-grey">Found in Library</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-div" />
          <div className="claim2">Claim</div>
        </div>
        <div className="div3">
          <img className="image-3-icon" alt="" src={calc} />
          <div className="content6">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content7">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">Scientific Calculator</b>
              </div>
              <div className="content8">
                <div className="blue-automatic-found-container">
                  <p className="matebook-14d-grey">Pink and Violet, Casio</p>
                  <p className="matebook-14d-grey">Found in GLE Study Area</p>
                </div>
              </div>
            </div>
          </div>
          <div className="child1" />
          <div className="claimed1">Claimed</div>
          <div className="image1">
            <div className="tags4">
              <div className="tag">
                <div className="tech">Tech</div>
              </div>
              <div className="tags5">
                <div className="tag">
                  <div className="tech">Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div3">
          <img className="image-3-icon1" alt="" src={heart} />
          <div className="content6">
            <div className="detail">
              <div className="min-ago">December 05, 2021</div>
              <div className="min-ago">3 min Ago</div>
            </div>
            <div className="content7">
              <div className="title">
                <div className="line" />
                <b className="huawei-tablet">Uyab</b>
              </div>
              <div className="content11">
                <div className="blue-automatic-found-container">
                  <p className="matebook-14d-grey">Kang kinsa ning uyab</p>
                  <p className="matebook-14d-grey">Found in Accounting</p>
                </div>
                <div className="content-child" />
              </div>
            </div>
          </div>
          <div className="child" />
          <div className="claim3">Claim</div>
          <div className="image1">
            <div className="tags1">
              <div className="tag">
                <div className="tech">igat2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-menu1">
        <div className="bg1" />
        <img className="top-menu-item" alt="" src="/line1.svg" />
        <div className="nav">
          <div className="report-lost" onClick={onReportLostClick}>
            <img className="group-icon" alt="" src={lost1} />
            <div className="search-dollar-search-pay-prod">
              <img
                className="search-dollar-search-pay-prod-icon"
                alt=""
                src={lost2}
              />
              <b className="b2">?</b>
            </div>
          </div>
          <img
            className="report-found-icon"
            alt=""
            src={found}
            onClick={onReportFoundClick}
          />
          <img
            className="profile-icon"
            alt=""
            src={profile}
            onClick={onProfileClick}
          />
          <img className="home-icon" alt="" src={home} />
          <img className="image-5-icon" alt="" src={history} />
        </div>
        <img
          className="subtract-icon"
          alt=""
          src={back}
          onClick={onSubtractClick}
        />
      </div>
      <div className="search-bar" onClick={onSearchBarContainerClick}>
        <div className="content21">
          <img className="magnifier-icon" alt="" src={magnifier} />
          <div className="search-here">Search here...</div>
        </div>
      </div>
      <img className="lf-splash-1" alt="" src={logo} />
    </div>
  );
};

export default Home;

import TopBanner from './components/TopBanner'

import './App.css';
import smile from './images/smile.jpg'

function App() {
  return (
    <header>
      <TopBanner />
      <div className='subBanner'>
        <div className='mainContainer'>
          <div className='bannerGrid'>
            <div className='contentContainer'>
              <div className='divblock9'>
                <h1 className='heading'>
                  <a className='logo'>
                    <span class="logoText">Flossy</span>
                  </a>
                  <br/>
                  For Patients Without
                  <br/>
                  Dental Insurance
                </h1>
                <ul className="list">

                  <li className="listItem">Save up to 50% on&nbsp;Dental Treatments</li>
                  <li className="listItem"></li>
                  <li className="listItem">Membership is <span className="hero-span"><strong>FREE</strong></span><br/></li>
                  <li className="listItem">Top-Rated Dentists</li>
                  <li className="listItem"></li>
                  
                </ul>
                <div className="div-flex">

                  <div class="app-store-link-wrapper">
                    <a href="" class="orange-button">Find A Dentist Near You</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;

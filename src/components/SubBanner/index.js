const SubBanner = () => {
  return (
    <div className='subBanner'>
      <div className='mainContainer'>
        <div className='bannerGrid'>
          <div className='contentContainer'>
            <div className='subBannerContent'>

              <h1 className='heading'>
                <a className='logo' href="#">
                  <span className="logoText">Flossy</span>
                </a>
                <br/>
                For Patients Without
                <br/>
                Dental Insurance
              </h1>

              <ul className="list">
                <li className="listItem">Save up to 50% on&nbsp;Dental Treatments</li>
                <li className="listItem"></li>
                <li className="listItem">Membership is <span className="listSpan"><strong>FREE</strong></span><br/></li>
                <li className="listItem">Top-Rated Dentists</li>
                <li className="listItem"></li>
              </ul>

              <a className="orange-button" href="#" >Find A Dentist Near You</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBanner;

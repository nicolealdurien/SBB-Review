import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="transbox">
        <p>
          <em>
            Thanks for visiting! <br />
            We will be adding additional content over time. To suggest questions
            or corrections, please email the site administrator at{' '}
            <a href="mailto:sbbreviewsite@gmail.com" className="email-link">
              sbbreviewsite@gmail.com
            </a>
            .
          </em>
        </p>
      </div>
      <div className="transbox">
        <p>
          <em>Please select your desired topic below:</em>
        </p>
        <br />
        <br />
        <NavLink className="nav-links" to="/ABO">
          1. A, B, O, and H Blood Groups
        </NavLink>
        <NavLink className="nav-links" to="/HLA">
          2. Human Leukocyte Antigens (HLA)
        </NavLink>
        <NavLink className="nav-links" to="/HDFN">
          3. Hemolytic Disease of the Fetus and Newborn (HDFN)
        </NavLink>
      </div>
    </div>
  );
};

export default App;

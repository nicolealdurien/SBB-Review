import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="header">
        <h1>
          <NavLink to="/" id="nav-logo">
            SBB Review Quizzes
          </NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Menu;

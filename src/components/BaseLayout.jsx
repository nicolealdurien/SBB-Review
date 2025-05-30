import { Menu } from './Menu';

const BaseLayout = (props) => {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
};

export { BaseLayout };

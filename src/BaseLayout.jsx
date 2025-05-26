import Menu from './Menu';

export default function BaseLayout(props) {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
}

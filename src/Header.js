export default function Header({ title }) {
  return (
    <header>
      <h1 id="header-div">{title}</h1>
    </header>
  );
}

// DEFAULT PROPS
Header.defaultProps = {
  title: "Default Title",
};

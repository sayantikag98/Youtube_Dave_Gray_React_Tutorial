export default function Footer() {
  const date = new Date().toLocaleDateString();
  return (
    <footer>
      <p id="footer-div">Copyright © {date.split("/")[2]}</p>
    </footer>
  );
}

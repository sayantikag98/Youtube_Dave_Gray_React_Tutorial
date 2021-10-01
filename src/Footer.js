export default function Footer() {
  const date = new Date().toLocaleDateString();
  return (
    <footer id="footer-div">
      <p>Copyright © {date.split("/")[2]}</p>
    </footer>
  );
}

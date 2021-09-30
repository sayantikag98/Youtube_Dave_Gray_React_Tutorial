export default function Footer({ count }) {
  const date = new Date().toLocaleDateString();
  const str = count === 1 ? "Item" : "Items";
  return (
    <footer id="footer-div">
      <p>
        {count} List {str}
      </p>
      <p>Copyright © {date.split("/")[2]}</p>
    </footer>
  );
}

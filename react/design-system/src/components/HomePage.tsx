import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Link to="badge">Badge Component</Link>
      <Link to="button">Button Component</Link>
      <Link to="navbar">Navbar Component</Link>
      <Link to="text-input">Text Input Component</Link>
      <Link to="text-area">Text Area Component</Link>
      <Link to="radio-cards">Radio Cards Component</Link>
      <Link to="tab-menu">Tab Menu Component</Link>
      <Link to="tabs">Tabs Component</Link>
      <Link to="toggle">Toggle Component</Link>
      <Link to="tooltip">Tooltip Component</Link>
      <Link to="checkbox">Checkbox Component</Link>
      <Link to="pagination">Pagination Component</Link>
      <Link to="dropdown">Dropdown Menu Component</Link>
      <Link to="modal-dialog">Modal Dialog Component</Link>
      <Link to="toast">Toast Component</Link>
    </div>
  );
}

export default HomePage;

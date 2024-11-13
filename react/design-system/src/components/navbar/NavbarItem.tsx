function NavbarItem({ text, href = "#" }: { text: string; href: string }) {
  return (
    <li className="navbar-item text-neutral-900 font-normal text-sm px-4 py-3 w-fit">
      <a href={href} className="navbar-link ">
        {text}
      </a>
    </li>
  );
}

export default NavbarItem;

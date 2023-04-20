import MenuLink from "./MenuLink/MenuLink";

const Menu = ({ toggleMenu }) => {
  const onClick = () => toggleMenu(false);
  return (
    <>
      <MenuLink to="/" label="O projekcie" onClick={onClick} />
      <MenuLink to="/Map" label="Mapa szablonów" onClick={onClick} />
      <MenuLink label="Biogramy" to="/biogramList" onClick={onClick} />
    </>
  );
};

export default Menu;

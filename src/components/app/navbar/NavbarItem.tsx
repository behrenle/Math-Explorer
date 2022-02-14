import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledLink = styled(Link)`
  padding: 0 20px;
  color: white;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  ${(props: { enabled: string }) =>
    props.enabled === "true"
      ? `border-bottom: 4px solid white; padding-top: 4px;`
      : null}
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: 2px solid white;
  }
`;

interface Props {
  name: string;
  path: string;
}

const NavbarItem: React.FC<Props> = ({ name, path }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [t] = useTranslation();
  useEffect(() => {
    setActive(location.pathname === path);
  }, [location, path]);

  return (
    <StyledLink to={path} enabled={active.toString()}>
      {t(name)}
    </StyledLink>
  );
};

export default NavbarItem;

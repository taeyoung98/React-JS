// https://velog.io/@bigbrothershin/React-Router
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  margin: 30px 0;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;

  &:focus {
    background-color: gold;
    color: white;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <header>
    <List>
      <li>
        <SLink to="/prices">PRICES</SLink>
      </li>
      <li>
        <SLink to="/exchanges">EXCHANGES</SLink>
      </li>
      <li>
        <SLink to="/coins">COINS</SLink>
      </li>
    </List>
  </header>
));

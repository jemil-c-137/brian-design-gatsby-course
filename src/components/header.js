import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import { Button } from "./button"

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Header = () => (
  <Nav>
    <NavLink to="/">EXPLORIX</NavLink>
    <Bars />
    <NavMenu>
      {MenuData.map(item => {
        return (
          <NavLink key={item.link} to={item.link}>
            {item.title}
          </NavLink>
        )
      })}
    </NavMenu>
    <NavBtn>
      <Button primary round to="/trips" >Book a flight</Button>
    </NavBtn>
  </Nav>
)

export default Header

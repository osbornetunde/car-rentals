import { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="nav-wrapper">
      <Nav>
        <NavItem>
          <NavLink href="#" active>
            Home
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Electronics
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Mobile, Computer</DropdownItem>
            <DropdownItem>All Mobile Phones</DropdownItem>
            <DropdownItem>All Mobile Accessories</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Case & Covers</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Appliances
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>TV, Appliances & Electronics</DropdownItem>
            <DropdownItem>Televisions</DropdownItem>
            <DropdownItem>HeadPhones</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Speaker</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">New Arrivals</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavMenu;

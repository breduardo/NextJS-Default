import React, { useContext, useState, useRef } from "react";

// import { logout } from "src/services/auth";
// import { UserContext } from "src/App";

import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const HeaderSite = (props) => {
  //   const { user, actions } = useContext(UserContext);

  const [user, setUser] = useState(useSession());

  console.log(user);
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav classNameName="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <aside className="sidebar">
        <div className="header">
          <button className="toggle" data-sidebar="true">
            <ion-icon name="menu"></ion-icon>
          </button>
        </div>
        <ul className="nav">
          <li>
            <a href="<?=HTTP;?>/<?=LANGUAGE;?>">
              <ion-icon name="pie-chart" className="me-3"></ion-icon>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="search" className="me-3"></ion-icon>
              <span>Pesquisas</span>
            </a>
          </li>
          <li>
            <a href="<?=HTTP;?>/<?=LANGUAGE;?>/collaborator">
              <ion-icon name="people" className="me-3"></ion-icon>
              <span>Colaboradores</span>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="list" className="me-3"></ion-icon>
              <span>Questionários</span>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="file-tray-full" className="me-3"></ion-icon>
              <span>Modelos de resposta</span>
            </a>
          </li>
        </ul>
      </aside>
      <header className="default">
        <div className="container-fluid">
          <div className="content">
            <div className="menu">
              <button className="toggle" data-sidebar="true">
                <ion-icon name="menu"></ion-icon>
              </button>
              <h6 className="page-title ms-3">T</h6>
            </div>
            <div className="logo center">
              <img src="/assets/images/white-icon.png" />
            </div>
            <div className="user-actions dropdown_">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="user">
                  {/* Dropdown Button */}

                  <span className="me-2">
                    {user.data?.user.image && (
                      <img
                        referrerPolicy="no-referrer"
                        style={{ height: "inherit", borderRadius: "inherit" }}
                        src={user.data.user.image}
                      />
                    )}
                    <FaUser />
                  </span>

                  <ion-icon name="caret-down" className="ms-2"></ion-icon>
                  {user?.status === "authenticated" ? user.data.user.name : ""}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {user?.status !== "authenticated" && (
                    <Dropdown.Item href="#">
                      <Link legacyBehavior passHref href="/auth/signin">
                        Acessar conta
                      </Link>
                    </Dropdown.Item>
                  )}
                  {user?.status === "authenticated" && (
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sair
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <ul>
                <li>
                  <a href="<?=HTTP;?>/<?=LANGUAGE;?>/user/profile">Perfil</a>
                  <a href="<?=HTTP;?>/<?=LANGUAGE;?>/login/exit">Sair</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(HeaderSite);

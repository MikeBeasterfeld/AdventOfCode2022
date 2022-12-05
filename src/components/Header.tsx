import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Container className="wrapper">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Advent of Code 2022</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Nav.Link href="/day1part1">Day 1 Part 1</Nav.Link>
            <Nav.Link href="/day1part2">Day 1 Part 2</Nav.Link>
            <Nav.Link href="/day2part1">Day 2 Part 1</Nav.Link>
            <Nav.Link href="/day2part2">Day 2 Part 2</Nav.Link>
            <Nav.Link href="/day3part1">Day 3 Part 1</Nav.Link>
            <Nav.Link href="/day3part2">Day 3 Part 2</Nav.Link>
            <Nav.Link href="/day4part1">Day 4 Part 1</Nav.Link>
            <Nav.Link href="/day4part2">Day 4 Part 2</Nav.Link>
          </Col>
          <Col xs={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Header;
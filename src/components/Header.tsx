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
          <Navbar.Brand href="/AdventOfCode2022">Advent of Code 2022</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Nav.Link href="/AdventOfCode2022/day1part1">Day 1 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day1part2">Day 1 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day2part1">Day 2 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day2part2">Day 2 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day3part1">Day 3 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day3part2">Day 3 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day4part1">Day 4 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day4part2">Day 4 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day5part1">Day 5 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day5part2">Day 5 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day6part1">Day 6 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day6part2">Day 6 Part 2</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day7part1">Day 7 Part 1</Nav.Link>
            <Nav.Link href="/AdventOfCode2022/day7part2">Day 7 Part 2</Nav.Link>
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
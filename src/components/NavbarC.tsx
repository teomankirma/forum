import { Navbar, Text } from "@nextui-org/react";

function NavbarC() {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text hideIn="xs">Forum</Text>
      </Navbar.Brand>
      <Navbar.Content
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link href="#">Sign Up</Navbar.Link>
        <Navbar.Link href="#">Sign In</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default NavbarC;

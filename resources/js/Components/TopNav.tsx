import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { styled } from 'styled-components';

const TopNav = () => (
    <Navbar bg="primary" data-bs-theme="light" fixed='top'>
        <Container className='text-center' style={{ width: 100 }}>
            <AppName>Clippy</AppName>
        </Container>
    </Navbar>
);

export default TopNav;

const AppName = styled.h3`
    color: white;
`;
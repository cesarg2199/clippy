import { Button, ListGroup, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import TopNav from '@/Components/TopNav';
import { styled } from 'styled-components';

const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
};

const Main = () => (
    <>
        <TopNav />
        <CopiedContainer>
            <ListGroup.Item action href="#link1">
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
                This one is a button
            </ListGroup.Item>
        </CopiedContainer>
        <Navbar expand="lg" className="bg-body-tertiary" fixed='bottom'>
            <Container>
                <PasteButton variant='primary' size='lg'>Paste</PasteButton>
            </Container>
        </Navbar>
        
    </>
);

export default Main;

const CopiedContainer = styled(ListGroup)`
    border-radius: 0;
    margin-top: 53px;
    height: 450px;
    overflow-y: scroll;
`;

const PasteButton = styled(Button)`
    width: 100%;
    height: 80px
`;
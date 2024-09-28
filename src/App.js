import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './Components/playerList';
import Tabplayers from './Data/players';
import { Container, Card } from 'react-bootstrap';


function App() {
  return (

      <Container className='mt-5'>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <PlayerList player={Tabplayers} />
          </Card.Body>
        </Card>
      </Container>
  );
}

export default App;

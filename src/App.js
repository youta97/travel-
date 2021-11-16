import './App.css';
import {Card, Button} from 'react-bootstrap';
import bizerte from './bizerte.jpg'
import Tabarka from './tabrka.jpg'
import sousse from './sousse.jpg'
function App() {
  return (
    <div className="cardtotal">
    <Card style={{ width: '18rem' }}>
  <Card.Img src={Tabarka} />
  <Card.Body>
    <Card.Title className="tabrka"> Tabarka </Card.Title>
    <Card.Text>
    Tabarka (arabe : طبرقة )est une ville côtière du Nord-Ouest de la Tunisie située à une centaine de kilomètres de Tunis et à quelques kilomètres de la frontière algéro-tunisienne. Son nom est étymologiquement d'origine berbère et signifierait « pays des bruyères » ou peut-être du gênois Tua barca.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={bizerte} />
  <Card.Body>
    <Card.Title className="bizerte"> bizerte </Card.Title>
    <Card.Text>
    Bizerte ou Banzart (arabe : بنزرت) est une ville du nord de la Tunisie située entre la mer Méditerranée et le lac de Bizerte. Elle est le chef-lieu d'un gouvernorat peuplé de plus d'un demi-million d'habitants. La ville compte 136 917 habitants en 2014.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={sousse}  />
  <Card.Body>
    <Card.Title className="sousse"> sousse </Card.Title>
    <Card.Text>
    Sousse (arabe : سوسة) est une ville portuaire de l'Est de la Tunisie, située à 143 kilomètres au sud de Tunis, et ouverte sur le golfe d'Hammamet (mer Méditerranée).

Capitale du Sahel tunisien — elle est parfois surnommée la « perle du Sahel » — et chef-lieu du gouvernorat du même nom, elle est la troisième municipalité du pays après Tunis et Sfax, et la quatrième agglomération, Nabeul étant la troisième.

La médina de Sousse est inscrite au patrimoine mondial de l'Unesco depuis 1988.
    </Card.Text>
   
  </Card.Body>
</Card>






</div>

















 
  );
}

export default App;

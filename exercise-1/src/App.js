import Header from './components/header';
import './App.css';
import Notification from './components/notifications';
import Mainsect from './components/paasivu';
import SideSect from './components/sidesect';

function App() {
  const notificationData = [
    {
      topic: 'Ohjelmointi',
      body: 'TVT20spo on tällä hetkellä opiskellut 1 vuoden, mutta ohjelmointi ei siltikään rullaa'
    },
    {
      topic: 'Koronaviirus',
      body: 'Tuhansia uusia korona tartuntoja ympäri maailmaa'
    },
    {
      topic:"Hauska fakta",
      body:"Kissat nukkuvat 70% niiden ajastaan"
    }
  ];
  const MainsectionData = [
    {
      Mainsection: 'Ulkomaat',
      category: 'Uutinen',
      context: 'Koronaviirus leviää entisestään ulkomailla. Suomessa uusia tartuntoja on todettu 420 ja ulkomailla yhteensä 7800, suurin osa näistä tarunnoinsta on todettu yhdesvalloissa'
    },
    {
      Mainsection: 'Urheilu',
      category: 'OulunKärpät',
      context: 'Kärpät ovat taas voittaneet sm-liigassa kultaa ja kaikki joukkueesta pyrkivät pelamaan nhl:ssä ensikaudella'
    },
    {
      Mainsection: 'Elämäntyyli',
      category: 'Fitness',
      context: '10 helppoa vinkkiä miten pysyt kunnossa ilman tekemättä mitään, numero 5 saattaa yllättää!'
    }
  ];
  const SideSectData =[
    {
      number: '1',
      category: 'Rikollisuus',
      context: 'Rikollisuus lisääntyy',
    },
    {
      number: '2',
      category: 'Oppiminen',
      context: 'Oppiminen on monelle haastavaa',
    },
    {
      number:'3',
      category:'kirjat',
      context:'Ihmiset lukevat vähän kirjoja'
    }
    ,
    {
      number:'4',
      category:'tekniikka',
      context:'uusi windows versio saatavilla'
    }
    ,
    {
      number:'5',
      category:'teollisuus',
      context:'uusia tehtaita rakennetaan'
    }
    ,
    {
      number:'6',
      category:'Oulu',
      context:'oulussa on vähän koronaa'
    }
    ,
    {
      number:'7',
      category:'helsinki',
      context:'helsingissä on paljon koronaa'
    }
  ]; 

  return (
    <div className='header_back'>
      <Header />
      <div className="flex_back">
      {
        notificationData.map(element=><Notification topic={element.topic} body={element.body}/>)
      }
      
      <div className="header_flex">
        <ul>
        {
          MainsectionData.map(element=><Mainsect Mainsection={element.Mainsection} category={element.category} context={element.context}/>)
        }
        </ul>
        <ul>
        <SideSect data= {SideSectData}/>
        <SideSect data= {SideSectData}/>
        <SideSect data= {SideSectData}/>
        </ul>
        
      </div>
      
      </div>
    </div>
  );
}


export default App;



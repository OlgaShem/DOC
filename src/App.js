import Card from './components/Card.js';
import Header from './components/Header';
import Plan from './components/Plan';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='firstScreen'>
        <div className='services'>
          <ul className='services__list'>
            <a href="" className='services__link'>
              <li>
                COVID TEST
              </li>
            </a>
            <a href="" className='services__link'>
              <li>
                HEALTH APP
              </li>
            </a>
            <a href="" className='services__link'>
              <li>
                SUPPLEMENTS
              </li>
            </a>
          </ul>
        </div>
        <div className='firstScreen__container'>
          <div className='firstScreen__text'>
            <h3 className='firstScreen__subtitle'> 
              Complete our simple fitness assesment and recieve your personalised workout plans to 
              get you one step closer to achieving your fitness goals.
            </h3>
            <h2 className='firstScreen__title'>
              Take our quick & easy fitness quiz in just 2 mins!
            </h2>
          </div>
          <div className='firstScreen__card-block card-block'>
            <Card className="first" 
              src="../img/plan1.jpg"
              title="Plan 1"
              subtitle="VIEW WORK OUT >">
            </Card>

            <Card className="second" 
              src="../img/plan2.jpg"
              title="Plan 2"
              subtitle="VIEW WORK OUT >">
            </Card>

            <Card className="third" 
              src="../img/plan3.jpg"
              title="Plan 3"
              subtitle="VIEW WORK OUT >">
            </Card>
          </div>
        </div>
      </div>

      <div className='secondScreen'>
        <div className='plan-group'> 
          <Plan
            name="Plan 1" 
            price="£30" 
            text="PER TIMEFRAME" 
            buttonText="Lorem">  
          </Plan>

          <Plan
            className="popular"
            name="Plan 2" 
            price="£45" 
            text="PER TIMEFRAME"
            listClass="black"
            buttonClass="pink"
            buttonText="Lorem">  
          </Plan>

          <Plan
            name="Plan 3" 
            price="£60" 
            text="PER TIMEFRAME" 
            buttonText="Lorem">  
          </Plan>
        </div>
      </div>
    </div>
  );
}

export default App;


import React from 'react';
import 'assets/styles/style.sass';
import { Switch,  Route, HashRouter } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { clearChannel } from 'redux/actions/channel-actions';

//Components
import Header from 'components/Header'
import Grid from 'components/ChannelsGrid'
import Channel from  'components/ChannelLayout'
import Recommended from  'components/RecommendedVideos'
import Footer from 'components/Footer'

// Google Analytics
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-121194497-5'); // Aqui pones tu identificador de cuenta de Google Analytics
  return (
    <HashRouter>
        <Header />
        <Grid />
        <Switch>
          <Route exact path="/">
            <Home />
            <Recommended />
          </Route>
          <Route path="/channel/canal-universidad">
            <Channel id='canal-universidad' />
          </Route>
          <Route path="/channel/canal41-xfn">
            <Channel id='canal41-xfn' />
          </Route>
          <Route path="/channel/magazine-empresario">
            <Channel id='magazine-empresario' />
          </Route>
          <Route path="/channel/batancoop">
            <Channel id='batancoop' />
          </Route>
          <Route path="/channel/aca-estamos">
            <Channel id='aca-estamos' />
          </Route>
          <Route path="/channel/basquet-vision">
            <Channel id='basquet-vision' />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  ReactGA.pageview('/');
  dispatch( clearChannel() )
  return (
    <section className="content">
        <div className="container">
          <div className="about">
            <div className="about-image-box">
                <img src={require('./assets/images/content-image.png')} alt="Family Cover" />
            </div>
            <div>
              <h2 className="title">Una nueva version de TV </h2>
              <h3 className="sub-title">M??s flexible, donde vos quieras...</h3>
              <hr />
              <p>Cambio?? la forma de comunicarnos, de aprender, de escuchar mu??sica, de ver tele. Viajamos ma??s ra??pido y elegimos entre miles de opciones. No esperamos en la vereda a un auto que nos lleve, o una semana para el pro??ximo capi??tulo. Descubrimos mu??sica todo el tiempo y compartimos todo con amigos. Elegimos que??, cua??ndo y do??nde. Y esa eleccio??n nos libera. Todo esto teni??a que llegar algu??n di??a a la forma en que maneja??s tu contenido. </p>
              <p>??Recuerdas cuando ver televisi??n ten??a un horario y un d??a fijo y la ??nica forma de hacerlo era sentado en el sof?? enfrente del televisor en tu casa? S??, la prehistoria.</p>
              <p>A veces los l??mites no est??n m??s que para ser sobre pasados.</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default App;

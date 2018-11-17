import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './index.css';
import Home from './components/home';
import News from './components/news';
import Culture from './components/culture';
import Technology from './components/technology';
import Jobs from './components/jobs';
import Movies from './components/movies';
import Politics from './components/politics';
import Design from './components/design';
import Health from './components/health';
import Railways from './components/railways';
import Story from './components/story';
import { Row, Col,Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

 
class App extends Component {
  render() {

      var rowStyle={
        padding:"10px"
      }


    return (
      <HashRouter>
        <div style={rowStyle}>
              <Container>
              <Row>
                <Col sm="2"><h2><b>Medium</b></h2></Col>
                <Col sm="6"></Col>
                <Col sm="4">
                  <Row>
                    <Col sm='6'><a href="/sss" className="btn btn-outline-success">Become a member</a></Col>
                    <Col sm='3'><a href="/kk" className="btn btn-outline-success">signup</a></Col>
                    <Col sm='3'><a href="/hhh" className="btn btn-outline-success" >Get started</a></Col>
                  </Row>

                </Col>
              </Row> 
            </Container>

            <Container className="navbar">
              <Row>
                  <Col sm="12">
                    <ul className="header">                
                      <li><NavLink exact to="/">HOME</NavLink></li>
                      <li><NavLink to="/news">THE NEW NEW</NavLink></li>
                      <li><NavLink to="/culture">CULTURE</NavLink></li>
                      <li><NavLink to="/tech">TECH</NavLink></li>
                      <li><NavLink to="/jobs">JOBS</NavLink></li>
                      <li><NavLink to="/movies">MOVIES</NavLink></li>
                      <li><NavLink to="/politics">POLITICS</NavLink></li>
                      <li><NavLink to="/design">DESIGN</NavLink></li>
                      <li><NavLink to="/health">HEALTH</NavLink></li>
                      <li><NavLink to="/railways">RAILWAYS</NavLink></li>
                    </ul>
                  </Col>
              </Row>
            </Container>
              <div>

                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/culture" component={Culture}/>
                <Route exact path="/tech" component={Technology}/>
                <Route exact path="/jobs" component={Jobs}/>
                <Route exact path="/movies" component={Movies}/>
                <Route exact path="/politics" component={Politics}/>
                <Route exact path="/design" component={Design}/>
                <Route exact path="/health" component={Health}/>
                <Route exact path="/railways" component={Railways}/>
               <Route path="/Story/:id" component={Story}/>
              </div>  
       
        </div>

      </HashRouter>
    );
  }
} 
export default App;
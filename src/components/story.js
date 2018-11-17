import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Home from './home'

import { Row, Col,Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Story extends Component{


	constructor(props){
		super(props);

		this.state= {

			url_id:this.props.match.params.id,
			storyData:{}
		}
		
		
	}


	componentDidMount(){

		this.getData();

	}

	getData(){



		axios.post('http://10.90.90.102:3002/singleStory', {get_id:this.state.url_id}).then(res=>{


			if( res.data.status === "success"){

				console.log(res.data);

				this.setState({storyData:res.data.singleStory});

				console.log(this.state.storyData);


			}



		})




	}
	



render(){


	return(


			
		<Container>
			<Row>
				<Col sm='12'>
	            	<h1 align="center">{this.state.storyData.title}</h1>
	          </Col>
	        </Row>

	        <Row>
				<Col sm='12'>
	            	<h4>{this.state.storyData.story}</h4>
	          </Col>
	        </Row>

	        
	    </Container>

			





		);

	}
}
export default Story;








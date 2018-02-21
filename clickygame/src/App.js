import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import {Header, Footer, Navbar, Section } from "./components/Setup";
import Title from "./components/Title";
import "./App.css";


class App extends Component {

	state = {
		pictures,
		Score: 0,
		TopScore: 0,
		RightOrWrong: ""
	};

	

	increaseScore = (id) => {

		const newPictures = [...this.state.pictures];

		let newTopScore = 0;
		let message = "";
		let reset = false;

		newPictures.forEach(pic => {
			if(pic.id === id){
				if(pic.clicked === true) {
					reset = true;

					if(this.state.Score >= this.state.TopScore) {
						newTopScore = this.state.Score;
						message = "You've guessed incorrectly!";						
					}

					else if (this.state.Score === 12){
						newTopScore = this.state.Score;
						message = "You Win!";
					}

					return;
				}
				else {
					pic.clicked = true;
					message = "You've guessed correctly!";
					return;
				}

			}
		});

		if(reset){
			newPictures.forEach(pic => pic.clicked = false);
		}

		newPictures.sort(() => Math.random() - 0.5);

		this.setState({ 
			Score: reset ? 0 : this.state.Score + 1,
			TopScore: reset ? newTopScore : "",
			pictures: newPictures,
			RightOrWrong: message
		});
	}
	 


	render() {
	    return (
	      <Wrapper>
	      	<Navbar 
	      	Score={this.state.Score}
	      	TopScore={this.state.TopScore}
	      	RightOrWrong={this.state.RightOrWrong}
	      	/>
	      		<Header />
	      			<Section>

				        <Title>Clicky Game</Title>
				        
				        {this.state.pictures.map(picture => (
				          <PictureCard
				            
				            id={picture.id}
				            key={picture.id}
				            image={picture.image}
			            	name={picture.name}
			            	increaseScore={this.increaseScore}
				          />
				        ))}
	        		</Section>
	      	
	        <Footer />
	      </Wrapper>
	    );
	  }
	
}


export default App;

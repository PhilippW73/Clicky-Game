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

		newPictures.forEach(pic => {

			if(pic.id === id){
				if(pic.clicked === true && this.state.Score >= this.state.TopScore) {
					this.setState({
						RightOrWrong: "You've guessed incorrectly!",
						TopScore: this.Score,
						Score: 0
					});
						newPictures.sort(() => Math.random() - 0.5);	
						}

						else if (this.state.Score === 12){
							this.setState({
							RightOrWrong: "You Win!",
							TopScore: this.Score,
							Score: 0
							})
						}


						else {
							this.setState({
								RightOrWrong: "You've guessed incorrectly!",
								TopScore: this.TopScore,
								Score: 0
						});

						newPictures.sort(() => Math.random() - 0.5);	
						
			}

					return;

		}
				else {
					pic.clicked = true;
					this.setState({ 
						Score: this.state.Score + 1,
						pictures: newPictures,
						RightOrWrong: "You've guessed correctly!"
					})

					return;
				}
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

// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

export default App;

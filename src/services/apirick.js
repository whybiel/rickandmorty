import React from "react";
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-elastic-carousel"

const Box = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-size:100% 100vh;
    background-image:url('https://a-static.besthdwallpaper.com/papel-de-parede-da-dimensao-de-deus-de-rick-e-morty-papel-de-parede-1600x900-57412_47.jpg');
`
const Title = styled.h1`
    width:100%;
    font-size:3rem;
    text-align:center;
    margin:0 0 3vh 0;
    font-family: 'Creepster', cursive;
    background-image: linear-gradient(to bottom, #008B00 0%, #7CFC00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;   
`
const Carrossel = styled(Carousel)`
    width:100%;
    height:70vh;
`
const Container = styled.div`
    width:80vw;
    height:60vh;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    margin:5vh 0 0 0;
    display:flex;
    align-items:center;
    border-radius:20px;
`
const SubContainer = styled.div`
    width:45%;
    height:100%;
`

const BoxTexts = styled.div`
    width:55%;
    display:flex;
    align-items:center;
    flex-direction:column;
`
const Image = styled.img`  
    width:100%;
    height:100%;
    border-radius:20px 0 0 20px;
`

const Name = styled.h2`
    width:100%;
    font-size:3rem;
    text-align:center;
    margin:0 0 3vh 0;
    font-family: 'Creepster', cursive;
    background-image: linear-gradient(to bottom, #008B00 0%, #7CFC00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Status = styled.h3`
    width:100%;
    font-size:2rem;
    text-align:center;
    margin:0 0 3vh 0;
    font-family: 'Caveat Brush', cursive; 
    color:#fff;  
`

const Location = styled.h4`
    width:100%;
    font-size:1.5rem;
    text-align:center;
    margin:0 0 3vh 0;
    font-family: 'Caveat Brush', cursive; 
    color:#fff;  
`


const ApiRickMorty = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
})

export default class Morty extends React.Component {

    state = {
        persons: []
    }

    async componentDidMount() {
        this.getRick()
    }

    getRick = async () => {
        const response = await ApiRickMorty.get()
        //console.log(response.data.results)

        const getPerson = response.data.results.map((item) => {
            return {
                ...item
            }
        })

        this.setState({
            persons: getPerson
        })
    }

    render() {
        return (
            <Box>
                <Title>Personagens de Rick and Morty</Title>
                <Carrossel>
                {this.state.persons.map((item) => (
                    <Container key={item.id}>
                        <SubContainer>
                            <Image src={item.image} alt={`foto do personagem ${item.name} do desenho Rick and morty`} />
                        </SubContainer>
                        <BoxTexts>
                            <Name>{item.name} - {item.species}</Name>
                            <Status>{item.status}</Status>
                            <Location>{item.location.name}</Location>
                        </BoxTexts>
                    </Container>
                    
                ))}
                </Carrossel>
            </Box>
        )
    }
}
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Carousel from ""

const Box = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const Container = styled.div`
    width:50vw;
    height:35vh;
    background-color:red;
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
    border-radius:20px 0px 0px 20px;
`

const Name = styled.h2`
    width:100%;
    text-align:center;
    margin:0 0 3vh 0;
`

const Status = styled.h3`
    width:100%;
    text-align:center;
    margin:0 0 3vh 0;   
`

const Location = styled.h4``

const Ball = styled.div`
    width:5vw;
    background:#000;
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
                <h1>Personagens de Rick and Morty</h1>
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
            </Box>
        )
    }
}
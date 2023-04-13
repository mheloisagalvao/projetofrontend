import React, { useState } from 'react'
import { Box, Sidebar, BoxRow, Container, Title, Button, StyledForm, StyledInput, LiList, UlList } from './styles'
import Ilustra from '../../assets/logo.gif'
import { PlusCircle,  } from '@phosphor-icons/react';

export default function Home() {

    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setListItems([...listItems, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <Container>
            <BoxRow>
                <Box>
                    <Title>
                        Registre seus hábitos!
                    </Title>
                    <img src={Ilustra} alt="logo" />
                </Box>
                <Sidebar>
                    <StyledForm onSubmit={handleInputSubmit}>
                        <StyledInput type="text" value={inputValue} onChange={handleInputChange} placeholder="Digite aqui" />
                        <Button type="submit">
                        <PlusCircle size={25} />


                            Adicionar</Button>
                    </StyledForm>
                    <UlList>
                        {listItems.slice(0, 9).map((item, index) => (
                            <LiList key={index}>{item}</LiList>
                        ))}
                    </UlList>
                </Sidebar>
            </BoxRow>
        </Container>
    )
}

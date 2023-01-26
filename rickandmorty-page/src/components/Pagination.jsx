import React from 'react'
import { Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addInfo } from '../state/reducers/infoSlice'


export const PaginationCont = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 62px;
border: 1px solid black;

ul{
    display: flex;
    list-style: none;
    
    li{
        margin: 10px;
    }
}
`

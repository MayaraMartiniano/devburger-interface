import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerHamburger from '../../assets/Parrilos1601.png'
import Background from '../../assets/backgroud2.png'


export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)

),

url('${Background}');

`


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px; 
    width: 100%;
    position: relative;

background: url('${BannerHamburger} ') no-repeat;
background-color: #1f1f1f;
background-position: initial;
background-size: cover;
height: 480px;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: relative;

    right: 35%;
    top: 10%

    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;

    }

 `


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

`

export const CategoryButton = styled(Link) `
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#cf2e2e' : '#ff6900'} ;
    font-size: 25px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #cf2e2e'}; 


`


export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto 0;

`
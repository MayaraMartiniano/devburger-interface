import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from '../../assets/backgroud2.png'
import BannerHamburger from '../../assets/banner-hamburger.svg'

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
background-position: center;
background-size: cover;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;

    right: 20%;
    top: 30%

    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;

    }

    button {
        font-size: 30px;
        position: relative;
        font-family: 'Road Rage', sans-serif;
        right: 45%;
        top: 35%;
        background: none;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        border: transparent;
       

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
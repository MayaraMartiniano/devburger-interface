import styled from "styled-components";
import Backgound from '../../assets/backgroud2.png'

export const Container = styled.div `
    display: flex;
    height: 100vh;
    
   
`

export const LeftContainer = styled.div `
background-color: black;
background-size: cover;
background-position: center;


height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img {
    width: 100%;
    
}
`

export const RightContainer = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   height: 100%;
   width: 100%;
   max-width: 50%;

   background: url('${Backgound}');
   background-color: black;

   p {
    color: #fff;
    font-size: 18px;
    font-weight: 800 ;
 }
 a {
    text-decoration: underline ;
    
 }
  
   
`
export const Title = styled.h2 `
 font-family: "Road Rage", sans-serif;
 font-weight: 400;
 font-size: 40px;
 color: #fff ;

 span {
    color:#fcb900;
    font-family: "Road Rage", sans-serif;
 }



   
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
   
    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #fcb900 ;
        font-weight: 600;
        height: 10px;

    }


`

import styled from "styled-components";
import Logo from '../../assets/Parrilos-Banner.png'
import Background from '../../assets/backgroud2.png'


 export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
    rgba(255,255,255, 0.5),
    rgba(255,255,255, 0.5)

), url('${Background}');
    min-height: 100%;
    min-height: 100vh;
   
 
 `

 export const Banner = styled.div`
    background: url('${Logo}') no-repeat;
    background-size: cover;
    background-position: center;
    height: 380px;

    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
 `

 export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color:  #ff6900;
    text-align: center;
    position: relative;
    margin-top: 30px;
    

    &::after {
        position: absolute;
        left: calc(50% + -28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #ff6900;
    }
 `

 export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 20%;
    gap: 40px ;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;

 `



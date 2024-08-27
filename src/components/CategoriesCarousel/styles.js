import styled from "styled-components";

export const Container = styled.div`
.carousel-item{
    padding-right: 40px;
}

padding-left: 40px;
`

export const Title = styled.h2`
font-size: 32px;
color: #fcb900 ;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px ;
margin-top: 20 px;

&::after {
    content:'' ;
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #fcb900 ;
    left: calc(50% - 28px); // colocar o tracinho abaixo do nome de categorias

}

`

export const ContainerItems = styled.div`
    background: url('${props => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;

 p { 
    color: #fff;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    
 }


`
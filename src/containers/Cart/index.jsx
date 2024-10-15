
import { CartItems, CartResume } from '../../components'
import { Banner, Container, Content, Title } from './styles'


export function Cart () {
    return (
        <Container>
            <Banner>
                
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems/>
                <CartResume/>
            </Content>

        </Container>
    )
}
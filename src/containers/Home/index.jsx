import { CategoriesCarousel } from '../../components/CategoriesCarousel'
import {Banner, Container, Content} from './styles'


export function Home(){
return (
    <div>
        <Banner>
       <h1>Seja Bem Vindo(a)!</h1>
        </Banner>

        <Container>
            
            <CategoriesCarousel/>
            
                 Carrossel Categorias
        </Container>

    </div>
)}
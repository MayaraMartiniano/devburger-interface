import { CategoriesCarousel, OffersCarousel } from '../../components'

import {Banner, Container} from './styles'

export function Home(){
return (
    <div>
        <Banner>
       <h1>Seja Bem Vindo(a)!</h1>
        </Banner>

        <Container>
            <div>
            <CategoriesCarousel/>
            <OffersCarousel/>
            </div> 
            
        </Container>

    </div>
)}
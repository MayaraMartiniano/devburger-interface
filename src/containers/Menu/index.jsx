import { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from './styles'

export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(()=> {
        async function loadCategories(){
            const {data} = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas'}, ...data]
            
            
            setCategories(newCategories)
            
        }

        async function loadProducts(){
            const {data} = await api.get('/products')
                      
            
            const NewProducts = data.map((product) => (
            {currencyValue: formatPrice (product.price), ...product,

            }
            ))

            setProducts(NewProducts)
            
        }

        loadCategories()
        loadProducts()

        
        

    },[]);




    return (
<Container>
<Banner>
    <h1>
        O MELHOR 
        <br/>
        HAMBURGUER
        <br/>
        ESTA AQUI!
        <span>Esse cardápio está irresistível</span>
    </h1>
    
    
</Banner>

<CategoryMenu>
    {categories.map((category) => (
        <CategoryButton key={category.id}>{category.name} </CategoryButton>
    ))}

</CategoryMenu>

<ProductsContainer>
    {products.map((product) => (
        <CardProduct product ={product} key={product.id}/>
    ))}

</ProductsContainer>


</Container>



    )
}
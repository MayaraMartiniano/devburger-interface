import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer } from './styles'

export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts ] = useState([])
    


    const navigate = useNavigate();

    const {search} = useLocation(); //categoria=1

    const queryParams = new URLSearchParams(search)

    //procurando a categoria


    const [activeCategory, setActiveCategory] = useState(() =>{
        const categoryId = +queryParams.get('categoria') //colocando o + converte para number
        if (categoryId) {
            return categoryId
        }
        return 0;
   
    })


    
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

    useEffect(() => { //filtrando por categoria
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter (
                product => product.category_id === activeCategory,
            )

            setFilteredProducts(newFilteredProducts)
        }

    }, [products, activeCategory])


    const handleBackClick = () => {
        navigate(-1); // -1 significa voltar uma página no histórico
      };

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
        <CategoryButton 
        key={category.id}
        $isActiveCategory={category.id === activeCategory}
        onClick={() => {
            navigate(
                {
                    pathname:'/cardapio', //queryparams
                    search:`?categoria=${category.id}`
                },
                {
                    replace:true,
                },
                setActiveCategory(category.id),
            )
        }}
        
        >{category.name} </CategoryButton>
    ))}

</CategoryMenu>

<ProductsContainer>
    {filteredProducts.map((product) => (
        <CardProduct product ={product} key={product.id}/>
    ))}

</ProductsContainer>


</Container>



    )
}
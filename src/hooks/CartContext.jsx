import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext ({})

export const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])

const putProductInCart = (product) => {         //adicionando produto ao carrinho
    const cartIndex = cartProducts.findIndex((prd) =>prd.id === product.id)

   
    let newProductsInCart = [];

    if (cartIndex >= 0) {               //verificando se existe o produto para adicionar mais + 1 no carrinho
        newProductsInCart = cartProducts    //se não fizer essa verificação vai adicionar o mesmo produto ao carrinho
                                                // ao inves de adicionar mais 1
        newProductsInCart[cartIndex].quantity = 
            newProductsInCart[cartIndex].quantity + 1   

        setCartProducts(newProductsInCart)
    } else {
        product.quantity = 1
        newProductsInCart = [...cartProducts, product]
        setCartProducts(newProductsInCart)
    }

    updateLocalStorage(newProductsInCart)
}



const clearCart = () => {
    setCartProducts([])

    updateLocalStorage([])

}

const deleteProduct = (productId) => { 
    const newCart = cartProducts.filter( (prd) => prd.id !== productId)

    setCartProducts(newCart)
    updateLocalStorage(newCart)
}


const increaseProduct = (productId) => { //adicionando mais uma uantidade no produto

    const newCart = cartProducts.map( (prd) => {
        return prd.id === productId ? {...prd, quantity: prd.quantity + 1}
        :prd
    })

    setCartProducts(newCart)
    updateLocalStorage(newCart)


}

const decreaseProduct = (productId) => {  //tirando a quantidade
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

    if(cartProducts[cartIndex].quantity > 1){
        const newCart = cartProducts.map( (prd) => {
            return prd.id === productId ? {...prd, quantity: prd.quantity - 1}
            :prd
        })

        setCartProducts(newCart)
        updateLocalStorage(newCart)

    } else {
        deleteProduct(productId)//se for maior que 1 vai deletar o produto do carrinho
    }
}

const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
}

useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo')

    if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
    }
},[])


return ( <CartContext.Provider
     value={{
        cartProducts, 
        putProductInCart, 
        clearCart,
        deleteProduct, 
        increaseProduct, 
        decreaseProduct
        }}
    >

        {children}

</CartContext.Provider>

)


}

export const useCart = () => {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error ('useCart must be used with a context ')
    }

    return context
}
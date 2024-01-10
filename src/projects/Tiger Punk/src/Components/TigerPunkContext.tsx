import { useState, createContext, ReactNode, useEffect } from 'react'
import { products } from '../assets/Products/ProductsList'


export type productType = {
	id: number,
	name: string,
	description: string,
	price: number,
	imageUrl: string,
	category: string,
}
 type cartItemType = {
	id: number,
	name: string,
	description: string,
	price: number,
	imageUrl: string,
	category: string,
    quantity: number
}

type TigerPunkProps ={
    navItemSelected: string,
    cart: cartItemType[],
    cartQuantity: number,
    currentItemQuantity: number,
    updateCart: (ItemID:number, quantity:number) => void,
    // updateItemQuantity: (num:number) => void, 
    removeItem:(itemId:number) => void,
    selectNavItem: (item:string) => void,
    clearCart: () => void,

}
type TigerPunkProviderProps = {children:ReactNode}

export const TigerPunkContext = createContext({} as TigerPunkProps)

export const TigerPunkContextProvider = ({children} : TigerPunkProviderProps) => {
    const [cart, setCart] = useState<cartItemType[]>([] as cartItemType[])
    const [currentItemQuantity, setCurrentItemQuantity] = useState<number>(0)
    const [cartQuantity, setCartQuantity] = useState<number>(0)
	const [navItemSelected, setNavItemSelected] = useState('Home')

    useEffect(() =>{
        setCartQuantity(cart.length)
    },[cart])

    const selectNavItem = (item:string) =>{
        setNavItemSelected(item)
        window.scrollTo(0, 0)
      }
      
      const updateCart=(itemID:number, n:number)=>{
          const searchedItem = products.find( p => p.id === itemID)
          if (!searchedItem) {
            return;
          }

          const newItem:cartItemType = {...searchedItem, quantity:n}

        if(cart.find((item) => item.id === itemID)){
            setCart(prevCart => {
                return prevCart.map(item => 
                  item.id === itemID ? { ...item, quantity:  n } : item
                );
              });
        }else{
        setCart((prev) =>
            ([...prev, newItem])
        )}
      }

      const updateItemQuantity=(itemID:number,n:number)=>{
        setCurrentItemQuantity(n)
      }

      const removeItem = (itemId: number) =>{
        const newList = cart.filter(p => p.id !== itemId)
        setCart(newList)
      }

      const clearCart = () =>{
        setCart([])
      }

const tigerPunkValues = {navItemSelected, selectNavItem, cart, currentItemQuantity, cartQuantity, updateCart, updateItemQuantity, removeItem, clearCart}

    return (
        <TigerPunkContext.Provider value={tigerPunkValues}>
                {children}
        </TigerPunkContext.Provider>
    )
}
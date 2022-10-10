import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { apiFake } from "../api/fake";

export interface CartStorage {
  id: string;
  amount: number;
}

interface CartStorageType {
  cartStorage: CartStorage[]
  amountOfItemsInCart: number
  handleAddCoffeeToCart: (id: string) => void
  handleRemoveCoffeeToCart: (id: string, all?: boolean) => void
  resetCart: () => void
}

export const CartStorageContext = createContext({} as CartStorageType)

interface CartStorageContextProviderProps {
  children: ReactNode
}

export function CartStorageContextProvider({
  children,
}: CartStorageContextProviderProps) {
  const [cartState, dispatch] = useReducer((state: CartStorage[], action: any) => {
    if (action.type === 'ADD_TO_CART') {
      const itemIsInCartStorage = state.find(item => item.id === action.payload.id)
      
      if (itemIsInCartStorage) {
        const count = itemIsInCartStorage.amount + 1;
        const itemsCartStorage = state
  
        itemsCartStorage.map(item => {
          if (item.id === action.payload.id) {
            item.amount = count
          }
        })
  
        return [...itemsCartStorage]
      } else {
        const foundItem = apiFake.find(item => item.id === action.payload.id)
        if(foundItem) {
          return [...state, {id: foundItem?.id, amount: 1}]
        }
      }
    }
  
    if (action.type === 'REMOVE_FROM_CART') {
      const itemIsInCartStorage = state.find(item => item.id === action.payload.id)
      const deleteAll = action.payload.all
  
      if (itemIsInCartStorage) {
        const amount = itemIsInCartStorage.amount - 1
        const itemsCart = state
  
        if(amount > 0 && !deleteAll) {
          itemsCart.map(item => {
            if(item.id === action.payload.id) {
              item.amount = amount
            }
          })
  
          return [...itemsCart]
        } else {
          const removeItemFromCart = itemsCart.filter(item => item.id != action.payload.id)
          return [...removeItemFromCart]
        }
      }
    }
  
    if (action.type === 'RESET_CART') {
      return []
    }

    if (action.type === 'ADD_CART_STORAGE') {
      const storage = action.payload.data
      return [...storage]
    }
  
    return state
  }, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function handleAddCoffeeToCart(id: string) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id
      }
    })
  }

  function handleRemoveCoffeeToCart(id: string, all?: boolean) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id,
        all
      }
    })
  }

  function resetCart() {
    dispatch({
      type: 'RESET_CART'
    })
    
  }

  const [amountOfItemsInCart, setAmountOfItemsInCart] = useState(0)

  useEffect(() => {
    const amountItems = cartState.reduce((accumulator, item) => {
      return accumulator + item.amount
    }, 0)
    
    setAmountOfItemsInCart(amountItems)
  }, [cartState])

  return (
    <CartStorageContext.Provider
      value={{
        cartStorage: cartState,
        amountOfItemsInCart,
        handleAddCoffeeToCart,
        handleRemoveCoffeeToCart,
        resetCart
      }}>
        {children}
      </CartStorageContext.Provider>
  )
}
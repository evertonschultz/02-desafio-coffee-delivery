import { createContext, ReactNode, useReducer } from "react"
import { Order } from "../pages/Cart";

interface OrderContextType {
  order: Order | undefined
  handleCreateOrder: (data: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({
  children,
}: OrderContextProviderProps) {

  const [order, dispatch] = useReducer((state: Order[], action: any) => {
    if (action.type === 'CREATE_ORDER') {
      const order = action.payload.data;

      return order
    }
    return state
  }, [])

  function handleCreateOrder(data: Order) {
    dispatch({
      type: 'CREATE_ORDER',
      payload: {
        data
      }
    })
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        handleCreateOrder
      }}>
        {children}
      </OrderContext.Provider>
  )
}
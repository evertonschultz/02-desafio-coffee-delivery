import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from './styles/global'
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./contexts/OrderContext";
import { CartStorageContextProvider } from "./contexts/CartStorageContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartStorageContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartStorageContextProvider>
       </BrowserRouter>
       <GlobalStyle />
    </ThemeProvider>
  )
}

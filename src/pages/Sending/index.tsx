import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { OrderContext } from "../../contexts/OrderContext"
import { ButtonToHome, IconWithBackground, ImageContainer, SendingContainer, ShippingDetails, ShippingDetailsContent } from "./styles"

export function Sending() {
  const { order } = useContext(OrderContext)

  const navigate = useNavigate();

  return (
    <SendingContainer>
      <div>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        {order?.items ? (
          <div>
            <ShippingDetails>
              <ShippingDetailsContent>
                <IconWithBackground colorIcon="#8047F8">
                  <MapPin size={16} color="#fff" weight="fill" />
                </IconWithBackground>
                <div>
                  <span>Entregue em <strong>{order?.road}, {order?.number}</strong></span>
                  <span>{order?.district} - {order?.city}, {order?.uf}</span>
                </div> 
              </ShippingDetailsContent>
              <ShippingDetailsContent>
                <IconWithBackground colorIcon="#DBAC2C">
                  <Timer size={16} color="#fff" weight="fill" />
                </IconWithBackground>
                <div>
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div> 
              </ShippingDetailsContent>
              <ShippingDetailsContent>
                <IconWithBackground colorIcon="#C47F17">
                  <CurrencyDollar size={16} color="#fff" weight="fill" />
                </IconWithBackground>
                
                <div>
                  <span>Pagamento na entrega</span>
                  {order?.paymentMethod === 'credit' && <strong>Cartão de Crédito</strong>}
                  {order?.paymentMethod === 'debit' && <strong>Cartão de Débito</strong>}
                  {order?.paymentMethod === 'money' && <strong>Dinheiro</strong>}
                </div> 
              </ShippingDetailsContent>
            </ShippingDetails>
            <ImageContainer>
              <img src="./src/assets/sending.png" alt="" />
            </ImageContainer>
          </div>
        ) : (
          <ButtonToHome onClick={() => navigate('/')}>
            Voltar para a página inicial?
          </ButtonToHome>
        )}
        
      </div>
    </SendingContainer>
  )
}
import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFake } from "../../api/fake";
import { CartStorageContext } from "../../contexts/CartStorageContext";
import { FooterCart, HomeBackground, HomeContainer, HomeDetails, HomeIntro, HomeProducts, HomeSubtitle, HomeTitle, IconWithBackground, ListContainer, ListProducts, Tags, TitleList } from "./styles";

export interface Coffee {
  id: string;
  name: string;
  tags: string[];
  imageUrl: string;
  description: string;
  price: number;
  inventory: number;
}

export interface Cart extends Coffee {
  amount: number
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>(apiFake);
  const { cartStorage, handleAddCoffeeToCart, handleRemoveCoffeeToCart } = useContext(CartStorageContext)

  const navigate = useNavigate()

  return (
    <HomeContainer>
    <HomeBackground>
      <HomeIntro>
        <div>
          <HomeTitle>Encontre o café perfeito para qualquer hora do dia</HomeTitle>
          <HomeSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HomeSubtitle>
          <HomeDetails>
            <div>
              <IconWithBackground colorIcon="#C47F17">
                <ShoppingCart size={16} color="#fff" weight="fill" />
              </IconWithBackground>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IconWithBackground colorIcon="#574F4D">
                <Timer size={16} color="#fff" weight="fill" />
              </IconWithBackground>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IconWithBackground colorIcon="#DBAC2C">
                <Package size={16} color="#fff" weight="fill" />
              </IconWithBackground>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IconWithBackground colorIcon="#8047F8">
                <Coffee size={16} color="#fff" weight="fill" />
              </IconWithBackground>
              <span>O café chega fresquinho até você</span>
            </div>
          </HomeDetails>
        </div>
        <img src="./src/assets/layout_coffee_delivery.png" alt="" />
      </HomeIntro>
    </HomeBackground>
    <HomeProducts>
    <TitleList><span>Nossos cafés</span></TitleList>
    <ListContainer>
    <ListProducts>
      {
        coffees.map(coffee => {
          return (
            <div key={coffee.id}>
              <img src={coffee.imageUrl} alt={coffee.name} />
              <Tags>
              {
                coffee.tags.map(tag => {
                  return <strong key={tag}>{tag}</strong>
                })
              }
              </Tags>
              <span>{coffee.name}</span>
              <p>{coffee.description}</p>
              <FooterCart>
                <span>R<span>$</span><strong>{
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(coffee.price / 100).split('$')[1]
                }</strong></span>
                <div>
                  <button onClick={() => handleRemoveCoffeeToCart(coffee.id)}>
                    <Minus color="#8047F8" weight="bold" size={14} />
                  </button>

                  {
                    coffees.map(item => {
                      if (item.id === coffee.id) {
                        const itemFoundInCart = cartStorage?.find(itemIsInCart => itemIsInCart.id === coffee.id)
                        
                        if (itemFoundInCart) {
                          return <span key={coffee.id}>{itemFoundInCart.amount}</span>
                        } else {
                          return <span key={coffee.id}>0</span>
                        }
                      }
                    })
                  }
                  
                  <button onClick={() => handleAddCoffeeToCart(coffee.id)}>
                    <Plus color="#8047F8" weight="bold" size={14} />
                  </button>
                </div>
                <button disabled={cartStorage?.length ? false : true} type="button" onClick={() => navigate('/cart')}>
                  <ShoppingCart weight="fill" color="#F3F2F2" size={18} />
                </button>
              </FooterCart>
            </div>
          )
        })
      }
     
    </ListProducts>
    </ListContainer>
    </HomeProducts>
    </HomeContainer>
  )
}
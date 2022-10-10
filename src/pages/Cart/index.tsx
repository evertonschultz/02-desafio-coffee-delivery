import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { ButtonPaymentMothod, CartAddOrRemove, CartContent, CartDetails, CartInfo, CartList, CompleteOrder, ConfirmOrder, Container, InfoContent, InputContent, InputLarge, InputMedium, InputSmall, OrderValueInformation, PaymentContent, RequestContainer, SelectedItems } from "./styles";
import { CartStorage, CartStorageContext } from "../../contexts/CartStorageContext";
import { apiFake } from "../../api/fake";
import { OrderContext } from "../../contexts/OrderContext";

export interface Order {
  cep: string;
  road: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  items: CartStorage[];
  paymentMethod: string;
}

const requestFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Informe um CEP válido!'),
  road: zod.string().min(1, 'Informe uma rua válida!'),
  number: zod.string().min(1, 'Informe um número válido!'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe um bairro válido!'),
  city: zod.string().min(1, 'Informe uma cidade válida!'),
  uf: zod.string().length(2, 'Informe uma UF válida!'),
})

type RequestFormData = zod.infer<typeof requestFormValidationSchema>

export function Cart() {
  const { handleCreateOrder } = useContext(OrderContext)

  const [paymentMethod, setPaymentMethod] = useState('');

  const coffees = apiFake
  const { cartStorage, handleAddCoffeeToCart, handleRemoveCoffeeToCart, resetCart } = useContext(CartStorageContext);
  const delivery = 350;

  const requestForm = useForm<RequestFormData>({
    resolver: zodResolver(requestFormValidationSchema),
    defaultValues: {
      cep: '',
      road: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    }
  })

  const navigate = useNavigate();
  const { handleSubmit, register, reset } = requestForm

  const totalItems = cartStorage?.reduce((accumulator, item) => {
    const coffeeFound = coffees.find(coffee => coffee.id === item.id)

    if (coffeeFound)
      return accumulator + item.amount * coffeeFound.price;
    else
      return accumulator
  }, 0);

  async function handleCreateNewOrder(data: RequestFormData) {
    if(paymentMethod) {
      const createOrder = {
        cep: data.cep,
        city: data.city,
        district: data.district,
        items: cartStorage,
        number: data.number,
        paymentMethod,
        road: data.road,
        uf: data.uf,
        complement: data.complement,
      }
  
      handleCreateOrder(createOrder)
      resetCart()
      reset()
      navigate('/sending')
    } else {
      throw(alert('Por favor, verifique se você selecionou a forma de pagamento!'))
    }
  }
    
  useEffect(() => {
    if (totalItems === 0) {
      return navigate('/')
    }
  }, [totalItems])

  return (
    <Container>
    <RequestContainer>
      <CompleteOrder>
        <span>Complete seu pedido</span>
        <div>
          <InfoContent>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InfoContent>
          <form action="">
          <InputContent>
            <InputMedium id="cep" placeholder="CEP" {...register('cep')} />
          </InputContent>

          <InputContent>
            <InputLarge id="road" placeholder="Rua" {...register('road')} />
          </InputContent>

          <InputContent>
            <InputMedium id="number" placeholder="Número" type="number" {...register('number')} />
            <InputLarge id="complement" placeholder="Complemento"  {...register('complement')} />
          </InputContent>

          <InputContent>
            <InputMedium id="district" placeholder="Bairro" {...register('district')} />
            <InputLarge id="city" placeholder="Cidade" {...register('city')} />
            <InputSmall id="uf" placeholder="UF" {...register('uf')} />
          </InputContent>
          </form>
        </div>

        <div>
          <InfoContent>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </InfoContent>
          <PaymentContent>
            <ButtonPaymentMothod
              selected={paymentMethod === 'credit' ? true : false}
              onClick={() => setPaymentMethod('credit')}
              type="button"
            >
              <CreditCard size={16} color="#8047F8" />
              <span>CARTÃO DE CRÉDITO</span>
            </ButtonPaymentMothod>
            <ButtonPaymentMothod
              selected={paymentMethod === 'debit' ? true : false}
              onClick={() => setPaymentMethod('debit')}
              type="button"
            >
              <Bank size={16} color="#8047F8" />
              <span>CARTÃO DE DÉBITO</span>
            </ButtonPaymentMothod>
            <ButtonPaymentMothod
              selected={paymentMethod === 'money' ? true : false}
              onClick={() => setPaymentMethod('money')}
              type="button"
            >
              <Money size={16} color="#8047F8" />
              <span>DINHEIRO</span>
            </ButtonPaymentMothod>
          </PaymentContent>
        </div>
      </CompleteOrder>

      <SelectedItems>
        <span>Cafés selecionados</span>

        <div>
          <CartList>
            {totalItems ? cartStorage?.map(item => {
              const coffeeFound = coffees.find(coffee => coffee.id === item.id)
              if(coffeeFound)
              return (
              <CartContent key={item.id}>
                <img src={coffeeFound.imageUrl} alt="" />
                <CartDetails>
                  <CartInfo>
                    <span>{coffeeFound.name}</span>
                    <span><strong>{
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(coffeeFound.price / 100 * item.amount)
                    }</strong></span>
                  </CartInfo>
                  
                  <CartAddOrRemove>
                    <div>
                      <button type="button" onClick={() => handleRemoveCoffeeToCart(item.id)}>
                        <Minus color="#8047F8" weight="bold" size={14} />
                      </button>
                      <span>{item.amount}</span>
                      <button type="button" onClick={() => handleAddCoffeeToCart(item.id)}>
                        <Plus color="#8047F8" weight="bold" size={14} />
                      </button>
                    </div>
                    <button type="button" onClick={() => handleRemoveCoffeeToCart(item.id, true)}>
                      <Trash color="#8047F8" weight="bold" size={14} />
                      <span>REMOVER</span>
                    </button>
                  </CartAddOrRemove>
                </CartDetails>
              </CartContent>
            )}) : <span>Carrinho vazio</span>}
          </CartList>
          <OrderValueInformation>
            <div>
              <span>Total de itens</span>
              <span>{totalItems ?
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalItems / 100) : '-'
              }</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{totalItems ?
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(delivery / 100) : '-'
              }</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{totalItems && delivery ?
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format((totalItems + delivery) / 100) : '-'
              }</strong>
            </div>
          </OrderValueInformation>
          <ConfirmOrder onClick={handleSubmit(e => handleCreateNewOrder(e))} type="submit">COMFIRMAR PEDIDO</ConfirmOrder>
        </div>
      </SelectedItems>
    </RequestContainer>
    </Container>
  )
}

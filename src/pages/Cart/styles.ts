import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.background};
  flex: 1;
  display: flex;

  max-width: 90rem;
  height: 100vh;
`

export const RequestContainer = styled.div`
  flex: 1;
  display: flex;

  max-width: 74rem;

  margin: 0 auto;

  padding: 2rem;
  padding-top: 10rem;

  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    background: ${props => props.theme.background};
  }
  
`
export const CompleteOrder = styled.div`
  display: flex;
  flex: 1;
  max-width: 40rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  > span {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.463rem;

    color: ${props => props.theme.subtitle};
  }

  > div {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      padding: 2.5rem;
      gap: 2rem;

      border-radius: 0.375rem;

      background: ${props => props.theme.card};

      > form {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
    }
`

export const InfoContent = styled.div`
  display: flex;

  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;

    > span {
      color: ${props => props.theme.subtitle};
    }

    > p {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${props => props.theme.text}
    }
  }
`

export const InputContent = styled.div`
  display: flex;
  width: 100%;

  gap: 0.75rem;
`

const BaseInput = styled.input`
  font-size: 0.875rem;
  color: ${props => props.theme.label};
  
  padding: 0.75rem;
  gap: 0.25rem;

  background: ${props => props.theme.input};

  border: 1px solid ${props => props.theme.button};
  border-radius: 0.25rem;
`

export const InputSmall = styled(BaseInput)`
  max-width: 3.75rem;
`

export const InputMedium = styled(BaseInput)`
  width: 100%;
  max-width: 12.5rem;
`
            
export const InputLarge = styled(BaseInput)`
  width: 100%;
`
export const PaymentContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
interface ButtonPaymentMothodProps {
  selected?: boolean
}

export const ButtonPaymentMothod = styled.button<ButtonPaymentMothodProps>`
  display: flex;
  align-items: center;
  padding: 0.938rem;
  gap: 0.75rem;

  background: ${props => props.selected ? props.theme.purpleLight : props.theme.button};
  border-radius: 0.375rem;
  border: ${props => props.selected ? '1px solid #8047F8' : '1px solid #E6E5E5'};

  width: 11.125rem;

  cursor: pointer;

  > span {
    font-size: 0.75rem;
  }
`

export const SelectedItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  > span {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.463rem;

    color: ${props => props.theme.subtitle};
  }

  > div {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      padding: 2.5rem;
      gap: 2rem;

      border-top-right-radius: 2.25rem;
      border-bottom-left-radius: 2.25rem;
      border-top-left-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;

      background: ${props => props.theme.card};
    }
`

export const CartList = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;

  gap: 1.5rem;

  > span {
    font-size: 2remm;
    display: flex;
    color: ${props => props.theme.yellowDark};
    justify-content: center;
  }
`

export const CartContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1.25rem;
  padding-bottom: 2rem;

  border-bottom: 1px solid ${props => props.theme.button};

  > img {
    width: 4rem;
    height: 4ren;

    @media (max-width: 520px) {
    width: 3rem;
    height: 3rem;
  }
  }
`

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 0.5rem;
`

export const CartInfo = styled.div`
  display: flex;
  
  justify-content: space-between;

  > span {
    color: ${props => props.theme.subtitle};
  }
`

export const CartAddOrRemove = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 2.375rem;
    width: 5.688rem;
    padding: 0.25rem;
    
    background: ${props => props.theme.button};
      
    border-radius: 0.375rem;

    > button {
      display: flex;
      border: 0;
      background: transparent;
      align-items: center;
      justify-content: center;
      padding: 0.375rem;

      &:hover {
        cursor: pointer;
        background: ${props => props.theme.hover};
        border-radius: 0.25rem;
      }
    }
  }

  > button {
    display: flex;
    border: 0;
    background: ${props => props.theme.button};
    align-items: center;
    justify-content: center;

    padding: 0.375rem 0.5rem;
    gap: 0.25rem;

    border-radius: 0.375rem;

    font-size: 0.875rem;
    color: ${props => props.theme.text};

    &:hover {
      cursor: pointer;
      background: ${props => props.theme.hover};
      border-radius: 0.25rem;
    }
  }
`

export const OrderValueInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.75rem;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > span {
      font-size: 0.875rem;
    }

    > strong {
      font-size: 1.25rem;
      color: ${props => props.theme.subtitle};
    }
  }
`

export const ConfirmOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.875rem;

  font-weight: 700;
  font-size: 0.875rem;
  color: ${props => props.theme.white};
  background: ${props => props.theme.yellow};

  border: 0;
  border-radius: 0.5rem;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${props => props.theme.yellowDark};
    border-radius: 0.375rem;
  }
`
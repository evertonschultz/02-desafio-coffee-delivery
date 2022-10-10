import { House, MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartStorageContext } from "../../contexts/CartStorageContext";
import { ButtonCart, ButtonLocation, ContainerFixed, HeaderContainer } from "./styles";

export function Header() {
  const [extendedLocation, setExtendedLocation] = useState('Por favor, forneça sua localização!')
  const { amountOfItemsInCart } = useContext(CartStorageContext);

  const navigate = useNavigate();

  const listOfBrasilianStates = [
    {
      id: 'Acre',
      abbreviation: 'AC'
    },
    {
      id: 'Alagoas',
      abbreviation: 'AL'
    },
    {
      id: 'Amapá',
      abbreviation: 'AP'
    },
    {
      id: 'Amazonas',
      abbreviation: 'AM'
    },
    {
      id: 'Bahia',
      abbreviation: 'BA'
    },
    {
      id: 'Ceará',
      abbreviation: 'CE'
    },
    {
      id: 'Distrito Federal',
      abbreviation: 'DF'
    },
    {
      id: 'Espírito Santo',
      abbreviation: 'ES'
    },
    {
      id: 'Goiás',
      abbreviation: 'GO'
    },
    {
      id: 'Maranhão',
      abbreviation: 'MA'
    },
    {
      id: 'Mato Grosso',
      abbreviation: 'MT'
    },
    {
      id: 'Mato Grosso do Sul',
      abbreviation: 'MS'
    },
    {
      id: 'Minas Gerais',
      abbreviation: 'MG'
    },
    {
      id: 'Pará',
      abbreviation: 'PA'
    },
    {
      id: 'Paraíba',
      abbreviation: 'PB'
    },
    {
      id: 'Paraná',
      abbreviation: 'PR'
    },
    {
      id: 'Pernambuco',
      abbreviation: 'PE'
    },
    {
      id: 'Piauí',
      abbreviation: 'PI'
    },
    {
      id: 'Rio de Janeiro',
      abbreviation: 'RJ'
    },
    {
      id: 'Rio Grande do Norte',
      abbreviation: 'RN'
    },
    {
      id: 'Rio Grande do Sul',
      abbreviation: 'RS'
    },
    {
      id: 'Rondônia',
      abbreviation: 'RO'
    },
    {
      id: 'Roraima',
      abbreviation: 'RR'
    },
    {
      id: 'Santa Catarina',
      abbreviation: 'SC'
    },
    {
      id: 'São Paulo',
      abbreviation: 'SP'
    },
    {
      id: 'Sergipe',
      abbreviation: 'SE'
    },
    {
      id: 'Tocantins',
      abbreviation: 'TO'
    },
  ]
  
  useEffect(() => {
    function getCoordintes() {
      const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
      };
  
      function success(pos: any) {
        const crd = pos.coords;
        const lat = crd.latitude.toString();
        const lng = crd.longitude.toString();
  
        const xhr = new XMLHttpRequest();
      
        xhr.open('GET', `https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_API_ACCESS_TOKEN}&lat=${lat}&lon=${lng}&format=json`);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
      
        function processRequest(e: any) {
          if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const address = response.address;

            const abbreviatedState = listOfBrasilianStates.find(state => state.id === address.state)

            setExtendedLocation(`${address.town}, ${abbreviatedState?.abbreviation}`);
          }
        }
      }
  
      function error(err: any) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
      }
  
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  
    getCoordintes();
  }, [])

  return (
    <ContainerFixed>
      <HeaderContainer>
        <img src="./src/assets/logo.png" alt="" />
        <nav>
          <ButtonLocation disabled>
            <MapPin size={22} weight="fill" />
            <span>{extendedLocation}</span>
          </ButtonLocation>
          {
            amountOfItemsInCart ? (
              <ButtonCart disabled={amountOfItemsInCart > 0 ? false : true} onClick={() => navigate('/cart')} amount={amountOfItemsInCart}>
                <ShoppingCart size={22} weight="fill" />
                <span>{amountOfItemsInCart}</span>
              </ButtonCart>
            ) : (
              <ButtonCart onClick={() => navigate('/')}>
                <House size={22} weight="fill" />
              </ButtonCart>
            )
          }
        </nav>
      </HeaderContainer>
    </ContainerFixed>
  )
}
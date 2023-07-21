import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyles';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://www.regalosdelvirrey.com.ar/images/compra-exitosa.png'
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/ordenes')}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;

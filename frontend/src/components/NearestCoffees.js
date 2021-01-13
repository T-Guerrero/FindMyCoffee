import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import styled from 'styled-components';

import StoreService from '../services/store';
import EstablishmentsService from '../services/establishments_service';

const RightBar = styled.div`
  width: 250px;
  position: absolute;
  color: white;
  right: 0;
  top: 0;
`

const Head = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 2px;
  text-align: center;
  margin: 10px;
`

const Body = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 20px;
  height: 450px;
  overflow-y: auto;
  margin: 10px;
`

const Footer = styled.div`
  background-color: rgba(10, 10, 10, 0.9);
  border-radius: 6px;
  padding: 10px 20px 20px 20px;
  font-size: 13px;
  margin: 10px;
`

const EstablishmentItem = styled.div`
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color: rgba(220, 110, 50, 0.7);
`

const Paragraph = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 14px;
`

const Github = styled.a`
  color: #F57C00;
  text-decoration: none;
`


const NearestCoffees = (props) => {
  const [stores, setStores] = useState([]);
  
  async function loadNearestStores() {
    const response = await StoreService.index(props.latitude, props.longitude);
    setStores(response.data);
  }

  async function searchSelected(place) {
    const response = await EstablishmentsService.show(place.google_place_id);
    props.setSelected(response.data.result);
  }

  useEffect(() => {
    loadNearestStores();
  }, [props.latitude])

  return (
    <RightBar>
      <Head>
        <h3>Find My Coffee</h3>
      </Head>

      <Body>
        <strong>Mais amados na região</strong>
        <hr/>
        {
          stores.map(store => {
            return (
              <EstablishmentItem 
              key={store.name}
              onClick={() => searchSelected(store)} >
                <Title>{store.name}</Title>
                <Paragraph>{store.address}</Paragraph>

                {store.ratings_count || 0} Opiniões
                <ReactStars edit={false} value={store.ratings_average || 0}/>
                <hr/>
              </EstablishmentItem>
            )
          })
        }
      </Body>

      <Footer>
        <h2 style={{textAlign: 'center'}}>Thiago Guerrero | <Github target="_blank" href="https://github.com/T-Guerrero">Github</Github></h2>
        <Paragraph>Projeto Open Source desenvolvido na Semana Super FullStack da escola OneBitCode</Paragraph>
      </Footer>
    </RightBar>
  )
}

export default NearestCoffees;
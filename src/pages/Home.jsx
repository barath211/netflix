import React from 'react';
import Main from '../Components/Main';
import request from './Request';
import Row from '../Components/Row';
const Home = () => {

  return (
    <>
      <Main/>
      <Row  rowId='1' title='UpComing' fetchURL={request.requestUpcoming}/>
      <Row  rowId='2' title='popular' fetchURL={request.requestPopular}/>
      <Row  rowId='3' title='Trending' fetchURL={request.requestTrending}/>
      <Row  rowId='4' title='TopRated' fetchURL={request.requestTopRated}/>
      <Row rowId='5'  title='Horror' fetchURL={request.requestHorror}/> 
    </>
  )
}

export default Home
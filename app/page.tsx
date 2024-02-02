'use client'
import Link from 'next/link'
import Header from '@/app/layouts/app.header'
import '@fontsource/roboto';
import Banner from '../public/Banner.png'
import Image from 'next/image'
import {Row, Col, Button} from 'antd'
export default function Home() {
  return (
    <>
    <Header/>

    <Image style = {{width: '82%', marginLeft: '8%'}} src = {Banner} alt = "banner"/>
    <div style = {{backgroundColor: "#DAE2E8"}}>
        <div style = {{width: "82%", marginLeft: '8%'}}> 
        <Row>
          <Col span = {6}>
            <span style={{ fontFamily: 'revert-layer', fontSize: '36px', fontWeight: '600', color: '#324552'}}>Popular books</span>
          </Col>
          <Col span = {15}>
          </Col>
          <Col span={3} style={{ textAlign: 'right', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'revert-layer', fontSize: '16px', fontWeight: '600', color: '#324552'}}>See all</span>
          </Col>


        </Row>
        </div>
    </div>
    </>
  );
}

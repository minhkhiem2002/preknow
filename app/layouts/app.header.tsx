'use client' 
import Link from 'next/link'
import {Row, Col, Button} from 'antd'
import { Input, Space } from 'antd';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { WrapperAccount, WrapperHeader, WrapperHeaderTextSmall, WrapperTextHeader} from './styles/header'
import Image from 'next/image'
import Picture from "../../public/Logo.png"
const { Search } = Input;
const Header = () => {
    return (
        <div style = {{borderBottom: "1px solid lightblack", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
        <WrapperHeader>
            <Col span = {5} style = {{marginTop: '-5px'}}>
                <Link href = '/'>
                <Image src = {Picture} alt = "picture"/>
                </Link>
            </Col>
            <Col span = {7}>
                <Search
                    placeholder="Tìm kiếm"
                    allowClear
                    enterButton 
                    style = {{marginTop: '3px'}}
                    // onSearch={onSearch}
                />
            </Col>
            <Col span = {6} >
                <WrapperAccount>
                        <div>
                            <WrapperHeaderTextSmall> 
                                <Link href = '/home' style = {{color: '#000'}}>
                                    <ShoppingCartOutlined style = {{fontSize: "20px", width: "25px", marginTop: "8px"}}/>
                                    <span>Giỏ hàng</span>
                                </Link>
                            </WrapperHeaderTextSmall>
                            <WrapperHeaderTextSmall>
                                <Link href = '/faq' style = {{color: '#000'}}>
                                    <span>FAQ</span>
                                </Link>
                            </WrapperHeaderTextSmall>
                            <WrapperHeaderTextSmall>
                                <Link href = '/contact' style = {{color: '#000'}}>
                                    <span>Liên hệ</span>
                                </Link>
                            </WrapperHeaderTextSmall>
                        </div>
                </WrapperAccount>
            </Col>
            <Col span = {6}>
                    <Link href = '/signup'>
                        <Button style = {{marginRight: "20px", marginTop: "3px", color: "#21717A", borderColor: "#21717A"}}>Trở thành người bán</Button>
                    </Link>
                    <Link href = '/login'>
                        <Button style = {{marginTop: "3px", color: "#21717A", borderColor: "#21717A"}}>Đăng nhập</Button>
                    </Link>
            </Col>
        </WrapperHeader>
        </div>
    )
}
export default Header
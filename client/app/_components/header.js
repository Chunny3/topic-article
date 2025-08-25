"use client"

import Link from "next/link";
import Image from "next/image";
import "@/styles/header.css";


export default function Header() {
    return (
        <div className="container-fluid header" style={{padding: "0 64px"}}>
            <div className="frame">
                {/* <Image src="" alt="" /> */}
                <div className="menu">
                    <div className="nav-items">
                        <h6>商品列表</h6>
                    </div>
                    <div className="nav-items">
                        <h6>預約整理師</h6>
                    </div>
                    <div className="nav-items">
                        <h6>精選文章</h6>
                    </div>
                    <div className="nav-items">
                        <h6>常見問題</h6>
                    </div>
                </div>
            </div>
            <div className="icon-group">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <Link href="/">
                    <h6>註冊</h6>
                </Link>
                <Link href="/">
                    <h6>登入</h6>
                </Link>
            </div>
        </div>
    );
}
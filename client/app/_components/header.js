"use client"

import Image from "next/image";

export default function Header() {
    return (
        <div className="container">
            <div className="frame">
            <Image src="" alt=""/>
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
                <div className="search-icon">放大鏡</div>
                <div className="cart-icon">購物車</div>
                <div className="nav-items">
                    <h6>註冊</h6>
                </div>
                <div>/</div>
                <div className="nav-items">
                    <h6>登入</h6>
                </div>
            </div>
        </div>
    );
}
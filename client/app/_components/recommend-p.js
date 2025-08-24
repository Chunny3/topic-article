"use client"

import Image from "next/image";


export default function RecommendProduct() {
    return (
        <>
            <div class="recommend-product">
                <div class="title">推薦商品</div>
                <div class="products">
                    <div class="more">查看更多</div>
                    <div class="product-cards">
                        <div class="pCard">
                            <Image class="pCardImg" src="./Image/pic2.jpg" alt="" />
                            <div class="card-detail">
                                <div class="detail-name">名稱</div>
                                <div class="detail-price">價錢</div>
                            </div>
                        </div>
                        <div class="pCard">
                            <Image class="pCardImg" src="./Image/pic1.jpg" alt="" />
                            <div class="card-detail">
                                <div class="detail-name">名稱</div>
                                <div class="detail-price">價錢</div>
                            </div>
                        </div>
                        <div class="pCard">
                            <Image class="pCardImg" src="./Image/pic3.jpg" alt="" />
                            <div class="card-detail">
                                <div class="detail-name">名稱</div>
                                <div class="detail-price">價錢</div>
                            </div>
                        </div>
                        <div class="pCard">
                            <Image class="pCardImg" src="./Image/pic3.jpg" alt="" />
                            <div class="card-detail">
                                <div class="detail-name">名稱</div>
                                <div class="detail-price">價錢</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
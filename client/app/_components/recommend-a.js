"use client"

import Image from "next/image";


export default function RecommendArticle() {
    return (
        <>
            <div class="more-articles">
                <div class="more-content">
                    <div class="title">更多文章</div>
                    <div class="articles">
                        <div class="aCard">
                            <Image class="aImg" src="./Image/pic1.jpg" alt="" />
                            <div class="aCard-detail">
                                <div class="detail-title">家的靈魂：從家具看見生活的樣子</div>
                                <div class="detail-category">居家生活</div>
                            </div>
                        </div>
                        <div class="aCard">
                            <Image class="aImg" src="./Image/pic1.jpg" alt="" />
                            <div class="acard-detail">
                                <div class="detail-title">家的靈魂：從家具看見生活的樣子</div>
                                <div class="detail-category">居家生活</div>
                            </div>
                        </div>
                        <div class="aCard">
                            <Image class="aImg" src="./Image/pic1.jpg" alt="" />
                            <div class="acard-detail">
                                <div class="detail-title">家的靈魂：從家具看見生活的樣子</div>
                                <div class="detail-category">居家生活</div>
                            </div>
                        </div>
                        <div class="aCard">
                            <Image class="aImg" src="./Image/pic1.jpg" alt="" />
                            <div class="acard-detail">
                                <div class="detail-title">家的靈魂：從家具看見生活的樣子</div>
                                <div class="detail-category">居家生活</div>
                            </div>
                        </div>
                        <div class="aCard">
                            <Image class="aImg" src="./Image/pic1.jpg" alt="" />
                            <div class="acard-detail">
                                <div class="detail-title">家的靈魂：從家具看見生活的樣子</div>
                                <div class="detail-category">居家生活</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>箭頭</div>
            </div>
        </>
    )
}
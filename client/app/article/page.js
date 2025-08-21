"use client"

import Image from "next/image";

export default function ArticlePage() {
    return (
        <div className="container-fluid">
            <div>header</div>
            <div className="begin">
                <Image src="" alt=""/>
                    <div className="hot-article">
                        <div className="hot1">
                            <h5>居家生活</h5>
                            <h2>從設計到情感：家具如何塑造我們的生活空間與內在世界</h2>
                            <p>
                                在現代人快節奏的生活裡，家具往往被視為一種「功能性配件」——我們用它來吃飯、睡覺、工作、休息。然而，真正了解家具的人都知道，它不只是生活的工具，更是空間的靈魂，是情感的投射，也是文化與品味的延伸。
                            </p>
                            <button className="readMoreButton">Read more</button>
                        </div>
                        <div className="hot2">
                            <h4>從設計到情感：家具如何塑造我們的生活空間與內在世界</h4>
                            <div className="readMore">Read more</div>
                            <div className="arrow">箭頭</div>
                        </div>
                        <div className="hot3">
                            <h4>從設計到情感：家具如何塑造我們的生活空間與內在世界</h4>
                            <div className="readMoreArrow">
                                <div className="readMore">Read more</div>
                                <div className="arrow">箭頭</div>
                            </div>
                        </div>

                    </div>
            </div>
            <div className="main">
                <div className="main-list">
                    <div className="left-bar">
                        <div className="search">
                            <h5>搜尋文章</h5>
                            <div className="search-input"></div>
                        </div>
                        <div className="left-bar-line"></div>
                        <div className="categorys-list">
                            <h5>分類</h5>
                            <div className="categorys">
                                <div className="cg">
                                    <h6>家具選購指南</h6>
                                </div>
                                <div className="cg">
                                    <h6>空間佈置技巧</h6>
                                </div>
                                <div className="cg">
                                    <h6>DIY & 手作</h6>
                                </div>
                                <div className="cg">
                                    <h6>風格解析</h6>
                                </div>
                                <div className="cg">
                                    <h6>收納與整理</h6>
                                </div>
                                <div className="cg">
                                    <h6>家具保養</h6>
                                </div>
                            </div>
                        </div>
                        <div className="left-bar-line"></div>
                        <div className="date-search">
                            <h5>日期搜尋</h5>
                            <div className="search-button">
                                <div>圖</div>
                                <div>今天</div>
                            </div>
                            {/* <div className="choose-date">
                                <div className="date-top">
                                    <div>月曆</div>
                                    <div>選日期範圍</div>
                                </div>
                                <div className="date-bottom">
                                    <div>起始</div>
                                    <div>線</div>
                                    <div>終點</div>
                                </div>
                            </div>  */}
                        </div>
                        <div className="left-bar-line"></div>
                        <div className="populars">
                            <div>人氣</div>
                            <div className="popular-list">
                                <div className="ppr">
                                    <h6>熱門文章</h6>
                                </div>
                                <div className="ppr">
                                    <h6>收藏數最多</h6>
                                </div>
                                <div className="ppr">
                                    <h6>被分享最多</h6>
                                </div>
                                <div className="ppr">
                                    <h6>風格解析</h6>
                                </div>
                                <div className="ppr">
                                    <h6>收納與整理</h6>
                                </div>
                                <div className="ppr">
                                    <h6>家具保養</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-article">
                        <div className="main-article-list">
                            {/* 卡片區 */}
                            <div className="article-row">
                                <div className="article-row card">
                                    <Image src="./Image/pic2.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic1.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic3.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                            </div>
                            <div className="article-row">
                                <div className="article-row card">
                                    <Image src="./Image/pic2.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic1.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic3.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                            </div>
                            <div className="article-row">
                                <div className="article-row card">
                                    <Image src="./Image/pic2.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic1.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                                <div className="article-row card">
                                    <Image src="./Image/pic3.jpg" alt=""/>
                                        <h5>如何挑選一張理想的沙發？設計、材質與舒適度全面解析</h5>
                                        <h6>2025.07.24</h6>
                                        <div className="card-category">
                                            <h6>#家居設計</h6>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination">
                            <div className="left-arrow">left arrow</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div className="right-arrow">right arrow</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>footer</div>
        </div>
    );
}
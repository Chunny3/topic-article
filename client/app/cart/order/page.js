"use client"

export default function CartOrderPage() {
    return (
        <div className="container">
            <div className="top">
                <div className="title">
                    <h2>購物車</h2>
                </div>
                <div className="gradation">
                    {/* 有重複------------------------- */}
                    <div className="name">
                        <div className="round">1</div>
                        <h5>訂單資訊</h5>
                    </div>
                    <div className="line"></div>
                    <div className="name">
                        <div className="round">2</div>
                        <h5>填寫地址與付款</h5>
                    </div>
                    <div className="line"></div>
                    <div className="name">
                        <div className="round">3</div>
                        <h5>完成訂單</h5>
                    </div>
                    {/* ------------------------------ */}
                </div>
            </div>
            <div className="main">
                <div className="left-side">
                    <div className="cart-title">
                        <div className="choose-all">
                            <input type="checkbox">選擇全部</input>
                        </div>
                        <button>刪除</button>
                    </div>
                    <div className="cart-main">
                        {/* 有重複---------------------- */}
                        <div className="cart-card">
                            <div className="card-left">
                                <input type="checkbox" />
                                <Image src="" alt="" />
                                <div className="card-title">
                                    <h6>北歐極簡風格可調式高背人體工學多段傾斜頭枕扶手全實木結構布面透氣可拆洗懶人休閒電動搖椅（附腳凳＋USB充電孔＋杯架）居家工作兩用型多功能設計沙發椅</h6>
                                    <p>顏色</p>
                                </div>
                            </div>
                            <div className="card-right">
                                <div>x</div>
                                <div className="price-num">
                                    <h5>$1000</h5>
                                    <div className="quantity">
                                        <button className="minus">-</button>
                                        <div className="num">1</div>
                                        <button className="plus">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------- */}
                    </div>
                </div>
                <div className="right-side">
                    <h5>總金額</h5>
                    <div className="amount-list">
                        <div className="pAmount">
                            <p>商品總金額</p>
                            <h6>商品總金額</h6>
                        </div>
                        <div className="choose-cp">
                            <h6>選擇優惠券</h6>
                            <button>Coupons</button>
                        </div>
                        <div className="cp-discount">
                            <p>優惠券折抵</p>
                            <h6>$0</h6>
                        </div>
                        <div className="line"></div>
                        <div className="fee">
                            <p>運費折抵</p>
                            <h6>$0</h6>
                        </div>
                        <div className="line"></div>
                        <div className="total">
                            <h6>總金額</h6>
                            <h6>$12,000</h6>
                        </div>
                    </div>
                    <div className="nextOrBack">
                        <button className="next">
                            <h6>前往下一步</h6>
                        </button>
                        <button className="back">
                            <h6>繼續購物</h6>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
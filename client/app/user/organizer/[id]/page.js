'use client'
import ListDetails from './_components/ListDetails'
//CSS
import styles from '@/styles/userOrganizer/userOrganizer.module.css'
// 自訂組件(全域)
import TabItem from '@/app/_components/TabItem'
// 自訂組件 (專用)

export default function UserCouponPage() {
  return (
    <>
      <section>
        <div className="container-xl">
          <div className="d-flex flex-column gap-lg section">
            <h2 className="t-primary01 text-center">預約記錄</h2>
            <div className="d-flex justify-content-between">
              <button className={`btn `}>
                1.諮詢中
                <br />
                待整理師聯繫報價
              </button>

              <div className={`btn ${styles.brownBtn}`}>查看期間限定優惠券</div>
            </div>
            <ListDetails />
          </div>
        </div>
      </section>
    </>
  )
}

'use client'
import ListCard from './_components/ListCard'
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
            <div className="d-flex gap-lg">
              <TabItem>可使用</TabItem>
              <TabItem>已使用</TabItem>
            </div>
            <div className={`btn ${styles.brownBtn}`}>查看期間限定優惠券</div>
          </div>
          <ListCard />
        </div>
        </div>
      </section>
    </>
  )
}

// 導入組裝的元件
// import Sidebar from './_components/layout/sidebar'

export const metadata = {
  title: '管理中心',
  description: '這是管理中心的描述',
}

export default function AdminLayout({ children }) {
  return (
    <>
      {/* <Sidebar /> */}
      {children}
    </>
  )
}

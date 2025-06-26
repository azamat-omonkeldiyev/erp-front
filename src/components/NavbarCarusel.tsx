import { useContext } from "react"
import { Context } from "../context/Context"
import { Menu } from 'antd';
import { DashboardNavList } from "../hook/paths";



const NavbarCarusel = () => {
    const {showNavbar} = useContext(Context)
  return (
    <div style={{width: '100%'}}>
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={showNavbar}
            items={DashboardNavList}
        />
    </div>
  )
}

export default NavbarCarusel
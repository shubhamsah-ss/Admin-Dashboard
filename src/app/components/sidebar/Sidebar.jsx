import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter, MdLogout, MdPeople, MdSettings, MdShoppingBag, MdSupervisorAccount, MdWork
} from "react-icons/md";
import Styles from './Sidebar.module.css';
import MenuLinks from "./menuLinks/MenuLinks";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisorAccount />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ]
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
    ]
  }
]

const Sidebar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.user}>
        <Image className={Styles.userImg} src="/noavatar.png" alt="" width="50" height="50" />
        <div className={Styles.userDetail}>
          <span className={Styles.username}>John Johny</span>
          <span className={Styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={Styles.list}>
      {
        menuItems.map(cat => (
          <li key={cat.title}>
            <span className={Styles.cat}>{cat.title}</span>  
            {
              cat.list.map(item => (
                <MenuLinks item={item} key={item.title} />
              ))
            }
          </li>
        ))
      }
      </ul>

      <button className={Styles.logout}>
        <MdLogout/>  Logout
      </button>
    </div>
  )
}

export default Sidebar
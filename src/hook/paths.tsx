import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import NotFound from "../pages/Dashboard/NotFound"
import { Groups, Home, Major, Students, Teachers } from "../pages/Dashboard"

export const paths = {
  home: "/",
  signin: "/signin",
  major: "/major",
  groups: "/groups",
  students: "/students",
  teachers: "/teachers",
  notFound: "*"
}

export const DashboardRouteList = [
  {
    id: 1,
    path: paths.home,
    element: <Home />
  },
  {
    id: 2,
    path: paths.major,
    element: <Major />
  },
  {
    id: 3,
    path: paths.groups,
    element: <Groups />
  },
  {
    id: 4,
    path: paths.students,
    element: <Students />
  },
  {
    id: 5,
    path: paths.teachers,
    element: <Teachers />
  },
  {
    id: 6,
    path: paths.notFound,
    element: <NotFound />
  }
]

export const DashboardNavList = [
  {
    id: 1,
    title: "Yo'nalishlar",
    icon: <UnorderedListOutlined />
  },
  {
    id: 2,
    title: "Guruhlar",
    icon: <UngroupOutlined />
  },
  {
    id: 3,
    title: "O'quvchilar",
    icon: <TeamOutlined />
  },
  {
    id: 4,
    title: "Ustozlar",
    icon: <UserOutlined />
  }
]

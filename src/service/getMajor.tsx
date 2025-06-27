import { useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/Context"
import { instance } from "../hook/instance"
import { formatTime } from "../hook/formatTime"
import { Button } from "antd"
import { MoreOutlined } from "@ant-design/icons"


export const getMajor = (url: string, search:string, setLoading:Dispatch<SetStateAction<boolean>>) => {
    const [data, setData] = useState<any>([])
    const navigate = useNavigate()
    const {token} = useContext(Context)

    useEffect(() => {
        instance(url, {
            params:{name:search},
            headers:{"Authorization":`Bearer ${token}`}
        }).then(res => {
            res.data.data.map((item:any) => {
                item.createdAt = formatTime(item.createdAt)  
                item.key = item.id
                item.action = <Button onClick={() => navigate(`${item.id}`)} className="w-[25px] h-[25px]"  size="small"> <MoreOutlined/> </Button>
                return item
            })
            setData(res.data)
            setLoading(false)
        })
    },[search])

    return data
}

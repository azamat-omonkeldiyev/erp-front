import { Table } from "antd";
import type { FC } from "react";

const CustomTable: FC<{columns: any[], data: any[], loading:boolean}> = ({columns,data,loading}) => (
  <Table<any> loading={loading} columns={columns} dataSource={data}/>
);

export default CustomTable;

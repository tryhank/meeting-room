import React from "react";
import { List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const App: React.FC = () => (
  <List
    bordered
    pagination={{}}
    dataSource={data}
    renderItem={(item) => (
      <List.Item actions={[<a key="list-loadmore-edit">撤销预定</a>]}>
        <Typography.Text mark>[ITEM]</Typography.Text> {item}
      </List.Item>
    )}
  />
);

export default App;

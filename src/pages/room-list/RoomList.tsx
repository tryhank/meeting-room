import { useState } from "react";
import { Card, Table, Form, Input, DatePicker, Button, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Item } from "../../components/SearchBar/SearchBar";
import SearchBar from "../../components/SearchBar/SearchBar";

interface DataType {
  key: string;
  name: string;
  count: number;
  device: string;
}

const items: Item[] = [
  {
    label: "名称",
    field: "name",
    type: "input",
  },
  {
    label: "人数",
    field: "count",
    type: "input",
  },
  {
    label: "位置",
    field: "address",
    type: "input",
  },
  {
    label: "设备",
    field: "device",
    type: "multiple",
    options: [
      {
        label: "白板",
        value: "wb",
      },
      {
        label: "电视",
        value: "tv",
      },
    ],
  },
];

export default function RoomList() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "人数",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "设备",
      dataIndex: "device",
      key: "device",
    },
    {
      title: "操作",
      key: "action",
      render: () => <a onClick={showModal}>预定</a>,
    },
  ];

  const data: DataType[] = [
    {
      key: "aaa",
      name: "会议室1",
      count: 10,
      device: "白板、电视",
    },
  ];

  return (
    <>
      <Card mb-4>
        <SearchBar items={items} onSubmit={onSubmit} />
      </Card>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="预定会议室"
        open={isModalOpen}
        centered
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="会议室名称"
            name="name"
            rules={[{ required: true, message: "请输入会议室名称" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="开始时间"
            name="start_time"
            rules={[{ required: true, message: "请选择开始时间" }]}
          >
            <DatePicker showTime />
          </Form.Item>

          <Form.Item
            label="结束时间"
            name="end_time"
            rules={[{ required: true, message: "请选择结束时间" }]}
          >
            <DatePicker showTime />
          </Form.Item>

          <Form.Item label="参会人员" name="member">
            <Input />
          </Form.Item>

          <Form.Item label="备注" name="desc">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              预定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

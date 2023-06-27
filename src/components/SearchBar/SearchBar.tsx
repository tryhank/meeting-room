import type { SelectProps } from "antd";
import { Row, Col, Button, Form, Input, Select } from "antd";
import styles from "./index.module.less";

export type Item = {
  label: string;
  field: string;
  type: "input" | "select" | "multiple";
  options?: SelectProps["options"];
};

export interface SearchBarProps {
  items: Item[];
  onSubmit: (values: any) => void;
}

const switchType = (item: Item) => {
  const { type, options } = item;
  if (type === "input") {
    return <Input />;
  } else if (type === "select") {
    return <Select options={options} />;
  } else {
    return <Select mode="multiple" options={options} />;
  }
};

export default function SearchBar(props: SearchBarProps) {
  const [form] = Form.useForm();
  const submit = () => {
    const values = form.getFieldsValue();
    props.onSubmit(values);
  };
  return (
    <Row>
      <Col span={20}>
        <Form form={form} className={styles["form-item"]}>
          <Row gutter={24}>
            {props.items.map((item) => {
              return (
                <Col span={6} key={item.field}>
                  <Form.Item label={item.label} name={item.field}>
                    {switchType(item)}
                  </Form.Item>
                </Col>
              );
            })}
          </Row>
        </Form>
      </Col>
      <Col span={4} text-right>
        <Button type="primary" onClick={submit}>
          <span>查询</span>
        </Button>
      </Col>
    </Row>
  );
}

import { Button, Form, Input, Col } from "antd";
import { useNavigate, NavLink } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div h-screen flex flex-justify-center flex-items-center>
      <div w-xs>
        <h1 text-center mb-8 mt-0 text-6>
          会议室预定系统
        </h1>
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
            label="用户名/邮箱"
            name="username"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>

          <Col offset={8} mb-6>
            <div flex flex-justify-between>
              <span cursor-pointer onClick={() => navigate("../register")}>
                创建账号
              </span>
              <span cursor-pointer>忘记密码</span>
            </div>
          </Col>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

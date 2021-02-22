import React, { Component } from "react";

import "./login.scss";

import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { reqLogin } from "../../api";

import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import { Redirect } from "react-router-dom";


/*
登录的路由组件
*/

class Login extends Component {
  render() {
    //如果用户已经登录，自动跳转到到管理页面
    const user = memoryUtils.user
    if(user && user._id){
      return <Redirect to='/' />
    }
    return (
      <div className="login">
        <div className="login-form">
          <p className="login-text">用户登录</p>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, whitespace: true, message: "请输入用户名!" },
                { min: 4, message: "用户名至少4位!" },
                { max: 12, message: "用户名最多12位!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="username"
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "请输入密码!" },
                { min: 4, message: "密码至少4位!" },
                { max: 12, message: "密码最多12位!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  onFinish = async (values) => {
    const { username, password } = values;
    const res = await reqLogin(username, password);
    // console.log("请求成功", res);
    const result = res.data;
    if (result.status === 0) {
      message.success("登录成功");
      const user = result.data
      memoryUtils.user = user //保存在内存中
      storageUtils.saveUser(user) //保存到local中
      this.props.history.replace("/");
    } else {
      message.error(result.msg);
    }
  };
}

export default Login;

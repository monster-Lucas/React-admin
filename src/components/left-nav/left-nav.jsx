import React, { Component } from "react";
import "./index.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";

import {
  AppstoreOutlined,
  PieChartOutlined,
  MailOutlined,
} from "@ant-design/icons";

import menuList from '../../config/menuConfig.js'

const { SubMenu } = Menu;

/*左侧导航的组件 */
export default class leftNav extends Component {
  render() {
    return (
      <div>
        <div className="left-nav">
          <Link to="/" className="left-nav-header">
            <img src={logo} alt="logo" />
            <h1>XX后台</h1>
          </Link>
        </div>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="5" icon={<PieChartOutlined />}>品类管理</Menu.Item>
            <Menu.Item key="6" icon={<PieChartOutlined />}>商品管理</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

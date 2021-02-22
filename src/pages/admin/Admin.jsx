import React, { Component } from "react";
import { Redirect,Route,Switch  } from "react-router-dom";

import memoryUtils from "../../utils/memoryUtils";
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import Home from '../home/Home'
import Category from '../category/Category'
import Product from '../product/Product'
import Role from '../role/Role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'


import { Layout } from "antd";

const {  Footer, Sider, Content } = Layout;

/*
后台管理的路由组件
*/
export default class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    if (!user || !user._id) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{height:'100%'}}>
        <Sider>
            <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{backgroundColor:'#fff'}}>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/charts/bar" component={Bar}></Route>
              <Route path="/charts/line" component={Line}></Route>
              <Route path="/charts/pie" component={Pie}></Route>
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer style={{textAlign:'center',color:'#ccc'}}>推荐使用google浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}

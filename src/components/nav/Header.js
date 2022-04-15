import React, { useState,useEffect } from "react";
import "../defaultLayout/Layout.css"
import { Menu, Badge, Layout } from "antd";
import Footer from "../footer/Footer";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  SubnodeOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import Hero from "../hero/Hero";
const { Header, Sider, Content } = Layout;


const { SubMenu, Item } = Menu;

const HeaderMain = (props) => {
  const [current, setCurrent] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  // const { cartItems, loading } = useSelector((state) => state.rootReducer);
  // const navigate = useNavigate()
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Layout >  
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <h3>{collapsed ? "LS" : "LEAD SHOP"}</h3>
      </div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
        theme="dark"
      >
        {/* <Item key="home" icon={<AppstoreOutlined />}> */}

        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">
          Home
            {/* <img src="leadlogo.png" width="100" height="50" /> */}
          </Link>
        </Item>
        <Item className="" key="shop" icon={<ShoppingOutlined />}>
          <Link to="/shop">Shop</Link>
        </Item>
        <Item className="text-white" key="cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart" className="text-white">
            <Badge count={cart.length} offset={[9, 0]} className="text-white">
              Cart
            </Badge>
          </Link>
        </Item>
        <Item className="" key="category" icon={<UnorderedListOutlined />}>
          <Link to="/categorieslist">Categories</Link>
        </Item>
        <Item className="" key="category" icon={<SubnodeOutlined />}>
          <Link to="/subcategorieslist">Sub Categories</Link>
        </Item>
        <Item className="" key="faq" icon={<QuestionCircleOutlined />}>
          <Link to="/faq">FAQ</Link>
        </Item>
        <Item className="" key="leadnews" icon={<InfoCircleOutlined />}>
          <Link to="/leadnews">LeadNews</Link>
        </Item>
        <Item className="" key="contact" icon={<MessageOutlined />}>
          <Link to="/contact">Contact Us</Link>
        </Item>
        {/* <Item className=" me-auto col-md-6 p-1">
          <Search />
        </Item> */}
        {!user && (
          <Item key="register" icon={<UserAddOutlined />} className="">
            <Link to="/register">Register</Link>
          </Item>
        )}

        {!user && (
          <Item key="login" icon={<UserOutlined />} className="">
            <Link to="/login">Login</Link>
          </Item>
        )}

        {user && (
          <SubMenu
            icon={<SettingOutlined />}
            title={user.email && user.email.split("@")[0]}
            className=""
            key={user.email}
          >
            {user && user.role === "subscriber" && (
              <Item>
                <Link to="/user/history">Dashboard</Link>
              </Item>
            )}

            {user && user.role === "admin" && (
              <Item>
                <Link to="/admin/dashboard">Dashboard</Link>
              </Item>
            )}

            <Item icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </SubMenu>
        )}
      </Menu>
    </Sider>
    <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="inline"
        theme="light"
      >  
        <Item className=" ">
          <Search />
        </Item>     

             </Menu>
          <div
            className="cart-count d-flex align-items-center"
            onClick={() =>   history.push("/cart")}
          >
       
            {/* <b>
              {" "}
              <p className="mt-3 me-2">{cartItems.length}</p>
            </b> */}
            <ShoppingCartOutlined />
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px",
            padding: 24,
            minHeight:'80vh',         

          }}
        >
        {/* <Hero/> */}
          {props.children}
          <Footer></Footer>
        </Content>
    
      </Layout>
      </Layout>
  );
};

export default HeaderMain;

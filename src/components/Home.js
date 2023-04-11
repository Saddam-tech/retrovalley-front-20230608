import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  function handleChangeEvent(_value) {
    switch (_value) {
      case 0:
        navigate("/home/main");
        break;
      case 1:
        navigate("/home/products");
        break;
      case 2:
        navigate("/product_upload");
        break;
      case 3:
        navigate("/home/nomatch");
        break;
      case 4:
        navigate("/home/menu");
        break;
      default:
    }
  }
  return (
    <Container>
      <Outlet />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "8px",
            height: 85,
          }}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            handleChangeEvent(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Upload" icon={<ControlPointIcon />} />
          <BottomNavigationAction label="Talk" icon={<ChatIcon />} />
          <BottomNavigationAction label="My" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  .routes-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

import React from "react";
import Paper from "@mui/material/Paper";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
// import HomeIcon from "../Icons/HomeIcon";
// import SearchIcon from "../Icons/SearchIcon";

const Home = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Container>
      <section className="content-wrapper">
        <Outlet />
      </section>

      <div className="routes-wrap">
        <Link to="Menu">Menu</Link>
        <Link to="category">Category</Link>
        <Link to="comics">Comics</Link>
      </div>

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
          onChange={(event, newValue) => {
            setValue(newValue);
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
  width: 100%;
  .content-wrapper {
    padding: 20px;
  }
  .routes-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

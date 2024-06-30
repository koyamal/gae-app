import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { useNavigate } from "react-router-dom";

export default function MyDrawer() {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const MenuList = [
    {pageTitle: "Home", pagePath: "/", icon: HomeIcon},
    {pageTitle: "UserInfo", pagePath: "/user", icon: InfoIcon},
    {pageTitle: "UserAdd", pagePath: "/adduser", icon: AddCircleIcon},
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {MenuList.map((menuItem, index) => (
          <ListItem key={menuItem.pageTitle} disablePadding>
            <ListItemButton onClick={() => { navigation(menuItem.pagePath)}}>
              <ListItemIcon>
                {menuItem.icon? <menuItem.icon /> : <LunchDiningIcon />}
              </ListItemIcon>
              <ListItemText primary={menuItem.pageTitle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{color: "black"}} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
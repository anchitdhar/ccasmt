import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        icon={<CalendarTodayIcon />}
      />
      <BottomNavigationAction
        label="Favorite"
        value="favourite"
        icon={<FavoriteBorderIcon />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
      />
    </BottomNavigation>
  );
}

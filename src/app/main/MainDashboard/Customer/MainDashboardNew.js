import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setToolbarHeader } from "app/store/fuse/toolbarHeaderSlice";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import clsx from "clsx";
import FuseScrollbars from "@fuse/core/FuseScrollbars/FuseScrollbars";
import { makeStyles } from "@material-ui/core/styles";
import Transactions from "app/main/PTR/Customer/Billing/Components/Transactions";
import BillingSummary from "app/main/PTR/Customer/Billing/Components/BillingSummary";

const useStyles = makeStyles((theme) => ({
  contentCard: {
    display: "flex",
    flex: "1 1 100%",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    minHeight: 0,
    borderRadius: "20px",
    margin: "20px",
    overflow: "hidden",
  },
}));

const MainDashboardNew = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles(props);

  useEffect(() => {
    dispatch(setToolbarHeader("Main Dashboard"));
  }, []);

  return <div className={clsx(classes.contentCard, "inner-scroll")}></div>;
};

export default MainDashboardNew;

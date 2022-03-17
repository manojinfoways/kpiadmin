import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, ThemeProvider, useTheme } from "@material-ui/core/styles";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Autocomplete, Button, MenuItem, TextField } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import _ from "@lodash";
import { useEffect, memo, useState } from "react";
import { fetchDependancy } from "../../store/kplAnalyticsSlice";
import { selectContrastMainTheme } from "app/store/fuse/settingsSlice";

import Highcharts, { numberFormat } from "highcharts";
import TreeMapChart from "highcharts/modules/treemap";

import HighchartsReact from "highcharts-react-official";
TreeMapChart(Highcharts);

import { filter } from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    background: `#252f3e`,
    color: theme.palette.primary.contrastText,
  },
}));
function LargeTreeMap(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const contrastTheme = useSelector(
    selectContrastMainTheme(theme.palette.primary.main)
  );  

  const chartData = useSelector(({ kplAnalytics }) => kplAnalytics.dependancy);
  let [cloudeData, setcloudeData] = useState([{ options: [], series: [] }]);
  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  const renderChart = () => {
    let labels = chartData.map(function (el) {
      return el.title;
    });
    let response_count = chartData.map(function (el) {
      return parseFloat(el.response_count);
    });
    let response_percentage = chartData.map(function (el) {
      return parseFloat(el.response_percentage);
    });

    
    let op = {
      series: [ {
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [ {
          level: 1,
          layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            style: {
              fontSize: '15px',
              fontWeight: 'bold'
            }
          }
        } ],
        data: [ {
          id: 'A',
          name: 'Apples',
          color: "#EC2500"
        }, {
          id: 'B',
          name: 'Bananas',
          color: "#ECE100"
        }, {
          id: 'O',
          name: 'Oranges',
          color: '#EC9800'
        }, {
          name: 'Anne',
          parent: 'A',
          value: 5
        }, {
          name: 'Rick',
          parent: 'A',
          value: 3
        }, {
          name: 'Peter',
          parent: 'A',
          value: 4
        }, {
          name: 'Anne',
          parent: 'B',
          value: 4
        }, {
          name: 'Rick',
          parent: 'B',
          value: 10
        }, {
          name: 'Peter',
          parent: 'B',
          value: 1
        }, {
          name: 'Anne',
          parent: 'O',
          value: 1
        }, {
          name: 'Rick',
          parent: 'O',
          value: 3
        }, {
          name: 'Peter',
          parent: 'O',
          value: 3
        }, {
          name: 'Susanne',
          parent: 'Kiwi',
          value: 2,
          color: '#9EDE00'
        } ]
      } ],
      title: {
        text: 'Fruit consumption'
      }
    };
    setcloudeData({ options: op });
  };

  useEffect(() => {
    renderChart();
  }, [chartData]);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="w-full rounded-20 shadow ">
      <div className="flex flex-col items-center m-20 sm:items-start mb-16 sm:mb-0">
        <Typography className="h2 font-medium ">Bell Curve</Typography>
      </div>
      <div className="h-350 w-full">
        {cloudeData.options ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={cloudeData.options}
          />
        ) : null}
      </div>
    </Paper>
  );
}

export default memo(LargeTreeMap);

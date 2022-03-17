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
import HpDepend from "highcharts/modules/dependency-wheel";
HpDepend(Highcharts);
import HighchartsReact from "highcharts-react-official";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    background: `#252f3e`,
    color: theme.palette.primary.contrastText,
  }, 
}));
function DependancyWheel(props) {
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

      title: {
          text: 'Highcharts Dependency Wheel'
      },
  
      accessibility: {
          point: {
              valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
          }
      },
  
      series: [{
          keys: ['from', 'to', 'weight'],
          data: [
              ['Brazil', 'Portugal', 5],
              ['Brazil', 'France', 1],
              ['Brazil', 'Spain', 1],
              ['Brazil', 'England', 1],
              ['Canada', 'Portugal', 1],
              ['Canada', 'France', 5],
              ['Canada', 'England', 1],
              ['Mexico', 'Portugal', 1],
              ['Mexico', 'France', 1],
              ['Mexico', 'Spain', 5],
              ['Mexico', 'England', 1],
              ['USA', 'Portugal', 1],
              ['USA', 'France', 1],
              ['USA', 'Spain', 1],
              ['USA', 'England', 5],
              ['Portugal', 'Angola', 2],
              ['Portugal', 'Senegal', 1],
              ['Portugal', 'Morocco', 1],
              ['Portugal', 'South Africa', 3],
              ['France', 'Angola', 1],
              ['France', 'Senegal', 3],
              ['France', 'Mali', 3],
              ['France', 'Morocco', 3],
              ['France', 'South Africa', 1],
              ['Spain', 'Senegal', 1],
              ['Spain', 'Morocco', 3],
              ['Spain', 'South Africa', 1],
              ['England', 'Angola', 1],
              ['England', 'Senegal', 1],
              ['England', 'Morocco', 2],
              ['England', 'South Africa', 7],
              ['South Africa', 'China', 5],
              ['South Africa', 'India', 1],
              ['South Africa', 'Japan', 3],
              ['Angola', 'China', 5],
              ['Angola', 'India', 1],
              ['Angola', 'Japan', 3],
              ['Senegal', 'China', 5],
              ['Senegal', 'India', 1],
              ['Senegal', 'Japan', 3],
              ['Mali', 'China', 5],
              ['Mali', 'India', 1],
              ['Mali', 'Japan', 3],
              ['Morocco', 'China', 5],
              ['Morocco', 'India', 1],
              ['Morocco', 'Japan', 3],
              ['Japan', 'Brazil', 1]
          ],
          type: 'dependencywheel',
          name: 'Dependency wheel series',
          dataLabels: {
              color: '#333',
              textPath: {
                  enabled: true,
                  attributes: {
                      dy: 5
                  }
              },
              distance: 10
          },
          size: '95%'
      }]
  
  }
     
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
        <Typography className="h2 font-medium ">Dependancy Wheel</Typography>
      </div>
      <div className="h-350 w-full">
        { cloudeData.options ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={cloudeData.options}
          />
        ) : <div>No dDDDD</div>}
      </div>
    </Paper>
  );
}

export default memo(DependancyWheel);

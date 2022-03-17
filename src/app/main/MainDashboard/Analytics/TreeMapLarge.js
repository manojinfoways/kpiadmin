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
import jsondata from './treeMapData.json';
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
function TreeMapLarge(props) {
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
    console.log("jsondata",jsondata);
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

    
   

      var points = [],
        regionP,
        regionVal,
        regionI = 0,
        countryP,
        countryI,
        causeP,
        causeI,
        region,
        country,
        cause,
        causeName = {
          'Communicable & other Group I': 'Communicable diseases',
          'Noncommunicable diseases': 'Non-communicable diseases',
          Injuries: 'Injuries'
        };
    let data = jsondata;
      for (region in data) {
        if (Object.hasOwnProperty.call(data, region)) {
          regionVal = 0;
          regionP = {
            id: 'id_' + regionI,
            name: region,
            color: Highcharts.getOptions().colors[regionI]
          };
          countryI = 0;
          for (country in data[region]) {
            if (Object.hasOwnProperty.call(data[region], country)) {
              countryP = {
                id: regionP.id + '_' + countryI,
                name: country,
                parent: regionP.id
              };
              points.push(countryP);
              causeI = 0;
              for (cause in data[region][country]) {
                if (Object.hasOwnProperty.call(
                  data[region][country], cause
                )) {
                  causeP = {
                    id: countryP.id + '_' + causeI,
                    name: causeName[cause],
                    parent: countryP.id,
                    value: Math.round(+data[region][country][cause])
                  };
                  regionVal += causeP.value;
                  points.push(causeP);
                  causeI = causeI + 1;
                }
              }
              countryI = countryI + 1;
            }
          }
          regionP.value = Math.round(regionVal / countryI);
          points.push(regionP);
          regionI = regionI + 1;
        }
      }
    
let ops = {
  series: [ {
    name: 'Regions',
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    allowDrillToNode: true,
    animationLimit: 1000,
    dataLabels: {
      enabled: false
    },
    levels: [ {
      level: 1,
      dataLabels: {
        enabled: true
      },
      borderWidth: 3,
      levelIsConstant: false
    }, {
      level: 1,
      dataLabels: {
        style: {
          fontSize: '14px'
        }
      }
    } ],
    data: points
  } ],
  subtitle: {
    text: 'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
  },
  title: {
    text: 'Global Mortality Rate 2012, per 100 000 population'
  }
};
    setcloudeData({ options: ops });
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
        <Typography className="h2 font-medium ">Tree Large</Typography>
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

export default memo(TreeMapLarge);

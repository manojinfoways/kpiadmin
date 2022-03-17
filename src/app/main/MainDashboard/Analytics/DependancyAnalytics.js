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
import { fetchChartSankey } from "../../store/chartSlice";
import { selectContrastMainTheme } from "app/store/fuse/settingsSlice";

import Highcharts, { numberFormat } from "highcharts";
import HighchartsSankey from "highcharts/modules/dependency-wheel";
import HighchartsReact from "highcharts-react-official";
HighchartsSankey(Highcharts);

import { filter } from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    background: `#252f3e`,
    color: theme.palette.primary.contrastText,
  },
}));
function Chart(props) {
	
  const dispatch = useDispatch();
  const theme = useTheme();
  const contrastTheme = useSelector(
    selectContrastMainTheme(theme.palette.primary.main)
  );

  const chartData = useSelector(({ chart }) => chart.chartSankey);

  const [chartType, setChartType] = useState("bar");
  let [barData, setBarData] = useState([{ options: [], series: [] }]);

  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

  const filterQuestions = () => {
    let checkinArray = [3, 4, 8, 10, 11];
    console.log("questionsList", questionsList);
    if (!questionsList) {
      return false;
    }
    let qList = questionsList.filter((i) => {
      return checkinArray.includes(i.questionTypeId);
    });
    setSurveryQuestions(qList);
    console.log("MCNT", qList.length);
  };
  useEffect(() => {
    setAwaitRender(false);
  }, []);
	
	

  const barChart = () => {
    let labels = chartData.map(function (el) {
      return el.title;
    });
    let response_count = chartData.map(function (el) {
      return parseFloat(el.response_count);
    });
    let response_percentage = chartData.map(function (el) {
      return parseFloat(el.response_percentage);
    });
    let colors = [
      "#003f5c",
      "#2f4b7c",
      "#665191",
      "#a05195",
      "#d45087",
      "#f95d6a",
      "#ff7c43",
      "#ffa600",
    ];
    let op = {
      title: {
        text: ""
      },
      series: [
        {
          keys: [ "from", "to", "weight" ],
          data: [
            [ "Brazil", "Portugal", 5 ],
            [ "Brazil", "France", 1 ],
            [ "Brazil", "Spain", 1 ],
            [ "Brazil", "England", 1 ],
            [ "Canada", "Portugal", 1 ],
            [ "Canada", "France", 5 ],
            [ "Canada", "England", 1 ],
            [ "Mexico", "Portugal", 1 ],
            [ "Mexico", "France", 1 ],
            [ "Mexico", "Spain", 5 ],
            [ "Mexico", "England", 1 ],
            [ "USA", "Portugal", 1 ],
            [ "USA", "France", 1 ],
            [ "USA", "Spain", 1 ],
            [ "USA", "England", 5 ],
            [ "Portugal", "Angola", 2 ],
            [ "Portugal", "Senegal", 1 ],
            [ "Portugal", "Morocco", 1 ],
            [ "Portugal", "South Africa", 3 ],
            [ "France", "Angola", 1 ],
            [ "France", "Senegal", 3 ],
            [ "France", "Mali", 3 ],
            [ "France", "Morocco", 3 ],
            [ "France", "South Africa", 1 ],
            [ "Spain", "Senegal", 1 ],
            [ "Spain", "Morocco", 3 ],
            [ "Spain", "South Africa", 1 ],
            [ "England", "Angola", 1 ],
            [ "England", "Senegal", 1 ],
            [ "England", "Morocco", 2 ],
            [ "England", "South Africa", 7 ],
            [ "South Africa", "China", 5 ],
            [ "South Africa", "India", 1 ],
            [ "South Africa", "Japan", 3 ],
            [ "Angola", "China", 5 ],
            [ "Angola", "India", 1 ],
            [ "Angola", "Japan", 3 ],
            [ "Senegal", "China", 5 ],
            [ "Senegal", "India", 1 ],
            [ "Senegal", "Japan", 3 ],
            [ "Mali", "China", 5 ],
            [ "Mali", "India", 1 ],
            [ "Mali", "Japan", 3 ],
            [ "Morocco", "China", 5 ],
            [ "Morocco", "India", 1 ],
            [ "Morocco", "Japan", 3 ]
          ],
          type: "sankey",
          name: "Sankey demo series"
        }
      ]
    };
    

    setBarData(op);
  };

//   useEffect(() => {
//     dispatch(fetchChartSankey([73, 6, 13]))
//       .then(() => {})
//       .catch(() => {});
//   }, []);

	
  useEffect(() => {
    barChart();
  }, []);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="w-full rounded-20 shadow ">
      <div className="flex flex-col items-center m-20 sm:items-start mb-16 sm:mb-0">
        {/* <Typography className="h2 font-medium " >
			  Sankey chart
			  </Typography> */}
      </div>
      <div className="h-350 w-full">
			  { barData.series[0]['data'].length ? (
				  <HighchartsReact highcharts={ Highcharts } options={ barData } />
			  ) : null
			}
      </div>
    </Paper>
  );
}

export default memo(Chart);

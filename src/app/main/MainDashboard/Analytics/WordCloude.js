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
import WordCloudCharrt from "highcharts/modules/wordcloud";

import HighchartsReact from "highcharts-react-official";
WordCloudCharrt(Highcharts);

import { filter } from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    // background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    background: `#252f3e`,
    color: theme.palette.primary.contrastText,
  },
}));
function WordCloude(props) {
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

    const text =
        "Lorem ipsum Maxwell dolor sit amet, consectetur Patel elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed Maxwell Maxwellornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada,Maxwell vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.",
      lines = text.split(/[,\. ]+/g),
      data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, (obj) => obj.name === word);
        if (obj) {
          obj.weight += 1;
        } else {
          obj = {
            name: word,
            weight: 1,
          };
          arr.push(obj);
        }
        return arr;
      }, []);

    const options = {
      accessibility: {
        screenReaderSection: {
          beforeChartFormat:
            "<h5>{chartTitle}</h5>" +
            "<div>{chartSubtitle}</div>" +
            "<div>{chartLongdesc}</div>" +
            "<div>{viewTableButton}</div>",
        },
      },
      series: [
        {
          type: "wordcloud",
          data,
          name: "Occurrences",
        },
      ],
      title: {
        text: "Wordcloud of Lorem Ipsum",
      },
    };
    setcloudeData({ options: options });
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
        <Typography className="h2 font-medium ">Word Cloude chart</Typography>
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

export default memo(WordCloude);

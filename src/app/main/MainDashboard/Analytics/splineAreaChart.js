import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
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

import { fetchTasks } from "../../store/taskSlice";
import { fetchDashboardTaskStatusChartData } from "../../store/chartSlice";

import ReactApexChart from "react-apexcharts";
import { filter } from "lodash";
const legendColor = {
  OPEN: "#0A75AD",
  COMPLETED: "#4dff00",
  CANCELLED: "#ffd000",
  NOHOME: "#353735",
  REJECTED: "#eb340f",
};

function TaskChartDashboard(props) {
  const dispatch = useDispatch();

  const chartData = useSelector(({ chart }) => chart.taskStatusData);
  const taskList = useSelector(({ task }) => task.taskList);

  const questionsList = useSelector(({ survey }) =>
    survey.questions ? survey.questions.questions : []
  );

  const [chartType, setChartType] = useState("pie");
  let [pieData, setPieData] = useState([{ options: [], series: [] }]);
  let [barData, setBarData] = useState([{ options: [], series: [] }]);
  let [splineData, setSplineData] = useState([{ options: [], series: [] }]);

  const [taskID, setTaskID] = useState("0");
  const [surveryQuestions, setSurveryQuestions] = useState(questionsList);

  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

  useEffect(() => {
    dispatch(fetchTasks("all"))
      .then((data) => {
        console.log("Datall", data.payload.taskList[0]["id"]);
        let firstTaskID = data.payload.taskList[0]["id"];
        dispatch(fetchDashboardTaskStatusChartData(firstTaskID)).then(
          (question_data) => {}
        );
        setTaskID(firstTaskID);
      })
      .then(() => {})
      .catch(() => {});
  }, []);

  useEffect(() => {
    setAwaitRender(false);
  }, []);
  const splineChart = () => {
    if (!chartData.length) {
      setSplineData([]);
      return false;
    }
    let labels = chartData.map(function (el) {
      return el.status;
    });
    let response_count = chartData.map(function (el) {
      return parseFloat(el.total);
    });

    let color = [];
    labels.map((i) => {
      color.push(legendColor[i]);
    });

    let spdata = {
      series: [
        {
          name: "series1",
          data: response_count,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "text",
          categories: labels,
        },
        tooltip: {
          // x: {
          //   format: 'dd/MM/yy HH:mm'
          // },
        },
      },
    };
    setSplineData(spdata);
  };

  const barChart = () => {
    if (!chartData.length) {
      setBarData([]);
      return false;
    }
    let labels = chartData.map(function (el) {
      return el.status;
    });

    let response_count = chartData.map(function (el) {
      return parseFloat(el.total);
    });
    let color = [];
    labels.map((i) => {
      color.push(legendColor[i]);
    });
    console.log("BeChart", color);
    setBarData({
      series: [
        {
          data: response_count,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },

        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: labels,
        },
      },
    });
  };

  function pieChart() {

    if (!chartData.length) {
      setPieData([]);
      return false;
    }
    let labels = chartData.map(function (el) {
      return el.status;
    });
    let response_count = chartData.map(function (el) {
      return parseFloat(el.total);
    });

    let color = [];
    labels.map((i) => {
      console.log("color label", i);
      console.log("color label code", legendColor[i]);
      color.push(legendColor[i]);
    });

    setPieData({
      series: response_count,
      options: {
        chart: {
          width: 380,
          type: "pie",
          toolbar: {
            show: true,
          },
        },

        labels: labels,
        colors: color,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    });
  }

  useEffect(() => {
    renderChart();
  }, [chartType]);

  useEffect(() => {
    renderChart();
  }, [chartData]);
  const renderChart = () => {
    if (chartType == "pie") {
      pieChart();
    } else if (chartType == "spline") {
      splineChart();
    } else if (chartType == "bar") {
      barChart();
    }
  };

  const HandlerSetTaskStatusData = (ev) => {
    setTaskID(ev.target.value);
    dispatch(fetchDashboardTaskStatusChartData(ev.target.value)).then(
      (question_data) => {}
    );
  };
  if (awaitRender) {
    return null;
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <Typography className="h2 font-medium m-20 " color="textPrimary">
        Task Status report
      </Typography>
      <Grid
        container
        rowSpacing={2}
        className="m-20 p-20"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Chart</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chartType}
              onChange={(ev) => {
                setChartType(ev.target.value);
              }}
              required
              label="Chart Type"
            >
              <MenuItem key={`c1`} value="pie">
                Pie
              </MenuItem>
              <MenuItem key={`c`} value="bar">
                Bar
              </MenuItem>
              <MenuItem key={`c`} value="spline">
                Spline
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label2">
              Select Task
            </InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              value={taskID}
              onChange={(ev) => HandlerSetTaskStatusData(ev)}
              required
              label="Select Task"
            >
              <MenuItem key={`A${0}`} value={"0"}>
                Select Task
              </MenuItem>
              {taskList &&
                taskList.map((item, index) => {
                  return (
                    <MenuItem key={`Aad${index}`} value={item.id}>
                      {item.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className="h-400 w-full">
        {!pieData.options && !barData.options && !splineData.options ? (
          <div
            className="h-300 d-flex w-full "
            style={{ minHeight: "300px", display: "flex" }}
          >
            <div className="verticlecenter"> No status found </div>
          </div>
        ) : null}

        {pieData.options && chartType == "pie" ? (
          <ReactApexChart
            options={pieData.options}
            series={pieData.series}
            type="pie"
            width="100%"
            height={350}
          />
        ) : null}
        {barData.options && chartType == "bar" ? (
          <ReactApexChart
            options={barData.options}
            series={barData.series}
            type="bar"
            width="100%"
            height={350}
          />
        ) : null}

        {splineData.options && chartType == "spline" ? (
          <ReactApexChart
            options={splineData.options}
            series={splineData.series}
            type="area"
            height={350}
          />
        ) : null}
      </div>
    </Paper>
  );
}

export default memo(TaskChartDashboard);

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import ArrowIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import { showError, showSuccess } from 'app/utils/helpers';

import Typography from "@material-ui/core/Typography";
import { setToolbarHeader } from "app/store/fuse/toolbarHeaderSlice";
import {
  fetchQuestionList,
  fetchSurveyList,
} from "../../store/surveySlice";
import { fetchChartSankey } from "../../store/chartSlice";

import Sankey from "./Sankey";
const SubmitButton = styled(Button)({
    width: "100%",
    marginTop: "15px",
    padding: "10px 0px",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "12px",
  });
import Chart from "./Chart";
let fullcnt = 0;
let parcnt = 0;
const Analytics = () => {
  const dispatch = useDispatch();
  const chartData73 = useSelector(({ chart }) => chart.chartData73);
  const surveyList = useSelector(({ survey }) => survey.surveyList);
  const questionsList = useSelector(({ survey }) =>
    survey.questions ? survey.questions.questions : []
  );
  const [fullcnt, setFullcnt] = useState(0);
  const [parcnt, setParcnt] = useState(0);
  const [surveyID, setSurveyID] = useState("0");
  const [questionID, setQuestionID] = useState([]);
  const [questionName, setQuestionName] = useState([]);
  const [surveryQuestions, setSurveryQuestions] = useState(questionsList);
  
  useEffect(() => {
    dispatch(setToolbarHeader("Sankey Analysis"));
  }, []);
    
    const searchHandler = async (event) => { 
      if (questionID.length < 2) {
        showError("Please select atleast 2 questions");
        return false;
      }

        let sid = questionID.join(",");
        dispatch(fetchChartSankey(sid))
        .then(() => {})
        .catch(() => {});
    }
  const handleQuestionChange = async (event) => {
    setQuestionName([]);
    const {
      target: { value },
    } = event;
    let qIDs = typeof value === "string" ? value.split(",") : value;
    await setQuestionID(
      // On autofill we get a stringified value.
      qIDs
    );

    if (qIDs.length) {
      let listarray = await questionsList.filter((i) => {
        return qIDs.includes(i.id);
      });
      let qnames = listarray.map((i) => {
        return i.title;
      });
      await setQuestionName(qnames);
    } else {
    }
  };

  const HandlerSetQuestion = (ev) => {
    setSurveyID(ev.target.value);
    dispatch(fetchQuestionList(ev.target.value)).then((question_data) => {
      // filterQuestions();
    });
    setQuestionName([]);
    setQuestionID([]);
  };
  useEffect(() => {
    filterQuestions();
  }, [questionsList]);
  const filterQuestions = async () => {
    let checkinArray = [3, 4, 8, 10, 11];
    // let checkinArray = [3, 4, 8, 10, 11].concat([1, 2, 5, 6, 7, 9, 12]);
    if (!questionsList) {
      // setQuestionID("0");
      return false;
    }
    let qList = await questionsList.filter((i) => {
      return checkinArray.includes(i.questionTypeId);
    });

    console.log("qList", qList);
    console.log("qListCnt", qList.length);

    setSurveryQuestions(qList);
    // let firstQuestion = qList.length > 0 ? qList[0]["id"] : 0;
    // setQuestionID(firstQuestion);
  };

  useEffect(() => {
    dispatch(fetchSurveyList()).then((data) => {
      let firstSurveyId = data.payload.surveyListState[0]["id"];
      setSurveyID(firstSurveyId);
      dispatch(fetchQuestionList(firstSurveyId)).then((question_data) => {
        console.log("question_data", question_data);
      });
    });
  }, []);
  useEffect(() => {
    let full = chartData73.find((i) => {
      return i.choice_id == 161;
    });
    setFullcnt(full ? full.response_count : 0);
    let partial = chartData73.find((i) => {
      return i.choice_id == 162;
    });
    setParcnt(partial ? partial.response_count : 0);
  }, [chartData73]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <Grid
        container
        rowSpacing={2}
        className="m-20 p-20"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* { JSON.stringify( adminUserListing)} */}
        {/* { JSON.stringify( adminUserListingNew)} */}

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label2">
              Select Intake
            </InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select2"
              value={surveyID}
              onChange={(ev) => HandlerSetQuestion(ev)}
              required
              label="Select Intake"
            >
              <MenuItem key={`A${0}`} value={"0"}>
                Select Intake
              </MenuItem>
              {surveyList &&
                surveyList.map((item, index) => {
                  return (
                    <MenuItem key={`A${index}`} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6}>
				  <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Question</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={questionID}
              onChange={(ev) => {
                setQuestionID(ev.target.value);
              }}
              required
              // error={error.questionType}
              label="Question type"
					  >
						  <MenuItem key={`B0`} value="0">
                      Select Question
                    </MenuItem>
              {surveryQuestions &&
                surveryQuestions.map((item, index) => {
                  return (
                    <MenuItem key={`B${index}`} value={item.id}>
                      {item.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid> */}
         <Grid item xs={12} sm={12} md={6} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1">
              Select Question
            </InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select1"
              value={questionID}
              multiple
              onChange={(e) => handleQuestionChange(e)}
              required
              label="Select Question"
              input={<OutlinedInput label="Select Question " />}
            //   renderValue={(selected) => selected.join(", ")}
              renderValue={() => {
                return questionName.length ? questionName.join(",") : "";
              }}
            >
              {surveryQuestions &&
                surveryQuestions.map((item, index) => {
                  return (
                    <MenuItem
                      key={`ho${index}`}
                      name={item.name}
                      value={item.id}
                    >
                      <Checkbox checked={questionID.indexOf(item.id) > -1} />
                      <ListItemText primary={item.title} />
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
              </Grid> 
              <Grid item xs={ 6 } sm={ 6 } md={ 2 } lg={ 2 }>
              <SubmitButton
              startIcon={<ArrowIcon />}
              // variant="contained"
              variant="outlined"
              style={{ margin: "0" }}
              onClick={searchHandler}
            >
              Generate Flow
            </SubmitButton>
            </Grid>
      </Grid>

      <Sankey questionID={questionID} />

      <motion.div
        className="flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex  w-full flex-col min-w-0 pt-16"></div>
      </motion.div>
    </div>
  );
};

export default Analytics;

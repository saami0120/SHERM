import React, { useState } from "react";
import { Container, Grid, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { styled } from "@mui/system";

// Sample data for charts
const admissionsData = {
  series: [
    {
      data: [12, 19, 3, 5, 2, 3, 15],
      label: "Patient Admissions",
      color: "#4bc0c0"
    }
  ],
  categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

const outcomesData = {
  series: [
    {
      data: [80, 10, 10],
      label: "Treatment Outcomes",
      color: "#36a2eb"
    }
  ],
  categories: ["Successful", "Unsuccessful", "Pending"]
};

const monthlyAdmissionsData = {
  series: [
    {
      data: [300, 200, 150, 400, 250, 350, 300],
      label: "Monthly Admissions",
      color: "#ff9f40"
    }
  ],
  categories: ["January", "February", "March", "April", "May", "June", "July"]
};

const App = () => {
  const [timePeriod, setTimePeriod] = useState("weekly");
  const [department, setDepartment] = useState("all");

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Container>
      <h1>Interactive Medical Health Records Dashboard</h1>

      {/* Filters */}
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Time Period</InputLabel>
            <Select value={timePeriod} onChange={handleTimePeriodChange}>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select value={department} onChange={handleDepartmentChange}>
              <MenuItem value="all">All Departments</MenuItem>
              <MenuItem value="cardiology">Cardiology</MenuItem>
              <MenuItem value="neurology">Neurology</MenuItem>
              <MenuItem value="oncology">Oncology</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={4}>
          <BarChart data={admissionsData} width="100%" height={300} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PieChart data={outcomesData} width="100%" height={300} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LineChart data={monthlyAdmissionsData} width="100%" height={300} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

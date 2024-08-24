import { Box, Button, TextField, Typography, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exerciseData, setExerciseData] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");

  useEffect(() => {
    const url =
      "https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cad8e50eb0mshfc8b468581d1008p1eb97ejsnc134983d57fd",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    const fetchExerciseData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setExerciseData(result);
        setFilteredExercises(result);

        // Get unique body parts from the fetched exercises
        const uniqueBodyParts = [
          ...new Set(result.map((exercise) => exercise.bodyPart)),
        ];
        setBodyParts(["all", ...uniqueBodyParts]);

        console.log("Fetched exercises:", result);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };
    fetchExerciseData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterExercises(e.target.value, selectedBodyPart);
  };

  const handleBodyPartChange = (event, newValue) => {
    setSelectedBodyPart(newValue);
    filterExercises(search, newValue);
  };

  const filterExercises = (searchTerm, bodyPart) => {
    let filtered = exerciseData;
    if (searchTerm.trim()) {
      filtered = filtered.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (bodyPart && bodyPart !== "all") {
      filtered = filtered.filter((exercise) => exercise.bodyPart === bodyPart);
    }
    setFilteredExercises(filtered);
  };

  return (
    <Box sx={{ padding: "16px", overflow: "hidden" }}>
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: {
            xs: 24,
            lg: 30,
          },
          fontWeight: "bold",
          lineHeight: 1.2,
          marginTop: 6,
          marginBottom: 2,
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Tabs
        value={selectedBodyPart}
        onChange={handleBodyPartChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ marginBottom: 3 }}
      >
        {bodyParts.map((bodyPart, index) => (
          <Tab key={index} label={bodyPart} value={bodyPart} />
        ))}
      </Tabs>

      <Box sx={{ display: "flex" }}>
        {filteredExercises.length === 0 ? (
          <Loader />
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
            {filteredExercises.map((exercise, i) => (
              <div key={exercise.id} className="exercise_card">
                <div className="card-wrapper">
                  <img src={exercise.gifUrl} alt="EXERCISE_IMG" />
                  {/* <div className="exersice_no">{i + 1}</div> */}
                  <div className="exersice_deatil">
                    <h5 className="exersice_name">{exercise.name}</h5>
                    <h6 className="main_body_part">
                      Body Part:{" "}
                      <span style={{ color: "#6F6DE8" }}>
                        {exercise.bodyPart}
                      </span>
                    </h6>
                    <div className="secunday_mucels">
                      <h6>Secondary Muscles</h6>
                      <div>
                        {exercise.secondaryMuscles.map((smuscles, i) => (
                          <span key={i} className="badge">
                            {smuscles}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

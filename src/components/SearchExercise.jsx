// import { Box, Button, TextField, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export const SearchExercise = () => {
//   const [search, setSearch] = useState('');
//   const [exerciseData, setExerciseData] = useState([]);
//   const [filteredExercises, setFilteredExercises] = useState([]);

//   useEffect(() => {
//     const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0'; // Increase limit
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': 'cad8e50eb0mshfc8b468581d1008p1eb97ejsnc134983d57fd',
//         'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//       }
//     };

//     const fetchExerciseData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setExerciseData(result);
//         setFilteredExercises(result); // Initially set filtered exercises to all exercises
//         console.log("Fetched exercises:", result);
//       } catch (error) {
//         console.error("Error fetching exercise data:", error);
//       }
//     };
//     fetchExerciseData();
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     filterExercises(e.target.value);
//   };

//   // Function to filter exercises based on search term
//   const filterExercises = (searchTerm) => {
//     if (!searchTerm.trim()) {
//       // If search term is empty, show all exercises
//       setFilteredExercises(exerciseData);
//     } else {
//       // Filter exercises based on search term
//       const filtered = exerciseData.filter(exercise =>
//         exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       console.log("Filtered exercises:", filtered); // Debugging filtered results
//       setFilteredExercises(filtered);
//     }
//   };

//   return (
//     <Box>
//       <Typography
//         sx={{
//           width: "100%",
//           textAlign: "center",
//           fontSize: {
//             xs: 28,
//             lg: 30,
//           },
//           fontWeight: "bold",
//           lineHeight: 1.2,
//           marginTop: 6,
//           marginBottom: 2,
//         }}
//       >
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
//         <Box
//           sx={{
//             position: "relative",
//             width: {
//               xs: "100%",
//               lg: "500px",
//             },
//           }}
//         >
//           <TextField
//             sx={{
//               input: {
//                 maxWidth: "500px",
//                 padding: "10px 12px",
//               },
//               width: {
//                 xs: "100%",
//                 lg: "500px",
//               },
//             }}
//             value={search}
//             onChange={handleSearchChange}
//             placeholder="Search Exercises"
//             type="text"
//           />
//           <Button
//             variant="contained"
//             sx={{
//               position: "absolute",
//               top: "50%",
//               right: 0,
//               transform: "translateY(-50%)",
//               textTransform: 'capitalize',
//               height: '43px',
//               backgroundColor: "#3f3dad",
//               "&:hover": {
//                 backgroundColor: "#2e2c7b",
//               },
//             }}
//           >
//             Search
//           </Button>
//         </Box>
//       </Box>

//       {/* Display filtered exercises */}
//       <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
//         {filteredExercises.length === 0 ? (
//           <Typography>No exercises found.</Typography>
//         ) : (
//           <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//             {filteredExercises.map((exercise, i) => (
//               <div key={exercise.id} className="exercise_card">
//                 <img src={exercise.gifUrl} alt="EXERCISE_IMG" />
//                 <span>Exercise No. {i + 1}</span>
//                 <Typography variant="h6" fontWeight={600}>{exercise.name}</Typography>
//                 <Typography>Body Part: <span style={{color: 'red'}}>{exercise.bodyPart}</span></Typography>
//                 {/* Render other exercise details as needed */}
//               </div>
//             ))}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// import { Box, Button, TextField, Typography, Tabs, Tab } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export const SearchExercise = () => {
//   const [search, setSearch] = useState('');
//   const [exerciseData, setExerciseData] = useState([]);
//   const [filteredExercises, setFilteredExercises] = useState([]);
//   const [bodyParts, setBodyParts] = useState([]);
//   const [selectedBodyPart, setSelectedBodyPart] = useState('');

//   useEffect(() => {
//     const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0';
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': 'cad8e50eb0mshfc8b468581d1008p1eb97ejsnc134983d57fd',
//         'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//       }
//     };

//     const fetchExerciseData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setExerciseData(result);
//         setFilteredExercises(result);

//         // Get unique body parts from the fetched exercises
//         const uniqueBodyParts = [...new Set(result.map(exercise => exercise.bodyPart))];
//         setBodyParts(uniqueBodyParts);

//         console.log("Fetched exercises:", result);
//       } catch (error) {
//         console.error("Error fetching exercise data:", error);
//       }
//     };
//     fetchExerciseData();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//     filterExercises(e.target.value, selectedBodyPart);
//   };

//   const handleBodyPartChange = (event, newValue) => {
//     setSelectedBodyPart(newValue);
//     filterExercises(search, newValue);
//   };

//   const filterExercises = (searchTerm, bodyPart) => {
//     let filtered = exerciseData;
//     if (searchTerm.trim()) {
//       filtered = filtered.filter(exercise =>
//         exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (bodyPart) {
//       filtered = filtered.filter(exercise => exercise.bodyPart === bodyPart);
//     }
//     setFilteredExercises(filtered);
//   };

//   return (
//     <Box>
//       <Typography
//         sx={{
//           width: "100%",
//           textAlign: "center",
//           fontSize: {
//             xs: 28,
//             lg: 30,
//           },
//           fontWeight: "bold",
//           lineHeight: 1.2,
//           marginTop: 6,
//           marginBottom: 2,
//         }}
//       >
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
//         <Box
//           sx={{
//             position: "relative",
//             width: {
//               xs: "100%",
//               lg: "500px",
//             },
//           }}
//         >
//           <TextField
//             sx={{
//               input: {
//                 maxWidth: "500px",
//                 padding: "10px 12px",
//               },
//               width: {
//                 xs: "100%",
//                 lg: "500px",
//               },
//             }}
//             value={search}
//             onChange={handleSearchChange}
//             placeholder="Search Exercises"
//             type="text"
//           />
//           <Button
//             variant="contained"
//             sx={{
//               position: "absolute",
//               top: "50%",
//               right: 0,
//               transform: "translateY(-50%)",
//               textTransform: 'capitalize',
//               height: '43px',
//               backgroundColor: "#3f3dad",
//               "&:hover": {
//                 backgroundColor: "#2e2c7b",
//               },
//             }}
//           >
//             Search
//           </Button>
//         </Box>
//       </Box>

//       <Tabs
//         value={selectedBodyPart}
//         onChange={handleBodyPartChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{ marginBottom: 3 }}
//       >
//         {bodyParts.map((bodyPart, index) => (
//           <Tab key={index} label={bodyPart} value={bodyPart} />
//         ))}
//       </Tabs>

//       <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
//         {filteredExercises.length === 0 ? (
//           <Typography>No exercises found.</Typography>
//         ) : (
//           <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//             {filteredExercises.map((exercise, i) => (
//               <div key={exercise.id} className="exercise_card">
//                 <img src={exercise.gifUrl} alt="EXERCISE_IMG" />
//                 <span>Exercise No. {i + 1}</span>
//                 <Typography variant="h6" fontWeight={600}>{exercise.name}</Typography>
//                 <Typography>Body Part: <span style={{color: 'red'}}>{exercise.bodyPart}</span></Typography>
//               </div>
//             ))}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };


import { Box, Button, TextField, Typography, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";

export const SearchExercise = () => {
  const [search, setSearch] = useState('');
  const [exerciseData, setExerciseData] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('all');

  useEffect(() => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'cad8e50eb0mshfc8b468581d1008p1eb97ejsnc134983d57fd',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    const fetchExerciseData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setExerciseData(result);
        setFilteredExercises(result);

        // Get unique body parts from the fetched exercises
        const uniqueBodyParts = [...new Set(result.map(exercise => exercise.bodyPart))];
        setBodyParts(['all', ...uniqueBodyParts]);

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
      filtered = filtered.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (bodyPart && bodyPart !== 'all') {
      filtered = filtered.filter(exercise => exercise.bodyPart === bodyPart);
    }
    setFilteredExercises(filtered);
  };

  return (
    <Box>
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          fontSize: {
            xs: 28,
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

      <Box sx={{ display: "flex", justifyContent: "center", padding: "16px" }}>
        {filteredExercises.length === 0 ? (
          <Typography>No exercises found.</Typography>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredExercises.map((exercise, i) => (
              <div key={exercise.id} className="exercise_card">
                <img src={exercise.gifUrl} alt="EXERCISE_IMG" />
                <span>Exercise No. {i + 1}</span>
                <Typography variant="h6" fontWeight={600}>{exercise.name}</Typography>
                <Typography>Body Part: <span style={{color: 'red'}}>{exercise.bodyPart}</span></Typography>
              </div>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

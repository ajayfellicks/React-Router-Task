import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import FullStackDevelopment from "./Pages/FullStackDevelopment";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import DevOps from "./Pages/DevOps";
import All from "./Pages/All";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const data = [
    {
      id: "1",
      Article: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "25 Mar, 2024",
    },
    {
      id: "2",
      Article: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "26 Mar, 2024",
    },
    {
      id: "3",
      Article: "Full Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "Ramkumar",
      date: "25 Mar, 2024",
    },
    {
      id: "4",
      Article: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
    },
    {
      id: "5",
      Article: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "Lukesh S",
      date: "25 Mar, 2024",
    },

    {
      id: "6",
      Article: "Data Science",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
      title: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "16 Apr, 2024",
    },

    {
      id: "7",
      Article: "Cyber Security",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "16 Apr, 2024",
    },
    {
      id: "8",
      Article: "Cyber Security",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "Jaishree Tomar",
      date: "26 Mar, 2024",
    },
    {
      id: "9",
      Article: "Cyber Security",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
    },
    {
      id: "10",
      Article: "DevOps",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-2048x1072.webp",
      title: "10 Best DevOps Project Ideas for 2024",
      author: "Isha Sharma",
      date: "25 Mar, 2024",
    },
    {
      id: "11",
      Article: "DevOps",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Best-YouTube-Channels-to-Learn-DevOps-from-Scratch.jpg",
      title: "9 Best YouTube Channels to Learn DevOps from Scratch",
      author: "Srinithi Sankar",
      date: "25 Mar, 2024",
    },
    {
      id: "12",
      Article: "DevOps",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png",
      title: "Top High-Paying Non-Coding Jobs in DevOps [2024]",
      author: "Isha Sharma",
      date: "12 Apr, 2024",
    },
  ];
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<All data={data} />} />
        <Route
          path="/fullstackdevelopment"
          element={<FullStackDevelopment data={data} />}
        />
        <Route path="/datascience" element={<DataScience data={data} />} />
        <Route path="/cybersecurity" element={<CyberSecurity data={data} />} />
        <Route path="/devops" element={<DevOps data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

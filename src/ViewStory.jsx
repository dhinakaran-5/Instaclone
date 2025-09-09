import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import instatext from "./assets/bg-removed-text.png";

function ViewStory() {
  const { id } = useParams();
  const [stori, setStori] = useState(null);
  const [ids, setIds] = useState(null);
  const [usere, setUsere] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://instaclone-db.onrender.com/users")
      .then((response) => {
        return response.json().then((data) => {
          setUsere(data);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setIds(Number(id.slice(1)));
  }, [id]);

  useEffect(() => {
    fetch("https://instaclone-db.onrender.com/stories")
      .then((response) => {
        return response.json().then((data) => {
          setStori(data);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const getUser = (sid) => usere?.find((u) => u.id === sid);

  const getStoryid = (parid) =>
    stori?.find((u) => u.id === `s${parid}`) || null;

  const story = getStoryid(ids);
  const userofthis = getUser(story?.userId);

  function adding() {
    setIds((prev) => {
      if (prev > 0 && prev < stori.length) {
        return (prev += 1);
      } else {
        return navigate("/");
      }
    });
  }

  function reversing() {
    setIds((prev) => {
      if (prev > 1) {
        return (prev -= 1);
      } else {
        return navigate("/");
      }
    });
  }

  return (
    <div className="bg-[#242423] min-h-screen w-full flex justify-center items-center px-2 sm:px-4">
      {stori && story ? (
        <div className="p-3 sm:p-5 h-full flex flex-col sm:flex-row justify-center items-center w-full max-w-6xl mx-auto gap-4">
          {/* Back Button */}
          <div
            onClick={() => navigate("/")}
            className="text-white mb-4 sm:mb-0 cursor-pointer hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>

          {/* Main Story Container */}
          <div className="flex items-center justify-center gap-2 sm:gap-5 w-full">
            {/* Left Arrow */}
            <div
              onClick={reversing}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m12 8-4 4 4 4" />
                <path d="M16 12H8" />
              </svg>
            </div>

            {/* Story Card */}
            <div className="text-white bg-[#0A1015] rounded-md flex flex-col h-[80vh] w-[90vw] sm:w-[70vw] md:w-[500px] overflow-hidden shadow-lg">
              {/* User Info */}
              <div className="flex gap-3 p-3 items-center border-b border-gray-700">
                <img
                  src={userofthis?.avatar}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-2 border-white object-cover"
                />
                <p className="text-sm sm:text-base font-medium">
                  {userofthis?.username}
                </p>
              </div>

              {/* Story Image */}
              <div className="flex-grow flex items-center justify-center overflow-hidden">
                <img
                  src={story.image}
                  className="object-contain h-full w-full"
                  alt=""
                />
              </div>
            </div>

            {/* Right Arrow */}
            <div
              onClick={adding}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m12 16 4-4-4-4" />
                <path d="M8 12h8" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white">Loading</div>
      )}
    </div>
  );
}

export default ViewStory;

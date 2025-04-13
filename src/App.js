import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const photoRef = useRef(null);
  const musicRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const scrollToRefSlowly = () => {
      const target = photoRef.current;
      if (!target) return;

      const targetY = target.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 4000; // scroll duration in ms
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);

        window.scrollTo(0, startY + distance * easeInOutQuad(percent));

        if (percent < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const timeout = setTimeout(() => {
      scrollToRefSlowly();
    }, 2000); // delay before scroll starts

    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   // IntersectionObserver to trigger audio play when photo section is in view
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting && !isPlaying) {
  //         const audio = musicRef.current;
  //         // audio?.play().catch((error) => {
  //         //   console.error("Autoplay blocked:", error);
  //         // });
  //         setIsPlaying(true); // Update state to reflect that music is playing
  //       }
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the section is in view
  //   );

  //   if (photoRef.current) {
  //     observer.observe(photoRef.current); // Start observing the photo section
  //   }

  //   return () => {
  //     if (photoRef.current) {
  //       observer.unobserve(photoRef.current); // Clean up observer
  //     }
  //   };
  // }, [isPlaying]); // Ensure play logic is only triggered once

  const toggleMusic = () => {
    const audio = musicRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause(); // Pause the audio if it's playing
        setIsPlaying(false); // Set music to paused state
      } else {
        audio.play().catch((error) => {
          console.error("Autoplay blocked:", error);
        });
        setIsPlaying(true); // Set music to playing state
      }
    }
  };

  return (
    <div className="main-container">
      <audio id="bg-music" ref={musicRef} src="/audio.mp3" loop />

      {/* Music control button */}

      <motion.section
        className="section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="mb-0 heading"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We Got ENGAGED!
        </motion.h1>

        <motion.img
          src="ring.png"
          alt="ring"
          className="ring-image mb-0"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
        />
        {/* <motion.a
          href="#photo"
          className="buttonScrol"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Scroll to See the Moment ↓
        </motion.a> */}
        <motion.div
          className={`music-control-alt ${isPlaying ? "pulsing" : ""}`}
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="music-icon"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg"width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="music-icon">
              <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
            </svg>
          )}
        </motion.div>
      </motion.section>

      <motion.section
        // ref={photoRef}
        id="photo"
        className="section photo-section d-flex flex-column justify-content-center align-items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.p className="names" whileHover={{ scale: 1.4 }}>
          BHANU
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FaHeart color="red" fontSize="35px" fontWeight="bold" />
        </motion.div>

        <motion.p className="names" whileHover={{ scale: 1.1 }}>
          KEERTHI
        </motion.p>

        <motion.p
          className="paragraph mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          A special Chapter of my life began...and I can't wait to share it with
          you all!
        </motion.p>

        <motion.img
          src="ghibili3.png"
          alt="Engagement"
          className="img-fluid rounded-4 shadow-lg mb-3"
          style={{ maxWidth: "100%", maxHeight: "400px" }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.section>
      <motion.section
        id="photo"
        ref={photoRef}
        className="photo-section1 d-flex flex-column justify-content-center align-items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      ></motion.section>
    </div>
  );
}

export default App;

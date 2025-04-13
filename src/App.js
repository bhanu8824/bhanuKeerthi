import React, { useRef, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const photoRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      photoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    // Function to play the audio
    const playAudio = () => {
      const audio = document.getElementById("bg-music");
      if (audio) {
        audio.play().catch((error) => {
          console.error("Autoplay blocked:", error);
        });
      }
    };

    // Try to play immediately
    playAudio();

    // Listen for any user interaction to play the audio if autoplay is blocked
    const handleUserInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    // Set up the event listeners to allow user interaction if autoplay is blocked
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return (
    <div className="main-container" >
      <audio id="bg-music" src="/audio.mp3" loop />

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
        <motion.a
          href="#photo"
          className="buttonScrol"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Scroll to See the Moment ↓
        </motion.a>
      </motion.section>

      <motion.section
        ref={photoRef}
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

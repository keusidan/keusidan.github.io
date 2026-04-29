import "../font/font.css"
import "../color/color.ts"
import { motion } from 'framer-motion';
import { baseColors } from "../color/color.ts";

const containerVariants = {
  nonHovered: {},
  hovered: {}
};

const imageAVariants = {
  nonHovered: { opacity: 1 },
  hovered: { opacity: 0 }
};

const imageBVariants = {
  nonHovered: { opacity: 0 },
  hovered: { opacity: 1 }
};

export default function Header() {
  return (
    <header style={{
      display: "flex",
      top: 0,
      backgroundColor: baseColors.hoshino,
      alignItems: "center",
      position: "sticky",
      width: "100%",
      height: "80px",
      justifyContent: "space-between"
    }}>
      {/* kujirasan */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <motion.img
          src="../icon/kujirasan.ico"
          style={{
            width: "70px",
            height: "70px",
            display: "block",
            marginLeft: 30
          }}
          animate={{ rotate: 0 }}
          whileHover={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 0.15
            }
          }}
          transition={{
            duration: 0,
          }}
        />
      </div>

      {/* iconなど */}
      <nav
        style={{
          display: "flex",
          gap: 30,
          paddingRight: 30
        }}>

        {/* X-Twitter */}
        <a href="https://x.com/keusidan_desuyo" style={{ display: "block" }}>
          <motion.div
            variants={containerVariants}
            initial="nonHovered"
            animate="nonHovered"
            whileHover="hovered"
            style={{
              position: "relative",
              width: 40,
              height: 40,
              cursor: "pointer",
            }}
          >
            {/* X */}
            <motion.img
              src="header/icons/logo-black.png"
              variants={imageAVariants}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
              }}
            />

            {/* Twitter */}
            <motion.img
              src="header/icons/Logo_of_Twitter.svg.png"
              variants={imageBVariants}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 0, left: -4,
                width: "auto", height: "100%"
              }}
            />
          </motion.div>
        </a>

        {/* misskey */}
        <a href="https://misskey.io/@gamezyouyu_ponzu">
          <img src="header/icons/logo-1024.png"
            style={{
              width: "40px",
              height: "40px",
              display: "block"
            }} />
        </a>

        {/* github */}
        <a href="https://github.com/keusidan" style={{ marginRight: 100 }}>
          <img src="header/icons/GitHub_Invertocat_Black.png"
            style={{
              width: "40px",
              height: "40px",
              display: "block"
            }} />
        </a>

        {/* home */}
        <motion.a href="#"
          style={{
            fontFamily: "girls_last_tour",
            fontSize: "1.5rem",
            textDecoration: "none",
            color: "black"
          }}
          whileHover={{
            color: "gray"
          }}>
          Home
        </motion.a>
      </nav>
    </header>
  );
}
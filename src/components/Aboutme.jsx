import React from "react";
import "animate.css";
import "../styles/Aboutme.css";
import { useTranslation } from "react-i18next";
import profilepic from "../assets/images/profile_pic_me.jpg";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import TrackVisibility from "react-on-screen";
import 'animate.css'

//three.js
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function Aboutme() {
  const { t } = useTranslation(["aboutme"]);

  return (
    <section className="aboutme px-4">
      <Canvas style={{ height: "35vh", width: "100vw", opacity: "1" }}>
            <Stars count={1240} radius={150} saturation={0} speed={4} depth={20} />
      </Canvas>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`aboutme-bx
                      ${isVisible ? "animate__animated animate__fadeIn animate__slower" : "hidden"}`}
                  id="project"
                >
                  <h2>{t("title")}</h2>
                  <p>{t("intro")} <br/>{t("text1")}</p>
                  <p>
                    {t("text3")}{" "}
                    <button>
                      <a href="/resume.pdf" download>
                        {t("resume")}&nbsp;
                        <BsFillFileEarmarkPdfFill />
                        &nbsp;
                        <ImFolderDownload />
                      </a>
                    </button>{" "}
                    {t("engonly")}.
                  </p>
                  <img src={profilepic} alt="cow" className="col-4" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <Canvas style={{ height: "40vh", width: "100vw", opacity: "1" }}>
        <Stars count={1240} radius={100} saturation={0} speed={3} depth={20} />
      </Canvas>
    </section>
  );
}

export default Aboutme;
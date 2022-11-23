import React from 'react'
import 'animate.css'
import '../styles/Aboutme.css'
import {useTranslation} from 'react-i18next'
import profilepic from '../assets/images/profile_pic_me.jpg'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import {ImFolderDownload} from 'react-icons/im'
import TrackVisibility from 'react-on-screen';
import 'animate.css'

//three.js
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function Aboutme() {
  const { t } = useTranslation(["aboutme"]);
  return (
    <div>
      <section className="aboutme px-4" id="aboutme">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="aboutme-bx wow zoomIn">
                <h2>{t("title")}</h2>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div className="text-container">
                      <p>{t("intro")}</p>
                      <p>{t("text1")}</p>
                      <p>
                        {t("text3")}{" "}
                        <button>
                          <a
                            href="/resume.pdf"
                            download
                            className={
                              isVisible
                                ? "animate__animated animate__flash animate__repeat-2"
                                : ""
                            }
                          >
                            {t("resume")}&nbsp;
                            <BsFillFileEarmarkPdfFill />
                            &nbsp;
                            <ImFolderDownload />
                          </a>
                        </button>{" "}
                        {t("engonly")}.
                      </p>
                      <img
                        src={profilepic}
                        alt="cow"
                        className={`col-4
                              ${
                                isVisible
                                  ? "animate__animated animate__wobble"
                                  : ""
                              }`}
                      />
                    </div>
                  )}
                </TrackVisibility>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Canvas style={{ height: "60vh", width: "100vw", opacity: "0.9" }}>
        <Stars />
      </Canvas>
    </div>
  );
}

export default Aboutme;
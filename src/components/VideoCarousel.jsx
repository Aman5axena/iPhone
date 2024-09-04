import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 1200 ? "5vw" : "2vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "6px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
          hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;
      case "pause":
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "left",
          opacity: 1,
          transform: "translateY(0px)",
          overflow: "hidden",
          width: "350vw",
          height: "600px",
        }}
      >
        {hightlightsSlides.map((list, i) => (
          <div
            key={list.id}
            id="slider"
            style={{
              paddingRight: window.innerWidth >= 640 ? "3.5rem" : "1.25rem",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                position: "relative",
                paddingLeft: window.innerWidth > 640 ? "0" : "30px",
                width: window.innerWidth > 640 ? "150vh" : "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#000000",
                }}
              >
                <video
                  id="video"
                  playsInline
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: list.id === 2 ? "translateX(5.5rem)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: window.innerWidth > 640 ? "1.5rem" : "2rem",
                  left: window.innerWidth > 640 ? "2.5%" : "15%",
                  zIndex: 10,
                }}
              >
                {list.textLists.map((text, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: window.innerWidth >= 768 ? "2rem" : "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.25rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem 3rem",
            backgroundColor: "black",
            backdropFilter: "blur(5px)",
            borderRadius: "9999px",
          }}
        >
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              style={{
                margin: "0 0.5rem",
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "grey",
                borderRadius: "30%",
                position: "relative",
                cursor: "pointer",
              }}
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                }}
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button
          style={{
            marginLeft: "0.75rem",
            padding: "0.75rem",
            borderRadius: "9999px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            pointerEvents: loadedData.length > 3 ? "auto" : "none",
          }}
          onClick={() =>
            isLastVideo
              ? handleProcess("video-reset")
              : handleProcess(isPlaying ? "pause" : "play")
          }
        >
          <img
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt="play-btn"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;

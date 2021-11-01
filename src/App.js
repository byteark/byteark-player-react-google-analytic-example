import React, {useEffect}from "react";
import { ByteArkPlayerContainer } from "byteark-player-react";

const App = () => {
  const options = {
    fill: true,
    onPlayerCreated: (player) => {
      //send pause event to google analytic when video paused
      player.on("pause", () => {
        window.gtag("event", "pause", { event_category: "example" });
      });
    },
    onReady: () => {
      console.log("Ready!");
    },
  };

  useEffect(()=>{
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'GA_MEASUREMENT_ID');
    window.gtag = gtag
  },[])

  return (
    <React.Fragment>
      <div style={{ position: "relative", width: "100%", height: "75vh" }}>
        <ByteArkPlayerContainer
          sources={{
            videoId: "1",
            src: "https://inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8",
            type: "application/x-mpegURL",
            title: "Big Buck Bunny",
            poster:
              "https://qoder.byteark.com/images/video-frames/1/GU/cg/1GUcgd3XwsmD-large.jpg",
            description:
              "Big Buck Bunny (code-named Project Peach) is a 2008 short computer-animated comedy film featuring animals of the forest, made by the Blender Institute, part of the Blender Foundation. Like the foundation's previous film, Elephants Dream, the film was made using Blender, a free and open-source software application for 3D computer modeling and animation developed by the same foundation. Unlike that earlier project, the tone and visuals departed from a cryptic story and dark visuals to one of comedy, cartoons, and light-heartedness.",
          }}
          poster={
            "https://qoder.byteark.com/images/video-frames/1/GU/cg/1GUcgd3XwsmD-large.jpg"
          }
          {...options}
        />
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-8 mt-1"></div>
          <div className="col-sm-4 mt-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

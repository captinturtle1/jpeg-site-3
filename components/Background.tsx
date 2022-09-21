import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Background = () => {
    // particle stuff
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
      }, []);

    return (
        <>
            <div className="transition-all w-full h-full fixed top-0 z-[2] flex opacity-100">
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    fpsLimit: 120,
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        random: false,
                        speed: 1,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 2000,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.08,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 5 },
                      },
                    }
                  }}
                />
            </div>
        </>
    );
}

export default Background;
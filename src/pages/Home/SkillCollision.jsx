import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// Add your image URLs here (must be 20 for 20 nodes)
const imageUrls = [
  // Example: "/images/html.png", "/images/css.png", ...
  // Add 20 image URLs

  "https://cdn-icons-png.freepik.com/512/1051/1051277.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-DW_HRN0h9p0HU7tkiKE4PiuryqmVH6X9w&s",
  "https://www.vikingsoftware.com/wp-content/uploads/2024/02/TypeScript.png",
  "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVWag0nHlBNb6_TUZiYlecLT1H1NlNo7HCA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTO8H6mRVR83mbxemvDIPW8rbiLZ1b8XVl6Q&s",
  "https://www.gstatic.com/devrel-devsite/prod/v6dc4611c4232bd02b2b914c4948f523846f90835f230654af18f87f75fe9f73c/firebase/images/touchicon-180.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s",
  "https://www.websolutions.cy/technologies/mysql/logo.svg",
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png",
  "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  "https://img.freepik.com/premium-vector/ejs-logo-design-initial-letter-ejs-monogram-logo-using-hexagon-shape_1101554-15620.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s",
 "https://education.oracle.com/file/general/p-80-java.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0XwqNREm1RVcGEQKDcHnP4OXBgFHhXnzVg&s",
  "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwYxDpVOISehethDPyaFlmTdTmqzXgaiCJEYKPrxuQTqquyYA.pf_1bjrIbtmAOr65Y-&format=source",
  "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoFD4gEokJXA9Ig5ZtDjDODQqmgqDfsy7TQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNwuGGAwYtd0_8iwfTDux5skNIlUkWjncNQ&s",
  "https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/800px-R_logo.svg.png",
  "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
  "https://yt3.googleusercontent.com/PKRBxhCiGa8Y0vPmHa1E2cdjpLhUq2Pl-gESwP7kk2plGgxLdsbjyTd9VjcJwBMiY0HQ8bvx5Q=s900-c-k-c0x00ffffff-no-rj",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UV1Cbe9faBYh9b9aeKzsNasDRhQaLepJCQ&s", 
  "https://niltechedu.com/blog/wp-content/uploads/2021/11/python-programming-language.png",
  "https://w7.pngwing.com/pngs/724/306/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program-thumbnail.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
];

const generateData = () => {
  const n = 29;
  const r = 30;
  return Array.from({ length: n }, (_, i) => ({
    r,
    group: i % 4 + 1,
    img: imageUrls[i % imageUrls.length], // assign image
  }));
};

const loadImages = (urls) =>
  Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = url;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
        })
    )
  );

const CollisionChart = ({ width }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const height = width;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const nodes = generateData().map((d) => Object.create(d));

    loadImages(nodes.map((d) => d.img)).then((images) => {
      nodes.forEach((d, i) => {
        d.imageObj = images[i];
      });

      const simulation = d3
        .forceSimulation(nodes)
        .alphaTarget(0.3)
        .velocityDecay(0.1)
        .force("x", d3.forceX().strength(0.01))
        .force("y", d3.forceY().strength(0.01))
        .force("collide", d3.forceCollide().radius((d) => d.r + 1).iterations(3))
        .force("charge", d3.forceManyBody().strength((d, i) => (i ? 0 : -width * 2 / 3)))
        .on("tick", ticked);

      canvas.addEventListener("pointermove", pointermoved, { passive: false });

      function pointermoved(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        nodes[0].fx = x - width / 2;
        nodes[0].fy = y - height / 2;
      }

      function ticked() {
        context.clearRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        for (let i = 1; i < nodes.length; ++i) {
          const d = nodes[i];
          context.save();
          context.beginPath();
          context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
          context.closePath();
          context.clip();

          if (d.imageObj) {
            // Draw image centered in the circle
            context.drawImage(
              d.imageObj,
              d.x - d.r,
              d.y - d.r,
              d.r * 2,
              d.r * 2
            );
          } else {
            // fallback color fill
            context.fillStyle = color(d.group);
            context.fill();
          }
          context.restore();
        }
        context.restore();
      }

      return () => {
        simulation.stop();
        canvas.removeEventListener("pointermove", pointermoved);
      };
    });
  }, [width]);

  return <canvas ref={canvasRef} width={width} height={width} />;
};

export default CollisionChart;

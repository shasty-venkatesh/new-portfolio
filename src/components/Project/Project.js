import React, { useRef } from "react";
import "../../styles/home.css";
import Header from "../Header";
import stampImg from "../../image/stamp.png";
import "../../styles/project.css";
import Footer from "../Footer";

function Project() {
  const ref = useRef("top");
  const listRefs = useRef([]);

  const projectlist = [
    {
      title: "Frontend Project",
      description: "Amazon clone",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/amazon-clone",
    },
    {
      title: "Frontend Project",
      description: "Portfolio using GSAP",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/portfolio",
    },
    {
      title: "Backend Project",
      description: "Blog Website",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/blog-website",
    },
    {
      title: "Backend Project",
      description: "OD Generator Website",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/od-form-website",
    },
    {
      title: "Threejs Project",
      description: "Solar System Website",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/solar_system_threejs",
    },
    {
      title: "Reactjs Project",
      description: "Sweet Shop Website",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/Sweet-website-react",
    },
    {
      title: "Reactjs Project",
      description: "Waste Management System",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/webforce_final",
    },
    {
      title: "React Native Project",
      description: "Waste Management System App",
      year: 2024,
      link: "https://github.com/shasty-venkatesh/greenloop_app",
    },
  ];

  const handleMouseEnter = (index) => {
    if (listRefs.current[index]) {
      listRefs.current[index].style.transform = "translateY(-8rem)";
      ref.current = ref.current === "top" ? "bottom" : "top";
    }
  };

  const handleMouseLeave = (index) => {
    if (listRefs.current[index]) {
      if (ref.current === "bottom") {
        listRefs.current[index].style.transform = "translateY(-16rem)";
      } else {
        listRefs.current[index].style.transform = "translateY(0rem)";
      }
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="projectsection1">
          <div className="section2">
            <p>Projects</p>
          </div>
          <img src={stampImg} alt="stamp" />
        </section>

        <section className="projectsection2">
          <div>
            <h1 className="projectheading">P</h1>
            <p className="projectbody">
              rojects serve as a platform to apply knowledge, showcase
              creativity, and develop problem-solving skills in real-world
              scenarios. They provide hands-on experience, enabling individuals
              to refine their expertise and demonstrate their capabilities in a
              practical setting.
            </p>
          </div>
          <div>
            <h1 className="projectheading">I</h1>
            <p className="projectbody">
              have worked on a variety of projects, covering frontend
              development, backend solutions, and Python applications. Each
              project showcases my skills and problem-solving abilities,
              allowing me to gain hands-on experience in different technologies.
              You can explore my projects by hovering over them to view details
              or see a live preview of each one.
            </p>
          </div>
        </section>

        <section className="projectsection3">
          <h1 className="projecttitle">Developments and Initiatives</h1>
          {projectlist.map((item, index) => (
            <div
              className="projectlist"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <ul
                ref={(el) => (listRefs.current[index] = el)}
                style={{ transition: "transform 0.5s ease" }}
              >
                <li>
                  <p>{item.title}</p>
                  <p>{item.year}</p>
                </li>
                <li
                  className="projectdetail"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <p>{item.description}</p>
                  <p>Link</p>
                </li>
                <li>
                  <p>{item.title}</p>
                  <p>{item.year}</p>
                </li>
              </ul>
            </div>
          ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Project;

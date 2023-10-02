import React from "react";
import { educationData } from "../ResumeData";
import Title from "./shared/Title";

const Education = () => {
  reeturn(
    <section>
      <Title title={educationData.title} />
      <div>
        {educationData.educations.map((education, index) => {
          return (
            <div>
              <div className="education-timeline">
                <span>
                  {education.line && <span className="education-line"></span>}
                </span>
              </div>
              <div className="education-data">
                <h3 className="education-title">{education.title}</h3>
                <span className="education-studies">{education.studies}</span>
                <div>{education.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>,
  );
};

export default Education;

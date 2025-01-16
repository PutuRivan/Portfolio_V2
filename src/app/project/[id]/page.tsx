"use client";

import { Project } from "@/data/Project";
import { useParams } from "next/navigation";
import React from "react";

const DetailProject = () => {
  const params = useParams();
  const id = params.id;
  if (!id) {
    return;
  }

  return (
    <>
      {Project.map((data, index) => {
        if (data.id === ~~id) {
          return (
            <div key={index}>
              <h1>{data.name}</h1>
            </div>
          );
        }
      })}
    </>
  );
};

export default DetailProject;

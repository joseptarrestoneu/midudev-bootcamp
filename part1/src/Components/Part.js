import React from "react";

const Part = ({part}) => {
    const listParts = part.map((element, index) =>
        <p key={index}>{element.name} {element.exercices}</p>
    );
    return listParts

}

export default Part;
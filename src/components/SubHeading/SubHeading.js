import React from "react";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HCcxYJFB054QUo6TeD8AdkPtxNhOdbJ78A&usqp=CAU"
      alt="spoon_image"
      className="spoon__img"
    />
  </div>
);

export default SubHeading;

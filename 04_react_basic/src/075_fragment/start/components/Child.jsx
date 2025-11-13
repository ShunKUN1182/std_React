import { Fragment } from "react";
import "./Child.css";



const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae error repudiandae molestiae eius perspiciatis similique quo aspernatur tempore corrupti alias minus delectus, dolor earum praesentium nam pariatur voluptatibus sunt accusamus?</p>
    </Fragment>
  );
};

export default Child;

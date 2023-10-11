import React from "react";

const AttributionsPage = () => {


  return (
    <div className={"flex flex-col justify-start gap-20  items-center"}>
      <h3 className={"text-center text-3xl"}>Attributions</h3>
      <div>
        <h4 className={"text-2xl"}> Thanks for the following resources:</h4>
        <br />
        <ul>
          <li className={"list-disc"}>
            Vectors and Icons by <a
            className={"text-blue-500"}
            href="https://dribbble.com/catalinfertu?ref=svgrepo.com" target="_blank">Catalin
            Fertu</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank"
                                                       className={"text-blue-500"}
          >SVG Repo</a>
          </li>
          <li className={"list-disc"}>
            Vector and Icons by icons8
            <a href="https://icons8.com/icons" className={"text-blue-500"}> https://icons8.com/icons</a>
          </li>
          <li className={"list-disc"}>
            Vectors and icons by <a
            className={"text-blue-500"}
            href="https://www.figma.com/community/file/1166831539721848736?ref=svgrepo.com"
            target="_blank">Solar Icons</a> in CC Attribution License via <a
            href="https://www.svgrepo.com/"
            className={"text-blue-500"}
            target="_blank">SVG Repo</a>
          </li>
        </ul>


      </div>
    </div>


  );
};

export default AttributionsPage;
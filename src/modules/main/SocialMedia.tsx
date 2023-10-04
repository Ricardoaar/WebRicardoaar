import React from "react";
import { SOCIAL_MEDIA } from "@/constants/media";

const SocialMedia = () => {
  return (
    <section className="flex flex-row justify-center gap-10 w-full">

      {SOCIAL_MEDIA.map((social) => {

        const { icon } = social;
        return <div className={"flex flex-col items-center justify-center"}>
          <div className={"w-12 h-12"}>
            <a href={social.link} target={"_blank"}>
              {icon && icon}
            </a>
          </div>

        </div>;


      })}
    </section>
  );
};

export default SocialMedia;
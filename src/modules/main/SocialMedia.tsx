import React from "react";
import { SOCIAL_MEDIA } from "@/constants/media";
import GrowOnHover from "@/modules/animations/GrowOnHover";

const SocialMedia = () => {
  return (
    <section className="flex flex-row justify-center gap-10 w-full">

      {SOCIAL_MEDIA.map((social) => {

        const { icon } = social;
        return <div className={"flex flex-col items-center justify-center"} key={social.name}>
          <GrowOnHover className={"w-12 h-12"} >
            <a href={social.link} target={"_blank"} aria-label={`Contact me by ${social.name}`}>
              {icon && icon}
            </a>
          </GrowOnHover>
        </div>;

      })}
    </section>
  );
};

const OptimizedSocialMedia = React.memo(SocialMedia);

export default OptimizedSocialMedia;
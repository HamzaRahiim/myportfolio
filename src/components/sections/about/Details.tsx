import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { aboutData } from "@/lib/db";
import { AboutType } from "@/types";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/shared/SanityComponent";

const Details = async () => {
  const abouts: AboutType | any = await aboutData();
  return (
    <section>
      {/* poster  */}
      <div className="w-full md:h-72 sm:h-40 h-24">
        <Image
          src={urlForImage(abouts.image)}
          width={500}
          height={500}
          alt="my poster"
          className="w-full object-cover"
        />
      </div>
      <Wrapper>
        <div className="flex sm:mt-3 flex-col md:flex-row">
          {/* About me left */}
          <div className="flex-1">
            <h1 className="font-medium text-3xl mb-2 md:mb-0">About Me:</h1>
          </div>
          {/* About me right */}
          <div className="flex-1">
            <section className="text-sm">
              <PortableText
                value={abouts.description}
                components={components}
              />
            </section>
            <button className="my-6 hover:scale-105 duration-300">
              <Button text="Contact Me" link="/contactus" />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Details;

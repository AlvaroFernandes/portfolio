import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;

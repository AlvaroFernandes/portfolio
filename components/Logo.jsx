import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="./assets/logo/logo.svg"
        width={85}
        height={85}
        priority
        alt=""
      />
    </Link>
  );
};

export default Logo;

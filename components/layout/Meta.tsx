import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
};

const Meta = ({ title }: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setName(capitalizeFirstLetter(router.asPath.split("/")[1].split("#")[0]));
  }, [router]);

  return (
    <Head>
      <title>{title}</title>
      <meta property={`og:${title}`} content={title} key={title} />
      <link
        rel="icon"
        type="image/x-icon"
        href="/Shigeru_Miyamoto.jpg"
        className="object-cover"
      />
    </Head>
  );
};

export default Meta;

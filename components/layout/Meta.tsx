import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {};

const Meta = (props: Props) => {
  const router = useRouter();
  const [name, setName] = useState("");

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  useEffect(() => {
    setName(capitalizeFirstLetter(router.asPath.split('/')[1].split('#')[0]));
  }, [router]);

  return (
    <Head>
      <title>Nique</title>
    </Head>
  );
};

export default Meta;

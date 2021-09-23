import React, { ReactElement } from "react";
import Head from "next/head";
import { Button, Input } from "../../components/ui";

export default function Login() {
  return (
    <main className="">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <section className="flex flex-col gap-8 p-20 justify-center items-center w-1/2 min-h-screen">
          <div className="">
            <div className="font-bold text-5xl mb-10">Login to Reserve</div>
            <div className="text-gray-500 pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col font-medium">
              <Input
                className="rounded-md py-3"
                name="email"
                onChange={() => {}}
                placeholder="example@domain.com"
                value=""
                type="email"
              />
            </div>
            <div className="flex flex-col font-medium">
              <Input
                className="rounded-md py-3"
                name="password"
                onChange={() => {}}
                placeholder="Enter your password"
                value=""
                type="password"
              />
            </div>
          </div>
          <div className="w-full">
            <Button onClick={() => {}} className="w-full" primary>
              Sign In
            </Button>
          </div>
        </section>
        <section className="flex flex-col justify-center gap-4 pl-20 w-1/2 bg-gradient-to-br from-blue-700 via-blue-600 to-green-400 text-white font-bold text-7xl">
          RESERVE
          <div className="text-2xl">Your personalised reservation system</div>
        </section>
      </div>
    </main>
  );
}

Login.setLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

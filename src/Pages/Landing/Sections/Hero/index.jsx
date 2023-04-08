import React from "react"
import * as Assets from "../../Assets"

function Hero() {
  return (
    <section className="p-4 md:flex flex-row-reverse md:justify-evenly md:gap-2">
      <div className="mt-4">
        <img
          className="md:w-[24rem] lg:w-[35rem]"
          src={Assets.OnlineTest}
          alt=""
        />
      </div>
      <div className="flex flex-col my-4 md:w-[25rem] lg:w-[35rem]">
        <h2 className="text-6xl font-semibold">
          Create your <b>online test</b> now!
        </h2>
        <h4 className="text-3xl leading-9 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, a
          pariatur? Dolorem nisi sunt voluptatem.
        </h4>
        <a href="/create/test" className="block button-primary-blue mx-auto">
          Create a Test
        </a>
      </div>
    </section>
  )
}

export default Hero

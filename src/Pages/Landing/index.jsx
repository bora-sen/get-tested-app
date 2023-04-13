import React from "react"

function Landing() {
  return (
    <section className="w-full h-[100dvh] bg-landing-main bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[24rem] bg-primary-yellow p-4 shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://loremflickr.com/1280/720"
              alt="al"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl mt-4 bg-blue-400">
              <a href="/" className="px-4 py-2">
                Create a Quick Test
              </a>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing

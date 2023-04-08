import React from "react"

function Header() {
  return (
    <section className="bg-primary-blue-darker p-4 flex justify-between">
      <div>
        <h1 className="text-3xl font-bold font-display text-primary-white">
          <a href="/">getTested</a>
        </h1>
      </div>
      <div className="md:hidden">
        <button>
          <svg
            width={32}
            height={32}
            fill="#fcfbfe"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex md:gap-8 text-primary-white md:items-center md:mr-4">
        <li>
          <a href="/" className="button-primary-white">
            Create a Test
          </a>
        </li>
        <li>
          <a href="/">About getTested</a>
        </li>
      </ul>
    </section>
  )
}

export default Header

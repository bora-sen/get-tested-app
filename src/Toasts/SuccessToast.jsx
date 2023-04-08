import React from "react"
import { NavLink } from "react-router-dom"

function SuccessToast({ url }) {
  return (
    <div className="grid">
      <span className="font-bold text-lg">Your Solve Link:</span>
      <NavLink className="underline" replace to={url}>
        {url}
      </NavLink>
    </div>
  )
}

export default SuccessToast

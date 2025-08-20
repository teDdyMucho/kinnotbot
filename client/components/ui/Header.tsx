import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-center items-center py-4">
      <Link to="/" className="flex items-center">
        <img 
          src="/images/kinnobotlogo.png" 
          alt="KinnoBot Logo" 
          className="h-12 md:h-16" 
        />
      </Link>
    </header>
  );
}

import React from "react";
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="text-center text-xl mt-3">
      <h1>Trisha Aquino</h1>
      <p className="hover:text-green-300 hover:underline">
        <Link
          href="https://github.com/TYAquino/cprg306-assignments"
          target="_blank"
        >
          https://github.com/TYAquino/
        </Link>
      </p>
    </div>
  );
}

import React from "react";
import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <p>Trisha Aquino</p>
            <p>
                <Link href="https://github.com/TYAquino/cprg306-assignments">
                    https://github.com
                </Link>
            </p>
        </div>
    );
}
import Link from "next/link";

export default function Home() {
  const weekDemos = [1, 2, 3, 4, 5, 6, 7];
  const doneUpTo = 10;

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-lg">
          <ul>
            {weekDemos.map((week) => (
              <li key={week} className="hover:text-green-400 hover:underline">
                <Link href={`/week-${week}`} target="_blank">
                  Week {week} Assignment
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

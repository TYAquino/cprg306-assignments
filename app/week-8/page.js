"use client";
import { useUserAuth } from "./shopping-list/_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    await gitHubSignIn();
    router.push("./week-8/shopping-list");
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-600 to-blue-800 h-48 w-full flex justify-center items-center">
      <div className="w-100 h-70 bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="text-3xl text-black font-bold mb-5">
          <h1>Welcome to the Shopping List :3</h1>
        </div>

        {!user ? (
          <div>
            <button
              className="bg-sky-500 text-white px-4 py-2 rounded-md w-1/2 mb-2 hover:scale-110 transition duration-300 ease-in-out"
              onClick={handleSignIn}
            >
              Login with GitHub
            </button>
          </div>
        ) : (
          <div className="mb-2">
            <p className="txt-black">Hello, {user.displayName}!</p>
            <p className="txt-black">{user.email}</p>
            <div>
              <button
                onClick={handleSignOut}
                className="bg-red-500 mb-3 text-white px-4 py-2 rounded-md w-1/2"
              >
                Logout
              </button>
            </div>
          </div>
        )}
        <div>
          <Link
            href="/week-8/shopping-list"
            className="text-green-500 hover:underline"
          >
            Go to Shopping List
          </Link>
        </div>
      </div>
    </div>
  );
}

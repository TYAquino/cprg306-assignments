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
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-200 h-60 bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-10">Welcome to Shopping List</h1>
        {!user ? (
          <button
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2"
          >
            Login with GitHub
          </button>
        ) : (
          <div className="mb-2">
            <p className="text-gray-700 mb-2">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
            >
              Logout
            </button>
          </div>
        )}
        <div>
          <Link
            href="/week-8/shopping-list"
            className="text-blue-500 hover:underline"
          >
            Go to Shopping List
          </Link>
        </div>
      </div>
    </div>
  );
}

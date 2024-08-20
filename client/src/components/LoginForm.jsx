import React from "react";

export default function LoginForm() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary z-50">
      <div className="bg-primary dark:bg-gray-800 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-slate-600 dark:text-primary mb-4">
          Get Exclusive Access
        </h2>
        <form action="">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-slate-600 dark:text-slate-600 mb-2"
              htmlFor="email"
            > Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-600 dark:text-primary mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-primary p-2 rounded-md text-white font-bold">Login</button>
        </form>
        
      </div>
    </div>
  );
}

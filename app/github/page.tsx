"use client";

import React, { useState } from "react";

const noobUseCases = [
  {
    title: "Initialize Local Repo",
    description: "Naya Git repo start karna.",
    command: "git init",
  },
  {
    title: "Add Remote Repo",
    description: "Local repo ko GitHub se connect karna.",
    command: "git remote add origin <repo-url>",
  },
  {
    title: "Create Branch",
    description: "Nayi branch banana aur usme jana.",
    command: "git checkout -b feature/branch-name",
  },
  {
    title: "Commit Changes",
    description: "Changes ko save karna.",
    command: "git add . && git commit -m \"your message\"",
  },
  {
    title: "Push Branch",
    description: "Branch ko GitHub par bhejna.",
    command: "git push origin feature/branch-name",
  },
];

const ninjaUseCases = [
  {
    title: "Clone Repo",
    description: "Company/Team repo ko apne system par lana.",
    command: "git clone <repo-url>",
  },
  {
    title: "Pull Latest Changes",
    description: "Team ke dusre members ke changes lana.",
    command: "git pull origin main",
  },
  {
    title: "Create Feature Branch",
    description: "Team workflow ke liye nayi branch par kaam karna.",
    command: "git checkout -b feature/branch-name",
  },
  {
    title: "Push Feature Branch",
    description: "Feature branch ko remote par bhejna.",
    command: "git push origin feature/branch-name",
  },
  {
    title: "Open Pull Request",
    description: "Branch merge karne ke liye GitHub par PR raise karna.",
    command: "(GitHub UI par kiya jata hai)",
  },
  {
    title: "Merge Branch",
    description: "Approved PR ko main branch me merge karna.",
    command: "git merge feature/branch-name",
  },
];

export default function GitBootcampTables() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderTable = (title: string, data: typeof noobUseCases, prefix: string) => (
    <div className="mb-8">
     
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Use Case</th>
            <th className="p-2 text-left">Command</th>
          </tr>
        </thead>
        <tbody>
          {data.map((uc, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">
                {uc.title} - {uc.description}
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                    {uc.command}
                  </code>
                  {uc.command !== "(GitHub UI par kiya jata hai)" && (
                    <button
                      className="bg-gray-200 px-2 py-1 rounded text-sm cursor-pointer"
                      onClick={() => copyToClipboard(uc.command, `${prefix}-${idx}`)}
                    >
                      {copiedIndex === `${prefix}-${idx}` ? "Copied" : "Copy"}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl items-center">Github Bootcamp</h1>
      {renderTable("GitHub Noob", noobUseCases, "noob")}
      {renderTable("GitHub Ninja", ninjaUseCases, "ninja")}
      
    </div>
  );
}
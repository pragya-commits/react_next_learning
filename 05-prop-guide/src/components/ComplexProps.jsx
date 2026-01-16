import React from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg w-full flex flex-col gap-4 ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full text-3xl ${theme.avatarBg}`}
        >
          {user.avatar}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm opacity-70">{user.email}</p>

          <div className="flex gap-2 mt-2">
            <span className={`px-3 py-1 text-xs rounded-full ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 text-xs rounded-full ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300/40 pt-4 grid grid-cols-3 text-center">
        {user.stats &&
          Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-xl font-bold">{value}</div>
              <div className="text-sm opacity-70 capitalize">{key}</div>
            </div>
          ))}
      </div>

      <div className="flex gap-4 mt-2 w-full">
        <button
          onClick={actions.primary.onClick}
          className={`flex-1 py-3 rounded-lg font-semibold text-center ${actions.primary.className}`}
        >
          {actions.primary.label}
        </button>
        <button
          onClick={actions.secondary.onClick}
          className={`flex-1 py-3 rounded-lg font-semibold text-center bg-gray-200 hover:bg-gray-300`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

function ComplexProps() {
  const setMessage = (msg) => console.log(msg);

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩🏻‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: "145",
          followers: "2834",
          following: "421",
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's Profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
      },
    },
    {
      user: {
        name: "John Smith",
        email: "john@example.com",
        avatar: "🙎🏻",
        role: "Developer",
        status: "Active",
        stats: {
          projects: "28",
          commits: "1523",
          reviews: "89",
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing John's Profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to John"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
      },
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">User Profile Card</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplexProps;

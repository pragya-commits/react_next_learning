function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-400 bg-blue-50",
    green: "border-green-400 bg-green-50",
    purple: "border-purple-400 bg-purple-50",
    red: "border-red-400 bg-red-50",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-xl shadow-md h-full flex flex-col gap-4`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700 flex-grow space-y-2">{children}</div>
    </div>
  );
}

function Container({ children, layout = "grid" }) {
  const layoutClasses = {
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  };

  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-10 bg-white shadow rounded-xl text-black space-y-8">
      <h2 className="text-3xl font-bold">Children Props</h2>

      <p className="text-gray-600 max-w-3xl">
        The <code className="bg-gray-200 px-1 rounded">children</code> prop
        allows you to pass JSX elements or components to other components,
        enabling component composition.
      </p>

      {/* First Row */}
      <Container>
        <Card title="User Profile" color="blue">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john@example.com
          </p>
          <p>
            <strong>Role:</strong> Developer
          </p>
        </Card>

        <Card title="Statistics" color="green">
          <p>
            <strong>Total Users:</strong> 1,234
          </p>
          <p>
            <strong>Active Sessions:</strong> 567
          </p>
          <p>
            <strong>Revenue:</strong> $89,000
          </p>
        </Card>
      </Container>

      {/* Second Row */}
      <Container>
        <Card title="Quick Actions" color="purple">
          <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Create New
          </button>

          <button className="w-full py-2 bg-purple-300 text-gray-900 rounded-lg hover:bg-purple-400 transition">
            View All
          </button>
        </Card>

        <Card title="Warning" color="red">
          <p className="text-gray-800">
            Your trial period ends in 5 days. Please upgrade your account to
            continue using all features.
          </p>
        </Card>
      </Container>
    </section>
  );
}

export default ChildrenProps;

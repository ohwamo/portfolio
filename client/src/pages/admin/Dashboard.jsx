import AdminLayout from "../../componnets/AdminLayout";
function Dashboard() {
  return (
    <>
      <AdminLayout>
        <h1 className="text-3xl text-rose-500 mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded bg-gray-800 p-6">
            <h2>Total Projects</h2>
            <p className="text-2xl font-bold mt-2">12</p>
          </div>
          <div className="rounded bg-gray-800 p-6">
              <h2>Visitors</h2>
          <p className="text-2xl font-bold mt-2">320</p>
          </div>
          <div className="rounded bg-gray-800 p-6">
            <span>chat</span>
            <p className="text-2xl font-bold mt-2">10</p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default Dashboard;

import { NavLink } from "react-router-dom"
function AdminLayout ({children}) {
    return(
        <div className="flex bg-gray-900 text-white min-h-screen">
        <aside className="p-6 bg-gray-800 w-64">
            <h1 className="text-3xl text-rose-400 font-bold"> Osman</h1>
            
            <nav className="space-y-4 mt-4">
            <NavLink to="/admin" className="block hover:bg-rose-500 rounded-2xl p-2">
                <span>Dashboard</span>
            </NavLink>
             <NavLink to="/admin/project" className="block hover:bg-rose-500 rounded-2xl p-2 ">
                <span>Project</span>
            </NavLink>
             <NavLink to="/admin/chat" className="block hover:bg-rose-500 rounded-2xl p-2">
                <span>Message</span>
            </NavLink>
            </nav>

        </aside>
        <main className="flex-1 p-6">
            {children}
        
        </main>
        </div>
    )

}
export default AdminLayout
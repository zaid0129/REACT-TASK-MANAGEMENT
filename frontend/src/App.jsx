import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Layout from "./Layout"
import Dashboard from "./Pages/Dashboard"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
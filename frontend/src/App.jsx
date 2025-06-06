import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Layout from "./Layout"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CreateRecipePage from "../pages/DetailsPage/DetailsPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="recipe/:recipeId" element={<DetailsPage />} />
                <Route path="/recipe/new" element={<CreateRecipePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
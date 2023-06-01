import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "./styles";

const Main = () => {
    return (
        <Container>
            <Sidebar />
            <section>
                <Outlet />
            </section>
        </Container>
    );
}

export default Main;
import { Container } from "./styles";
import { IoSearchOutline, IoSettingsOutline, IoExitOutline } from "react-icons/io5"

interface HeaderProps {
    title: string
}

export default ({ title }: HeaderProps) => {
    return (
        <Container>
            <h1>{title}</h1>
            <div>

                <IoSearchOutline />

                <IoSettingsOutline />

                <IoExitOutline />
                
            </div>
        </Container>
    );
}
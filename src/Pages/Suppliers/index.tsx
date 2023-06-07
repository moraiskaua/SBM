import Header from "../../Components/Header";
import SupplierInput from "../../Components/Input/SupplierInput";
import RadioInput from "../../Components/Input/RadioInput";
import { Container } from "./styles";
import SelectInput from "../../Components/Input/SelectInput";

export default () => {
    return (
        <>
            <Header title="Fornecedores" />
            <Container>
                <div>
                    <h1>Cadastro de Fornecedores</h1>
                </div>
                <div>
                    <div>
                        <SupplierInput label="Código" />
                        <SupplierInput label="Loja" />
                        <SupplierInput label="Nome" />
                    </div>
                    <div>
                        <SupplierInput label="Tipo do Cliente" />
                        <RadioInput label="Tipo de entidade" firstValue="Jurídica" secondValue="Física" />
                        <RadioInput label="Situação" firstValue="Inativa" secondValue="Ativa" />
                        <RadioInput label="Tipo" firstValue="Cliente" secondValue="Fornecedor" />
                    </div>
                    <div>
                        <SupplierInput label="CEP" />
                        <SupplierInput label="Endereço" />
                        <SelectInput label="Cidade"/>
                        <SelectInput label="Estado"/>
                    </div>
                    <button>Registrar</button>
                </div>
            </Container>
        </>
    );
}
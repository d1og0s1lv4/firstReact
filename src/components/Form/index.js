import Inputbox from "../InputBox/index"
import  "./Form.css"
const Form = () => {
    return (

        <section className="prop">
            <form>
                <h1>Preencha os dados para inserir seu personagem favorito</h1>
                <Inputbox label='Seu Nome' placeholder='Digite seu nome...' />
                <Inputbox label='Nome do Personagem' placeholder='Digite o nome do personagem...' />
                <Inputbox label='Nome do anime' placeholder='Digite seu cargo...' />
                <Inputbox label='Imagem do personagem' placeholder='Informe o endereço da imagem' />
            </form>
        </section>
    )
}

export default Form
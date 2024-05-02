import DropDown from "../DropDown"
import Inputbox from "../InputBox/index"
import  "./Form.css"
const Form = () => {
    const genres = [
        'Shounen',
        'Seinen',
        'Romance',
        'Slice of Life',
        'Ecchi',
        'Isekai'
    ]

    return (

        <section className="prop">
            <form>
                <h1>Preencha os dados para inserir seu personagem favorito</h1>
                <Inputbox label='Seu Nome' placeholder='Digite seu nome...' />
                <Inputbox label='Nome do Personagem' placeholder='Digite o nome do personagem...' />
                <Inputbox label='Nome do anime' placeholder='Digite o nome do anime...' />
                <Inputbox label='Imagem do personagem' placeholder='Informe o endereço da imagem' />
                <DropDown itens= {genres} />
            </form>
        </section>
    )
}

export default Form
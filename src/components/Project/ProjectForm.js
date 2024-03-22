function ProjectForm(){
    return(
        <form>
            <div>
                <input type="Text" placeholder="Nome do Projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Orçamento total"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>    
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>                                
        </form>
    )
}

export default ProjectForm
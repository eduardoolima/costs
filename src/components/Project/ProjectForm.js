import Input from "../../form/Input"
import Select from "../../form/Select"
import SubmitButton from "../../form/SubmitButtton"
import styles from "./ProjectForm.module.css"

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type={"text"} text={"Nome do Projeto"} name={"name"} placeholder={"Nome do Projeto"}/>
            <Input type={"numeber"} text={"Orçamento do Projeto"} name={"budget"} placeholder={"Orçamento"}/>
            <Select name={"category_id"} text={"Selecione a categoria"}/>
            <SubmitButton text={btnText}/>                             
        </form>
    )
}

export default ProjectForm
import styles from '../Project/ProjectForm.module.css'

import { useState } from 'react'

import Input from '../../form/Input'
import SubmitButton from '../../form/SubmitButtton'

function ServiceForm({ handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name] : e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Nome do Serviço' name='name' placeholder='Nome do Serviço' handleOnChange={handleChange}/>
            <Input type='number' text='Custo do Serviço' name='cost' placeholder='Custo do Serviço' handleOnChange={handleChange}/>
            <Input type='text' text='Descrição do Serviço' name='description' placeholder='Descrição do Serviço' handleOnChange={handleChange}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm
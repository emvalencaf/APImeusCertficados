const mongoose = require('mongoose')
const Certificado = require('./../models/certificado.model')


exports.get = (id) =>{

    if(id) return Certificado.findById(id)

    return Certificado.find({})
}

exports.getByTag = (tag) =>{
    return Certificado.find({tag:tag})
}

exports.post = (data) => {

    const newData = {...data}

    return Certificado.create(newData)

}

exports.put = (data, id) => {

    return Certificado.findOneAndUpdate({_id:id}, data, {new:true})

}

exports.patch = (data, id) => {

    const {titulo, professor, instituicao, aluno, tag, cargaHora, completed, completedAt} = data

    const updatedAt = Date.now()

    const certificadoUpdated = {titulo, professor, instituicao, aluno, tag, cargaHora, completed, completedAt, updatedAt}

    console.log(certificadoUpdated)
    for(let prop in certificadoUpdated){

        if(typeof certificadoUpdated[prop] === "undefined") delete certificadoUpdated[prop]

    }

    return Certificado.findOneAndUpdate({_id: id}, certificadoUpdated, {new:true})
}

exports.delete = (id) => {

    return Certificado.findByIdAndRemove({_id:id})

}
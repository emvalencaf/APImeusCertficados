const repository = require('./../repository/certificados.repository')

exports.get = async (req, res) => {

    try{

        let certificados = await repository.get()
        res.status(200).send(certificados)

    } catch(e){

        res.status(500).send({message: "error 500", err:e})

    }

}

exports.post = async (req, res) =>{

    const {titulo, professor, instituicao, cargaHora, aluno, tag, completed, completedAt} = req.body

    if(!titulo || !professor || !instituicao || !cargaHora || !aluno || !tag) return res.status(400).send({message:"error 400", err: "Requisiçõa não formatada corretamente"})

    const newCertificado = {
        titulo,
        professor,
        instituicao,
        cargaHora,
        aluno,
        tag,
        completed,
        completedAt
    }

    try{
        const data = await repository.post(newCertificado)
        res.status(201).send(data)

    } catch(e){

        res.status(500).send({message:"error 500", err:e})

    }

}

exports.getByTag = async (req, res) => {

    try{

        const data = await repository.getByTag(req.params.tag)

        if(!data) res.status(404).end()

        return res.status(200).send(data)

    } catch(e){

        res.status(500).send({mesage:"error 500", err:e})

    }

}

exports.getById = async (req, res) =>{

    try{
        
        const data = await repository.get(req.params.id)

        if(!data) return res.status(404).end()
    
        return res.status(200).send(data)

    } catch(e){

        res.status(500).send({message:"error 500", err:e})

    }

}

exports.put = async (req, res) => {

    const { titulo, professor, aluno, tag, cargaHora, completed, completedAt } = req.body

    const newCertificado = {
        titulo,
        professor,
        instituicao,
        aluno,
        tag,
        cargaHora,
        completed,
        completedAt
    }

    const values = Object.values(newCertificado)

    if(values.some(v => v === undefined)) return res.status(400).send({message: "error 400", err:"Requisição não formatada coretamente"})

    try{

        const data = await repository.put(newCertificado, req.params.id)

        if(!data) return res.status(404).end()

        return res.status(200).send(data)

    } catch(e){

        res.status(500).send({message:"error 500", err: e})

    }

}


exports.patch = async (req, res) => {

    const { titulo, professor, instituicao, aluno, tag, cargaHora, completed, completedAt } = req.body

    try{

        const data = await repository.patch({ titulo, professor, instituicao, aluno, tag, cargaHora, completed, completedAt }, req.params.id)

        if(!data) return res.status(404).end()

        res.status(200).send(data)

    } catch(e){

        res.status(500).send({message:"error 500", err:e})


    }
}

exports.delete = async (req, res) => {

    try{

        const data = await repository.delete(req.params.id)

        if(!data) return res.status(400).end()

        return res.status(200).send(data)

    } catch(e){

        res.status(500).send({message:"error 500", err: e})

    }

}

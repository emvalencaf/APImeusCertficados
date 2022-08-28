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
    const {titulo, professor, instituicao, cargaHora, aluno, tag, completedAt} = req.body

    if(!titulo || !professor || !instituicao || !cargaHora || !aluno || !tag) return res.status(400).send({message:"error 400", err: "Requisiçõa não formatada corretamente"})

    const newCertificado = {
        titulo,
        professor,
        instituicao,
        cargaHora,
        aluno,
        tag,
        completedAt
    }

    try{
        const data = await repository.post(newCertificado)
        res.status(201).send(data)
    } catch(e){
        res.status(500).send({message:"error 500", err:e})
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
    const { titulo, professor, aluno, tag, completed, completedAt } = req.body

    const newCertificado = {
        titulo,
        professor,
        aluno,
        tag,
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
    const { titulo, professor, aluno, tag, completed, completedAt } = req.body

    try{
        const data = await repository.patch({ titulo, professor, aluno, tag, completed, completedAt }, req.params.id)
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

/*
    title: {type: String, required: true, trim: true, maxlength: 350},
    professor: {type:String, required: true, trim: true, maxlength: 150},
    instituicao: {type:String, required: true, trim: true, maxlength: 150},
    cargaHora: {type:Number, required:true},
    aluno: {type:String, required:true, trim: true, maxlength: 150},
    tag: {type:Array, required:true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Date, required: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, required: false}


*/
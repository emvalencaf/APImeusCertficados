const mongoose = require('mongoose')

const certificadoScheme = new mongoose.Schema({
    titulo: {type: String, required: true, trim: true, maxlength: 350},
    professor: {type:String, required: true, trim: true, maxlength: 150},
    instituicao: {type:String, required: true, trim: true, maxlength: 150},
    cargaHora: {type:Number, required:true},
    aluno: {type:String, required:true, trim: true, maxlength: 150},
    tag: {type:Array, required:true},
    completed: {type: Boolean, default: false},
    completedAt: {type: Date, required: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, required: false}

})

module.exports = mongoose.model('Certificado', certificadoScheme)
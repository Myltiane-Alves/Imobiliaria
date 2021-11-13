const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor, insira o nome da sala'],
        trim: true,
        maxLength: [100, 'O nome da sala não pode ter mais de 100 caracteres']
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Insira o preço do quarto por noite'],
        maxLength: [4, 'O nome da sala não pode ter mais de 4 caracteres'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Por favor, insira a descrição do quarto'],
    },
    address: {
        type: String,
        required: [true, 'Por favor, insira o endereço da sala'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Por favor, informe a capacidade de hóspedes do quarto'],
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Por favor, insira o número de camas no quarto'],
    },
    internet: {
        type: Boolean,
        default: false,
    },
    breakfast: {
        type: Boolean,
        default: false,
    },
    airConditioned: {
        type: Boolean,
        default: false,
    },
    petsAllowed: {
        type: Boolean,
        default: false,
    },
    roomCleaning: {
        type: Boolean,
        default: false,
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Por favor, insira a categoria do quarto'],
        enum: {
            values: [
                'Rei',
                'Solteiro',
                'Gêmeos'
            ],
            message: 'Por favor, selecione a categoria correta para o quarto'
        }
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
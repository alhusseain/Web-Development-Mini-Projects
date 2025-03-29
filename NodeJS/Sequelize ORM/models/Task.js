const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Task = sequelize.define(
    'Task',
    {
        id: {type: DataTypes.STRING,allowNull: false,primaryKey:true},
        name: {type: DataTypes.STRING},
        userId:{type: DataTypes.STRING,allowNull:false},
    },
    {
        timestamps:false,
        createdAt:false,
        updatedAt:false
    }
);

module.exports = Task;
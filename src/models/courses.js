const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ajuste o caminho conforme sua estrutura

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    hours:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    studantes: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rating:{
        type: DataTypes.FLOAT,
        allowNull: true,
    },
}, {
    tableName: 'courses',
    timestamps: true,
});

module.exports = Course;
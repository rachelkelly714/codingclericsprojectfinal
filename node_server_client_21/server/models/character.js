module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('character', {
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Character;
}; 
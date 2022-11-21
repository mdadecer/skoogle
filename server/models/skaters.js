module.exports = (sequelize, DataTypes) => {
    
    const skaters = sequelize.define("skaters", {
        skaters_name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return skaters;
}

import {Sequelize} from "sequelize";
import credentials from "../common/common";


const sequelize = new Sequelize({
        username : credentials.postgres.USERNAME,
        password:credentials.postgres.PASSWORD,
        host:credentials.postgres.HOST,
        database:credentials.postgres.DATABASE,
        dialect:credentials.postgres.DIALECT as 'postgres',
        port:credentials.postgres.PORT
})

sequelize.authenticate()
.then(()=>{
    console.log("Database Connected")
}).catch(()=>{
    console.log("Error connecting to the database")
})

sequelize.sync().then(()=>{
    console.log("Database is synchronized")
}).catch(()=>{
    console.log("Error synchronizing the database")
})


export default sequelize;
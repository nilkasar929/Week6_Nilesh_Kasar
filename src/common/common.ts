import * as dotenv from 'dotenv'

dotenv.config();

const credentials={

    postgres:{
        USERNAME: process.env.DB_USER || "",
        DATABASE: process.env.DB_DATABASE || "",
        PASSWORD: process.env.DB_PASSWORD || "",
        HOST: process.env.DB_HOST || "",
        DIALECT: process.env.DB_DIALECT || "",
        PORT : Number(process.env.DB_PORT) || 5432,
    }
};


export default credentials;


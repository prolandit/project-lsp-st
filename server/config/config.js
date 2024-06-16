module.exports = { 
    db : {
        host : process.env.DB_HOST || "localhost",
        username : process.env.DB_USERNAME || "root",
        password : process.env.DB_PASSWORD || "",
        dbname : process.env.DB_NAME || "lsp",
        port : process.env.DB_PORT || 3306,
        dialect : process.env.DB_DIALECT || "mysql",
    },
    jwt : {
        salt : process.env.JWT_SALT || "123-1i290adsajsdoj",
    },
    app : {
        port : process.env.PORT || 3000,
    }
}
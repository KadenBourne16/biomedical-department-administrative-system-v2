import {createConnection} from 'mysql2/promise'

export async function createConnectionString(){
    return createConnection({
        host: "localhost",
        user: "kctechno_bdas",
        password: "YfYhpeuq4znWT5hmpNFH",
        database: "kctechno_bdas"
    })
}
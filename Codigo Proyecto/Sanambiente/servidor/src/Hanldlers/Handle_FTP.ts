const Client = require('ftp');

export const CONFIG_FTP = (host: string, port: number, user: string, password: string) => {
    return {
        host,
        port,
        user,
        password,
    }
}

/**
 * 
 * @param csv 
 */
export const csvJSON = (csv: any) => {
    let lines = csv.split("\n");
    let headers = lines[0].split(",");
    let arrayValue: Array<any> = [];
    arrayValue.push(headers);
    for (var i = 1; i < lines.length; i++) {
        let currentline = lines[i].split(",");
        if(lines[i] !== '') {
            arrayValue.push(currentline);
        }
    }
    return arrayValue;
}
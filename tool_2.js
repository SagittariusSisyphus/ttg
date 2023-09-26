const query = require('./tool');
async function getStudentsInfo(id) {
    const sql = 'select name from class_1';
    let result = await query(sql);
    return result;
}
let Info = getStudentsInfo();
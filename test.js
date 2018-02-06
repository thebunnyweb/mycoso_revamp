
var fs = require('fs');

if(fs.existsSync('./app/')){
    return true
} else{
    return false
}
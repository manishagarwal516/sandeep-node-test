module.exports.formValadation= (req, res, next)=>{
    const formData = req.body;
    const invalidField = [];
    const fieldName = {'ftag':'First Name','ltag':'Last Name','etag':'Email', 'ptag': 'Password'};
    for(let i in fieldName){
        if(formData[i] == ''){
            invalidField.push(fieldName[i]); 
        }
        if(i=='ptag' && formData[i].length <8 && formData[i] != '' ){
            invalidField.push(' Password field should have at least 8 characters'); 
        } 
    }       
    if(invalidField.length>0){
        res.send(`These Field ${invalidField} are Missing`);
    }else{
        next();
    }
};
let userController = {
    saveUser: (req, res)=>{
                console.log('Data', req.body);
                let successMessage = '';
                if(req.body.ctag){
                    successMessage = (`Hello ${req.body.ftag} ${req.body.ltag}, Thank you for signing up. Your Account is now created. You would be receiving our periodic newsletters to your email : ${req.body.etag} `);
                }else{
                    successMessage = (`Hello ${req.body.ftag} ${req.body.ltag}, Thank you for signing up. Your Account Is created. `);
                }
                res(null, successMessage);

    }
}


module.exports = userController;
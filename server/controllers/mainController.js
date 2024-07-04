
exports.homepage=async(req,res)=>{

    const locals={
        title:"NodeJS Notes",
        description:"Free NodeJs Notes App"
    }

    // res.render('index',{locals,layout:'../views/layouts/front-page'});
    res.send("Working");
    
}


exports.about=async(req,res)=>{

    const locals={
        title:"About - NodeJS Notes",
        description:"Free NodeJs Notes App"
    }

    res.render('about',locals);
    
}


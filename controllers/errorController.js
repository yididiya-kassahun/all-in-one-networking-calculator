exports.errorPage = (req,res,next)=> {
    res.status(404).render('error/404',{
        pageTitle: "error page"
    })
}
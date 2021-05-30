

//LOGS ERRORS WHEN ENCOUNTERED

module.exports = func => {
    return (req, res, next) => {
        func(req, res, next)
            .catch((error) => {
                console.log(error)
                next
            });
    }
}
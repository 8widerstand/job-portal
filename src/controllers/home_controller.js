
export const getHome = async (req, res) => {
    res.render('home', { username: 'Virk' })
}

export const getTest = async (req, res) => {
    res.send('Hello Test!')
}
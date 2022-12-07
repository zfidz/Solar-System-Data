const Profile = require('../../models/profile')

module.exports = {
create,
}

async function create (req, res) {
    const profile = await Profile.findOne({"user._id": req.user})
    console.log(profile)
    profile.favorites.push(req.body)
    await profile.save()
    res.json(profile)
}

async function index (req,res){
    const profile =Profile.findById(req.params.id)
    res.json(profile.favorites)
    console.log(profile)
}
const mongoose = require('mongoose');
const User = require ('../models/user');


module.exports  = FriendsRequest = (member1_id, member2_id) => {
    User.requestFriend(member1_id,member2_id, (err, succes)=> {

        console.log(succes)
    })


};
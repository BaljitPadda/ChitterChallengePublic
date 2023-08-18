function response(allPeeps, allUsers) {

    return allPeeps.map(peep => {

        let peepUser = allUsers.find(user => user.username == peep.userID)

        let name;
        if (!peepUser) {
            name = "Unknown User"
        }
        else name = peepUser.name;

        return {
            name: name,
            userID: peep.userID,
            time: peep.time,
            message: peep.message
        }
    })

};

export default response;
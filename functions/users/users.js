module.exports.users = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify("this is the first event")
    }
}

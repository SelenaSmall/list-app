var axios = require('axios')

let apiHost = 'http://' + (process.env.API_HOST || 'localhost') + ':3000'

module.exports = {
    authenticateUser: function(email, password) {
        let data = {
            auth: {
                email: email,
                password: password
            }
        }
        return axios.post(apiHost + '/api/v1/user_token', data)
            .then(function (response) {
                return response.data.jwt
            })
            .catch(function (error) {
                return undefined
            })
    },
    getCurrentUser: function(jwt) {
        var config = {
            headers: {}
        }
        if (jwt) {
            config['headers']['Authorization'] = 'Bearer ' + jwt
        }
        return axios.get(apiHost + '/api/v1/users/current', config)
            .then(function(response){
                return response.data
            })
            .catch(function (error) {
                return undefined
            })
    }
}
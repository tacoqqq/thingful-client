import config from '../config'

const JwtAuthService = {
    postLogin(credentials){
        console.log(credentials)
        return fetch(`${config.API_ENDPOINT}/auth/login`, 
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                })
                .then(res => (!res.ok) 
                ? res.json().then(e => Promise.reject(e)) 
                : res.json())
    },

    postUser(userInfo){
        console.log(userInfo)
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then( res => 
                (!res.ok) 
                ? res.json().then(e => Promise.reject(e)) 
                : res.json())
            
    }

}

export default JwtAuthService
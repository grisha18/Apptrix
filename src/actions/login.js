export const saveAccess = (accessToken) => {

    return {
        type: "save_access",
        payload: accessToken
    }

}


export const saveUsers = (users) => {

    return {
        type: "save_users",
        payload: users
    }

}

export const saveTasks = (tasks) => {

    return {
        type: "save_tasks",
        payload: tasks
    }

}


export const saveRefresh = (refreshToken) => {

    return {
        type: "save_refresh",
        payload: refreshToken
    }

}


export const getUsers = () => {

    return function(dispatch){

        let accessToken = localStorage.getItem("access");
        accessToken = "perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL"
        console.log(accessToken);
    
        if(accessToken){
            fetch("https://example.youtrack.cloud/api/admin/users/me?fields=id,login,name,email", {
    
                method: "GET",
                headers: {
                    
                    Accept: 'application/json',
                    'Authorization': `Bearer perm:am9obi5kb2U=.UG9zdG1hbiBKb2huIERvZQ==.jJe0eYhhkV271j1lCpfknNYOEakNk7`,
                    'CACHE-CONTROL': "no-cache"
    
                }
    
            }
            )
            .then( res=>res.json())
            .then( json=>{
                
                dispatch(saveUsers(json));
    
            })
    
        }

    }


}
export const getTasks = () => {
    return function(dispatch) {

        fetch("https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)&query=project:+%7BSample+Project%7D", {
    
                method: "GET",
                headers: {
                    
                    Accept: 'application/json',
                    'Authorization': ` Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX`,
                    'CACHE-CONTROL': "no-cache",
                    'Content-Type': 'application/json'
    
                }
    
            }
            )
            .then( res=>res.json())
            .then( json=>{
                
                dispatch(saveTasks(json));
    
            })

    }
} 

export const doLogin = (username, password) => {

    return function (dispatch) {

        fetch("http://erp.apptrix.ru/api/token/", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'

            },
            body: JSON.stringify({ username, password })

        }
        ).then(reply => reply.json())
            .then(json => {

                localStorage.setItem("access", json.access);
                localStorage.setItem("refresh", json.refresh);
                dispatch(saveAccess(json.access));
                dispatch(saveRefresh(json.refresh));
                console.log(json.access)

            })


    }


}
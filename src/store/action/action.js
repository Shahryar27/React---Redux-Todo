import firebase from 'firebase';


export function display() {
    let arr = [];
    return dispatch => {



        firebase.database().ref('/').child("Todo_Redux").on('child_added', (snap) => {
            var obj = snap.val();
            obj.id = snap.key;
            arr.push(obj)
        })
        dispatch({ type: "DISPLAY", payload: arr })
       
    }
}

export function addtodo(item) {
    return dispatch => {
        var database = firebase.database().ref('/');
        database.child('Todo_Redux').push(item);
        dispatch({ type: "ADD", payload: item })
      
    }
}
export function deleteall(item) {
    let arr=[]
    return dispatch => {
        firebase.database().ref('/').remove();
        arr.push(item)
        dispatch({ type: "DELETEALL", payload: arr })
    }
}

export function delet(id) {
    return dispatch => {
        
        // console.log("idex",index)
        firebase.database().ref('/').child('Todo_Redux/'+id).remove()
        dispatch({ type: "DELET" })
       
    }
}

export function edit(id,newdata) {
    return dispatch => {
     
        // console.log("idex",index)
        firebase.database().ref('/').child('Todo_Redux/'+id).update(newdata)
        dispatch({ type: "EDIT" })
       
    }
}

export function closeEdit() {
    return dispatch => {
     dispatch({ type: "CLOSE_EDIT" })
       
    }
}
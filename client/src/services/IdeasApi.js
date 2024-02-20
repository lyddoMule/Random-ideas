import axios from  'axios'

class IdeasApi{
    constructor(){
        this._apiUrl='/api/ideas'
    }

    getIdeas(){
        return axios.get(this._apiUrl);
    }

   postIdeas(data){
        return axios.post(this._apiUrl, data)
   }
   updateIdeas(id,data){
    return  axios.put(`${this._apiUrl}/${id}`, data)
}

   deleteIdeas(id){
       const username= localStorage.getItem('username')?localStorage.getItem('username'):''
        return  axios.delete(`${this._apiUrl}/${id}`,{data:{username}} )
   }
}

export default new IdeasApi()
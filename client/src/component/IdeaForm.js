import IdeasApi from "../services/IdeasApi"
import { Modal, Collapse } from "bootstrap";
import IdeaList from "./IdeaList";


class IdeaForm{
    constructor(){
        this._formModal= document.querySelector('#form-modal')
        this._ideaList= new IdeaList()
    }

    addEventListeners(){
        this._form.addEventListener('submit',this.handleSubmit.bind(this))
    }



    async handleSubmit(e){
        e.preventDefault()

        if(!this._form.elements.username.value||!this._form.elements.tag.value||!this._form.elements.ideaText.value){
            alert('Please enter all fields')
            return;
        }

        localStorage.setItem('username', document.getElementById('username').value )

        const idea={
            username: document.getElementById('username').value,
            text: document.getElementById('ideaText').value,
            tag: document.getElementById('tag').value,
        }

         
        try {
            const newIdea= await IdeasApi.postIdeas(idea)
            this._ideaList.addIdeaToList(newIdea.data.data)

        } catch (error) {
            console.log(error);
        }
        idea.username=''
        idea.tag=''
        idea.text=''

        this.render()
        const modal= document.getElementById('modal')
        const modalEl= Modal.getInstance(modal)
        modalEl.hide()
    }
    render(){
        this._formModal.innerHTML=`  
                <form class=" " id="idea-form">
                    <label class="mb-2 text-light fw-bold" for='text' >Enter a Username</label>
                    <input type="text" class="form-control" name="username" id="username"
                    value='${localStorage.getItem('username')?localStorage.getItem('username'):''} ' />
                    <label class="mb-2 text-light fw-bold">What's your idea?</label>
                    <textarea type="text" class="form-control" name="text" id="ideaText"></textarea>
                    <label class="mb-2 text-light fw-bold">Tag</label>
                    <input type="text" class="form-control mb-3 " name="tag"  id="tag">
                    <button type="submit" class="btn btn-dark text-light" id="modalBtn">Submit</button>

        </form>
`
    this._form=document.querySelector('#idea-form')
    this.addEventListeners()

    }
}


export default IdeaForm
import { Modal, Collapse } from "bootstrap";

class IdeaForm{
    constructor(){
        this._formModal= document.querySelector('#form-modal')
    }

    addEventListeners(){
        this._form.addEventListener('submit',this.handleSubmit.bind(this))
    }

    handleSubmit(e){
        e.preventDefault()
        const idea={

            username: document.getElementById('username').value,
            text: document.getElementById('idea-text').value,
            tag: document.getElementById('tag').value,
            date: new Date()
        }
        console.log(idea);
        const modal= document.getElementById('modal')
        const modalEl= Modal.getInstance(modal)
        modalEl.hide()
    }
    render(){
        this._formModal.innerHTML=`  
                <form class=" " id="idea-form">
                    <label class="mb-2 text-light fw-bold" for="idea-text">Enter a Username</label>
                    <input type="text" class="form-control" name="username" id="username">
                    <label class="mb-2 text-light fw-bold">What's your idea?</label>
                    <textarea type="text" class="form-control" name="text" id="idea-text"></textarea>
                    <label class="mb-2 text-light fw-bold">Tag</label>
                    <input type="text" class="form-control mb-3 " name="tag" id="tag">
                    <button type="submit" class="btn btn-dark text-light" id="modalBtn">Submit</button>

        </form>
`
    this._form=document.querySelector('#idea-form')
    this.addEventListeners()

    }
}


export default IdeaForm
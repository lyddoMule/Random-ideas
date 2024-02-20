import IdeasApi from "../services/IdeasApi"



class IdeaList{
    constructor(){
        this._ideaList= document.querySelector('#idea-list')
        this._ideas=[]

        this.getIdeas()
        this._validTags= new Set()
        this._validTags.add('technology')
        this._validTags.add('software')
        this._validTags.add('business')
        this._validTags.add('education')
        this._validTags.add('health')
        this._validTags.add('inventions')
    }

    addEventListeners(){
        this._ideaList.addEventListener('click', (e)=>{
            if(e.target.classList.contains('fa-xmark')){
                e.stopImmediatePropagation()
                const ideaId= e.target.parentElement.parentElement.parentElement.dataset.id;
                // console.log(ideaId);
                this.deleteIdea(ideaId)

            }
        })
    }


    async getIdeas(){
        try {
            const res= await IdeasApi.getIdeas()
            this._ideas=res.data.data
            // console.log(this._ideas);
            this.render()            
                 } catch (error) {
            console.log(error);
        }    
    }

    async deleteIdea(ideaId){
        try {
            const res = await IdeasApi.deleteIdeas(ideaId)
            this._ideas.filter((idea)=> idea._id!==ideaId)
            this.getIdeas()
        } catch (error) {
            alert('You can not delete this resource')
        }
    }


    addIdeaToList(idea){
        this._ideas.push(idea)
        this.render()
    }

getTagClass(tag){
    tag= tag.toLowerCase()
    let tagClass=''
    if(this._validTags.has(tag)){
        tagClass= `tag-${tag}`      
        switch (tagClass) {
            case 'tag-technology':
                tagClass='bg-lightPurple'    
                break;
            case 'tag-software':
                tagClass='bg-lightBlue'    

                break;
            case 'tag-business':
                tagClass='bg-darkOrange'    
                break;
            case 'tag-health':
                tagClass='bg-lightLime'    
                break;
            case 'tag-education':               
                 tagClass='bg-darkBlue'    
                break;
            case 'tag-inventions':
                tagClass='bg-lightRed'    
                break;
                                                        
            default:
                tagClass='bg-dark'    
                break;
        }
    }else{
        tagClass='bg-dark'
    }
    return tagClass
}



render(){
        this._ideaList.innerHTML= this._ideas.map((idea)=>{
            let tagClass= this.getTagClass(idea.tag)
        const deleteBtn= idea.username===localStorage.getItem('username')
        ?`<h6 class="text-end mb-2"><i class="fa fa-xmark text-danger"></i>
        </h6>`:''
        return    `
        
            <div class="card col-sm-5 mx-3 " data-id="${idea._id}">
                <div class="card-body bg-bright">
                    ${deleteBtn}
                <div class="text mb-3">
                        <h6 class="fw-bold lh-base ">${idea.text}</h6>
                    </div>
                    <div class="tagName mb-3" >
                        <button class="btn tag ${tagClass} fw-bold text-light" id='tag-value'>${idea.tag.toUpperCase()}</button>
                    </div>
                    <div class="mb-3">
                        <p class="fw-bold">Posted on <span class="date text-gray" id="date">${idea.date}</span> by <span class="author" >${idea.username}</span></p>
                    </div>
                </div>
            </div>
           
        `
       
   
}).join('')
// this._ideas.appendChild(div) 
this.addEventListeners()
}


}



export default IdeaList
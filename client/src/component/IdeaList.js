class IdeaList{
    constructor(){
        this._ideaList= document.querySelector('#idea-list')
        this._ideas=[
            {
                id:1,
                text:'idea 1',
                username: 'lydia',
                tag: 'technology',
                date: '09/02/2024'
            },
            {
                id:2,
                text:'            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusantium, nesciunt cumque tenetur modi odit illum dolore assumenda delectus esse, itaque sint necessitatibus id explicabo ullam eum excepturi sit nobis',
                username: 'mule',
                tag: 'inventions',
                date: '10/02/2024'
            }
            ,           
            {
                id:3,
                text:'idea 1',
                username: 'lydia',
                tag: 'love',
                date: '09/02/2024'
            },
            {
                id:3,
                text:'idea 1',
                username: 'lydia',
                tag: 'business',
                date: '09/02/2024'
            },
            {
                id:3,
                text:'idea 1',
                username: 'lydia',
                tag: 'business',
                date: '09/02/2024'
            }

        ]
        this._validTags= new Set()
        this._validTags.add('technology')
        this._validTags.add('software')
        this._validTags.add('business')
        this._validTags.add('education')
        this._validTags.add('health')
        this._validTags.add('inventions')
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
        
        return    `
        
            <div class="card col-sm-5 px-3 mx-2 ">
                <div class="card-body bg-bright">
                    <div class=" mb-2 ">
                        <h6 class="text-end"><i class="fa fa-xmark text-danger text-right "></i>
                        </h6>
                    </div>
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
}


}



export default IdeaList
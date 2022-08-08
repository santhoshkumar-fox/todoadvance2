const _input = document.getElementById('inputtexter');
const _paraent_list = document.getElementById("listitems");
const _clearcomplete = document.getElementById("clearcomplete");


var itemcount = localStorage.length;
var btn_name = "all"   //active complete

//RunTime Starter


starts();
itemCounter();



// EventListeners


_input.addEventListener("keypress",(e)=>

{
    // get value after enter
   if(e.code === "Enter" && e.target.value !== "" ){

    let totdo = e.target.value;
    console.log("HI");
    // create dynamic id
    let totdo_id = new Date().getTime();
    let _todo_item =document.createElement("li");
    const lable_id = totdo_id+11;
    let delete_id = "deleteId";

    // innerhtml 
    _todo_item.innerHTML= `
    <div class="sizedBox"></div><input id="`+totdo_id+`" type="checkbox"><div class="sizedBox"></div><lable id="`+lable_id+`" for="`+totdo_id+`">`+totdo+`</lable><div class="sizedBox"></div>
    `;

    // add the created element into parant class

    _paraent_list.appendChild(_todo_item);

    let idC = totdo_id;
    let cheackerC = false;
    let contentC = e.target.value;
    console.log("name :");
    console.log(contentC);
    create_localsorage(idC,cheackerC,contentC);
    e.target.value  = '';

    
   }
});

_paraent_list.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.checked){

        const  lable_id = Number(e.target.id) + 11;
        var st_lable_id = String(lable_id);
        const _lable = document.getElementById(st_lable_id);
        _lable.style.textDecoration  = "line-through";
        let uid = Number(e.target.id);
        let ucheck = true;
    
        //lable retrive
        let ucontent = document.getElementById(st_lable_id).innerText;
        update_localstorage(uid,ucheck,ucontent);

        
    }
    else{
        const  lable_id = Number(e.target.id) + 11;
        var st_lable_id = String(lable_id);
        const _lable = document.getElementById(st_lable_id);
        _lable.style.textDecoration  = "none";
        let uid = Number(e.target.id);
        let ucheck = false;
    
        //lable retrive
        let ucontent = document.getElementById(st_lable_id).innerText;
        update_localstorage(uid,ucheck,ucontent);
        
        
        
    }


    //  document.getElementById('deleteId').style.color= "red";
    
});







function create_localsorage(id,cheacker,content){

    let json_format = {"id":id,"cheack":cheacker,"content":content,"time":"time","catageiry":"important"};
    let str_jason = JSON.stringify(json_format);
    localStorage.setItem(String(id),str_jason);
    console.log("seted!");
    itemCounter();

}

function update_localstorage(update_id,update_cheacker,update_content){

    let json_format = {"id":update_id,"cheack":update_cheacker,"content":update_content,"time":"time","catageiry":"important"};
    let str_jason = JSON.stringify(json_format);
    localStorage.setItem(String(update_id),str_jason);
    console.log("updated!");
    itemCounter();

}

function clearstorage(){

    let loca_store_length = localStorage.length;

    for (let l=0; l < loca_store_length; l++){

        if(localStorage.length >= 1){
            let Dnotes_id = localStorage.key(l);
            let Dnotes = localStorage.getItem(String(Dnotes_id));
            let Dnotes_json = JSON.parse(Dnotes);
            let d_cheacker = Dnotes_json['cheack'];
            console.log('cheack');
            console.log(d_cheacker);

            if(d_cheacker == true){
                localStorage.removeItem(Dnotes_id);
            }
            
        }


    }
    window.location.reload();
    itemCounter();
}

function itemCounter(){

    var _itemCount = document.getElementById("itemcount");
    _itemCount.innerText = "itemCount : "+(localStorage.length );

}



function starts(){
//    localStorage.clear();
    // localStorage.clear();
    console.log(localStorage.length)

    for(var i=0;i<localStorage.length; i++){
        console.log(i);
        if(localStorage.length >= 1){
            if(btn_name === "all"){

                var notes_id = localStorage.key(i);
                var notes = localStorage.getItem(String(notes_id));
                var notes_json = JSON.parse(notes)
                console.log(notes_json);
                let cheackq = notes_json['cheack']; 
                let contentq = notes_json['content']; 
                let idq = notes_json["id"];
                show_child_list(idq,cheackq,contentq);
            }
            else if(btn_name === "active"){

                var notes_id = localStorage.key(i);
                var notes = localStorage.getItem(String(notes_id));
                var notes_json = JSON.parse(notes)
                console.log(notes_json);
                let cheackq = notes_json['cheack']; 
                let contentq = notes_json['content']; 
                let idq = notes_json["id"];

                if(cheackq == false){
                    show_child_list(idq,cheackq,contentq);
                }
                
            }
            else if(btn_name === "complete"){

                var notes_id = localStorage.key(i);
                var notes = localStorage.getItem(String(notes_id));
                var notes_json = JSON.parse(notes)
                console.log(notes_json);
                let cheackq = notes_json['cheack']; 
                let contentq = notes_json['content']; 
                let idq = notes_json["id"];

                if(cheackq == true){
                    show_child_list(idq,cheackq,contentq);
                }
                
            }
     
        }
    }
    
}

function show_child_list(id,cheack,content){
    const list_paraent = document.getElementById("listitems");
    let _todo_item =document.createElement("li");
    let todo_input_id = Number(id);  //input id
    let todo_lable_id = Number(id) +11 ;
    console.log(todo_lable_id);

    _todo_item.innerHTML= `
    <div class="sizedBox"></div><input id="`+todo_input_id+`" type="checkbox"><div class="sizedBox"></div><lable id="`+todo_lable_id+`" for="`+todo_input_id+`">`+content+`</lable><div class="sizedBox"></div>
    `;
    _paraent_list.appendChild(_todo_item);
    document.getElementById(todo_input_id).checked  = cheack;
    if(cheack){
        const _lable = document.getElementById(todo_lable_id);
        _lable.style.textDecoration  = "line-through";

    }

}

function craetelist(content){
    console.log("HI");
    // create dynamic id
    let totdo_id = new Date().getTime();
    let _todo_item =document.createElement("li");
    const lable_id = totdo_id+11;
    let delete_id = "deleteId";

    // innerhtml 
    _todo_item.innerHTML= `
    <div class="sizedBox"></div><input id="`+totdo_id+`" type="checkbox"><div class="sizedBox"></div><lable id="`+lable_id+`" for="`+totdo_id+`">`+totdo+`</lable><div class="sizedBox"></div>
    `;

    // add the created element into parant class

    _paraent_list.appendChild(_todo_item);
    e.target.value="";
   }

//button functions

function all_btn(){
    
    btn_name = "all";
    document.getElementById("all").style.border = '1px solid white'
    document.getElementById('all').style.borderRadius = "20px"

    document.getElementById("active").style.border = 'none'

    document.getElementById("completed").style.border = 'none'
    delete_parent();
    starts();
    
    


}

function active_btn(){
    all_btn();
    btn_name = 'active';
    document.getElementById("active").style.border = '1px solid white'
    document.getElementById('active').style.borderRadius = "20px"  

    document.getElementById("all").style.border = 'none'

    document.getElementById("completed").style.border = 'none'
    delete_parent();
    starts();

}

function complete_btn(){
    all_btn();
    btn_name = 'complete';
    document.getElementById("completed").style.border = '1px solid white'
    document.getElementById('completed').style.borderRadius = "20px"

    document.getElementById("active").style.border = 'none'

    document.getElementById("all").style.border = 'none'
    delete_parent()
    starts();


}

function delete_parent(){
    var parent1 = document.getElementById("listitems");
    while (parent1.firstChild) {
        parent1.removeChild(parent1.firstChild);
    }
    

}

function cheackall(){
    for(var i=0;i<localStorage.length; i++){
        console.log(i);
        if(localStorage.length >= 1){
            

            var notes_id = localStorage.key(i);
            var notes = localStorage.getItem(String(notes_id));
            var notes_json = JSON.parse(notes)
            console.log(notes_json);
            let cheackq = true; 
            let contentq = notes_json['content']; 
            let idq = notes_json["id"];
            update_localstorage(idq,cheackq,contentq)
            window.location.reload();
            
        }
    }


}

function doubleclicker(){

    localStorage.clear();
}

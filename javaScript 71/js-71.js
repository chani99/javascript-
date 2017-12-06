let anonymousObj= {
    fname: "chani",
    lname: "Avrahami"
}

function person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

person.prototype.validate = function() {
    const objVal = Object.values(this);
    for( i=0; i<objVal.length; i++ ) {
        if(this[objVal[i] === 'chani']) {
            throw objVal[i] + "try another name";
        }
    }
}


pers1 = new person("chani", "avrahami", 36);
myform = document.getElementById("form1");

function createform(pers, myform){
    const objKeys = Object.keys(pers);
    

    for( i=0; i<objKeys.length; i++ ) {
        let inpu = document.createElement("input");
        inpu.id = inpu.placeholder = objKeys[i];
        myform.appendChild(inpu);
    }

}

document.getElementById("sendBut").addEventListener("click", function(){
    try{
        pers1.validate();
    }
    catch(ex) {
        document.getElementById('error').innerHTML = ex;

    }
})

createform(pers1, myform);

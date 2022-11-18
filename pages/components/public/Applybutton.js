
const applybutton = ({session})=>{
if (session == null) {
    return (

            <button onClick={displayapplynouser}>Postuler</button>
          
    );
} else if (session != null) 
return (
        <button onClick={displayapply}>Postuler</button>
         
);
function displayapply() {
    const applycontainer = document.getElementById("applycontainer")
    const applyuser = document.getElementById("applyuser");
    const applynouser = document.getElementById("applynouser");
    applyuser.style.visibility = "visible";
    applynouser.style.visibility = "hidden";
    applycontainer.style.visibility ="visible"
}
function displayapplynouser() {
    const applycontainer = document.getElementById("applycontainer")
    const applyuser = document.getElementById("applyuser");
    const applynouser = document.getElementById("applynouser");
    applyuser.style.visibility = "hidden";
    applynouser.style.visibility = "visible";
    applycontainer.style.visibility ="visible"
}
};


export default applybutton;
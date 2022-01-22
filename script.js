let button=document.getElementById("submit")
button.addEventListener("click",onformsubmit)

function onformsubmit()
{
    var data=readformdata();
    insertnewdata(data)
    resetdata()
}
function readformdata()
{
    var data={}
    data.firstname=document.getElementById("first-name").value
    data.lastname=document.getElementById("last-name").value
    data.address=document.getElementById("address").value
    data.pincode=document.getElementById("pincode").value
    data.gender=document.getElementById("form").gender.value
    data.food1=document.getElementById("food1").value
    data.food2=document.getElementById("food2").value
    data.state=document.getElementById("state").value
    data.country=document.getElementById("country").value
    console.log(data)
    return data
}

function insertnewdata(data){
    var table=document.getElementsByTagName("tbody")[0]
    var newrow=table.insertRow(table.length)
    cell1=newrow.insertCell(0)
    cell1.innerHTML=data.firstname
    cell2=newrow.insertCell(1)
    cell2.innerHTML=data.lastname
    cell3=newrow.insertCell(2)
    cell3.innerHTML=data.address
    cell4=newrow.insertCell(3)
    cell4.innerHTML=data.pincode
    cell5=newrow.insertCell(4)
    cell5.innerHTML=data.gender
    cell6=newrow.insertCell(5)
    cell6.innerHTML=`${data.food1},
    ${data.food2}`
    cell7=newrow.insertCell(6)
    cell7.innerHTML=data.state
    cell8=newrow.insertCell(7)
    cell8.innerHTML=data.country
}
function resetdata(){
    document.getElementById('first-name').value=""
    document.getElementById('last-name').value=""
    document.getElementById("address").value=""
    document.getElementById("pincode").value=""
    document.getElementById("form").gender.value="Female"
    document.getElementById("food1").value=""
    document.getElementById("food2").value=""
    document.getElementById("state").value=""
    document.getElementById("country").value=""
}
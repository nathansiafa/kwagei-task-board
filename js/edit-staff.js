var buttons = document.querySelectorAll('button');
var full_name_input = document.getElementById('edit-staff-fullname');
var email_input = document.getElementById('edit-staff-email');
var address_input = document.getElementById('edit-staff-address');
var contact_input = document.getElementById('edit-staff-phone-number');
var DOB_input = document.getElementById('edit-staff-dob');
var staff_id = document.getElementById('edit-staff-id');
var staff_data = JSON.parse(localStorage.getItem('task'));
var button_id = 0;

buttons.forEach(button =>{
    button.addEventListener('click', function(event){
        button_id = event.target.id;
    })
})

function editStaff(id){
    console.log(id)
    staff_id.value = button_id+1;
    full_name_input.value = staff_data[id].full_name ;
    email_input.value = staff_data[id].email;
    address_input.value = staff_data[id].address;
    contact_input.value = staff_data[id].phone;
    DOB_input.value = staff_data[id].dob;
}
editStaff(button_id);

function updateStaff(){
    console.log("Home :", button_id)
    staff_data[button_id].full_name = full_name_input.value;
    staff_data[button_id].email = email_input.value;
    staff_data[button_id].address = address_input.value;
    staff_data[button_id].phone = contact_input.value;
    staff_data[button_id].dob = DOB_input.value;

   

    localStorage.setItem('staff_data', JSON.stringify(staff_data));
}

document.getElementById('update-staff').addEventListener('click', function(event){
    event.preventDefault()
    updateStaff()
})
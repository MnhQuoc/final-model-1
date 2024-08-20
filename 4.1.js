let customer = new Customer("001", "Nguyễn Thanh Công" , "012344595","Hà Nội", "thanhcong@email.com")
let customer1 = new Customer("002", "Lê Hữu Dũng" , "0124467895","Sài Gòn", "djdonb@email.com")
let customer2 = new Customer("003", "Trần Đăng Vương" , "01123344595","Đà Nẵng", "vuongmaydap@email.com")
let arr = [customer,customer1,customer2];
let manage = new CustomerManagement(arr);


function addCustomer(){
    let id = document.getElementById('id').value;
    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let customer = new Customer(id, fullname, phone, address,email);
    manage.addCustomer(customer);
    manage.showList();
    document.getElementById('id').value ='';
    document.getElementById('fullname').value ='';
    document.getElementById('phone').value ='';
    document.getElementById('address').value ='';
    document.getElementById('email').value ='';
}
function deleteCustomer(id){
    manage.delete(id);
    manage.showList();
}
let customerId = 0;
function editCustomer(id){
    let customer = manage.findCustomerById(id);
    document.getElementById('id').value = customer.id;
    document.getElementById('fullname').value = customer.fullname;
    document.getElementById('phone').value = customer.phone;
    document.getElementById('address').value = customer.address;
    document.getElementById('email').value = customer.email;
    customerId = id;
}
function updateCustomer() {
    let id = document.getElementById('id').value;
    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let customer = manage.findCustomerById(customerId);
    manage.edit(customer,id,fullname,phone,address,email);
    manage.showList();
    document.getElementById('id').value ='';
    document.getElementById('fullname').value ='';
    document.getElementById('phone').value ='';
    document.getElementById('address').value ='';
    document.getElementById('email').value ='';
}
manage.showList();


class CustomerManagement {
    constructor(arr) {
        this.customer = arr;
    }

    showList() {
        let a = '';
        for (let i = 0; i < this.customer.length; i++) {
            a += '<tr>'
                + '<td>' + this.customer[i].id + '</td>'
                + '<td>' + this.customer[i].fullname + '</td>'
                + '<td>' + this.customer[i].phone + '</td>'
                + '<td>' + this.customer[i].address + '</td>'
                + '<td>' + this.customer[i].email + '</td>'
                + '<td>' + '<button class="btn btn-outline-danger"  type="button" onclick="deleteCustomer(' + i + ')"><i class=\'bx bxs-trash\' ></i></button> ' +
                ' <button  class="btn btn-outline-info" type="button" onclick="editCustomer(' + i + ')"><i class=\'bx bx-edit-alt\'></i></button>' +
                '</td>'
            a += '</tr>';
        }
        document.getElementById('list-customer').innerHTML = a;
    }

    addCustomer(customer) {
        this.customer.push(customer);
    }
    delete(id) {
        let check = confirm("Are you sure to delete this Customer ");
        if (check){
            this.customer.splice(id, 1);
            alert("Delete successfully!");
        }
    }
    findCustomerById(id) {
        return this.customer[id];
    }
    edit(Customer, id, fullname, phone, address, email) {
        customer.edit(id, fullname, phone, address, email);
    }

}
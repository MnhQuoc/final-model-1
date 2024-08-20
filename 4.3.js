class Customer {
    constructor(id, fullname, phone, address, email) {
        this.id = id;
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getFullname() {
        return this.fullname;
    }
    getPhone() {
        return this.phone;
    }
    getAddress() {
        return this.address;
    }
    getEmail() {
        return this.email;
    }
    setId(id) {
        this.id = id;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setAddress(address) {
        this.address = address;
    }
    setEmail(email) {
        this.email = email;
    }
    edit(id, fullname, phone, address, email) {
        this.id = id;
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
}
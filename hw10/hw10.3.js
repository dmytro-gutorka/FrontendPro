const contactBook = {

    findContact(name) {
        let contactName

        this.contacts.forEach(contact => {
            contactName = contact.name.includes(name);
            contactName = contactName ? contact :
                console.log(`no records found in contact book for name ${name}`)
        })

        return contactName
    },

    contacts: [

        {
            name: 'John',
            phoneNumber: '380111111',
            email: 'john@gmail.com'
        },
        {
            name: 'Annie',
            phoneNumber: '380222222',
            email: 'annie@gmail.com'
        },
        {
            name: 'Jin',
            phoneNumber: '380333333',
            email: 'jin@gmail.com'
        },
        {
            name: 'Alex',
            phoneNumber: '380444444',
            email: 'alex@gmail.com'
        },

    ]

}


function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '800-420-1738'

    const address = document.createElement('p')
    address.textContent = 'Somewhere over the rainbow'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)

    return contact
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact
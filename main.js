let kleurtjes = ['#D3E9FF', '#5FFCA1', '#F0EBB1']
let containers = document.getElementsByClassName('container')

function LieveNina() {
    for (let index = 0; index < containers.length; index++) {
        setTimeout(() => {
            containers[index].classList.add('animate')
        }, 3000)
        containers[index].classList.remove('animate')
    }
    // for (let index = 0; index < fototjes.length; index++) {
    // setTimeout(() => {
    //     document.body.style.backgroundColor = kleurtjes[0]
    //     document.querySelector('.lilgirl').innerHTML = zinnetjes[0]
    //     document.querySelector('.cutepic').src = fototjes[0]

    // }, 10)
    // setTimeout(() => {
    //     document.body.style.backgroundColor = kleurtjes[1]
    //     document.querySelector('.lilgirl').innerHTML = zinnetjes[1]
    //     document.querySelector('.cutepic').src = fototjes[1]

    // }, 6000)
    // setTimeout(() => {
    //     document.body.style.backgroundColor = kleurtjes[2]
    //     document.querySelector('.lilgirl').innerHTML = zinnetjes[2]
    //     document.querySelector('.cutepic').src = fototjes[2]

    // }, 12000)

    // }
}

LieveNina()
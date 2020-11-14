// 1. დროის რაღაც პერიოდში თავისით უნდა ირთვებოდეს შემდეგი ფოტო
// 2. ქვემოთ წრეზე დაჭერით უნდა ხსნიდეს შესაბამის ფოტოს +
// 3. თუ მაუსს მივიტანთ ფოტოსთან, არ უნდა შეიცვალოს მანამ, სანამ არ მოვაშორებთ მაუსს
// 4. თუ წრეზედაჭერით ავირჩევ ფოტოს უნდა განახლდეს ტაიმერი და იმ ფოტოდან განაგრძოს მუშაობა
// 5. search date attribute and date set
// 6. local storage


const mainImage = document.getElementById('main-pic');
const images = document.querySelectorAll('.choosing-pic img');
const imagesContainer = document.getElementById('choosing-pic');



imagesContainer.addEventListener('click', e => {
    if(e.target.tagName === "IMG"){
        mainImage.setAttribute("src", e.target.getAttribute('src'));
    }
})

images.forEach(image => {

});



// setInterval(function (){ 
//     mainImage.setAttribute("src", images.forEach(image => {
        
//     }))
// }, 2000);



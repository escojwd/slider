// 1. დროის რაღაც პერიოდში თავისით უნდა ირთვებოდეს შემდეგი ფოტო
// 2. ქვემოთ წრეზე დაჭერით უნდა ხსნიდეს შესაბამის ფოტოს
// 3. თუ მაუსს მივიტანთ ფოტოსთან, არ უნდა შეიცვალოს მანამ, სანამ არ მოვაშორებთ მაუსს
// 4. თუ წრეზედაჭერით ავირჩევ ფოტოს უნდა განახლდეს ტაიმერი და იმ ფოტოდან განაგრძოს მუშაობა

const mainImage = document.getElementById('main-pic');
const images = document.querySelectorAll('.choosing-pic img');
const imagesContainer = document.getElementById('choosing-pic');


let i = 0;

imagesContainer.addEventListener('click', e => {
    if(e.target.tagName === "IMG"){
        mainImage.setAttribute("src", e.target.getAttribute('src'));
    }
})
 
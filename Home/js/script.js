//-----------ấn chuột để chuyển tiếp slider img---------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgSliderNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0

rightbtn.addEventListener ("click",function(){
  index++  //vòng lặp next ảnh khi ấn chuột
  if(index>imgSliderNumber.length-1){
    index=0
  }
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click",function(){
  index--   //vòng lặp lùi ảnh khi ấn chuột
  if(index<=0){
    index=imgSliderNumber.length-1
  }
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
//-------xử lý slider content bottom--------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
    removeactive() 
    document.querySelector(".slider-content-left-top").style.right = index *100+"%" //nội dung theo ảnh
    image.classList.add("active")
    })
})
  function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
  }
  function removeactive(){
    let imgactive = document.querySelectorAll('.slider-content-left-bottom li.active') 
    imgactive.forEach(function(img) {
      img.classList.remove("active")
    })
  }

  //---------------slider img chạy tự động-----------
  function imgAuto(){
    index++
    if(index>imgSliderNumber.length-1){
      index = 0
    }
    removeactive() 
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNumberLi[index].classList.add("active")
  }
  setInterval(imgAuto,4500) //thời gian chuyển tiếp ảnh 4.5s
 
  //----------slider-product------------
  const rightbtnproduct = document.querySelector('.fa-chevron-right-product')
  const leftbtnproduct = document.querySelector('.fa-chevron-left-product')
  const imgNumberProduct = document.querySelectorAll('.slider-product-items')

  rightbtnproduct.addEventListener ("click",function(){
    index++  //vòng lặp next slider-product khi ấn chuột
    if(index>imgNumberProduct.length-1){
      index=0
    }
    document.querySelector(".slider-product-items-content").style.right = index *100+"%"
  })
  leftbtnproduct.addEventListener ("click",function(){
    index--   //vòng lặp lùi slider-product khi ấn chuột
    if(index<0){
      index=imgNumberProduct.length-1
    }
    document.querySelector(".slider-product-items-content").style.right = index *100+"%"
  })

  //------------xử lý nút xem thêm để hiện thêm sản phẩm và ẩn nút xem thêm khi ấn
const showButton = document.getElementById('show-all');
const hiddenProducts = document.querySelectorAll('.hidden');

showButton.addEventListener('click', () => {
  hiddenProducts.forEach((product) => {
    product.classList.remove('hidden');
  });
  showButton.style.display = 'none';
});
 


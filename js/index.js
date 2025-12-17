const body3_cardBox = document.querySelector('.body3-cardBox')
const body2_rightBox = document.querySelector('.body2-rightbox')
const topB = document.querySelector('.top')

setTimeout(() => {
    document.querySelector('.load').classList.add('remove')
    document.querySelector('body').classList.remove('no-scroll')
}, 1100);


const target = document.querySelector('.carousel-title')

const texts = [
  '跟我們一起\n走進中山社大',
  '學習\n讓生活更精彩',
  '學習不設限\n成長就在你身邊'
]

let textIndex = 0
let charIndex = 0

function typeLoop() {
  if (charIndex < texts[textIndex].length) {
    target.textContent += texts[textIndex][charIndex]
    charIndex++
    setTimeout(typeLoop, 150)
  } else {
    setTimeout(() => {
      target.textContent = ''
      charIndex = 0
      textIndex = (textIndex + 1) % texts.length
      typeLoop()
    }, 2000)
  }
}
setTimeout(() => {
    typeLoop()
}, 1200);



window.addEventListener('scroll', () => {
  const windowscrollY= window.scrollY

  if (windowscrollY >= 1) {
    topB.classList.add('show')
  }else{
    topB.classList.remove('show')
  }
})

const body2_data = [
    {
        title: "【我們與資訊的距離：媒體素養入門五堂課】開始報名囉!",
        time: "2025/12/3~2025/12/25",
        img: "./images/body2/1141126我們與資訊的距離.png"
    },
    {
        title: "《2025客家農遊會》淨零小屋共玩場X中正永續生活節",
        time: "2025/12/3~2025/12/25",
        img: "./images/body2/BENNER_綠生活-01.jpg"
    },
    {
        title: "【114-2期迎新活動審核結果出爐啦~】",
        time: "2025/12/3~2025/12/25",
        img: "./images/body2/1141121迎新.jpg"
    },
    {
        title: "【賀！本校師生獲得114年度終身學習獎~】",
        time: "2025/12/3~2025/12/25",
        img: "./images/body2/3.png"
    },
]
body2_data.forEach((value) => {
    body2_rightBox.innerHTML += `
    <div class="body2-rightCard">
        <div class="body2-rightimgbox me-4">
            <img src="${value.img}" alt="" class="body2-rightimg">
        </div>
        <div class="df jcc aic fd fw col-8">
            <p>${value.time}</p>
            <h5>${value.title}</h5>
        </div>
    </div>
    `
    body2_rightBox.prepend()
})
body2_rightBox.innerHTML +=`<div class="body2-rightBtnBox"><a href="./news.html" class="body2-rightBtn btn">查看更多</a></div>`

const body3data = [
    {
        title: '愛滋防治不分性別，珍愛自身健康',
        text: "愛滋病是由愛滋病毒所引起的疾病。愛滋病毒會破壞人體原本的免疫系統，使病患的身體抵抗力降低，當免疫系統遭到破壞後，原本不會造成生病的病菌，變得有機會感染人類，嚴重時會導致病患死亡。\
              愛滋病就是後天免疫缺乏症候群（Acquired Immunodeficiency Syndrome，AIDS）的簡稱，就是指因為病患身體抵抗力降低，導致得到各種疾病的症狀。\
              愛滋病毒為人類免疫缺乏病毒（Human Immunodeficiency Virus, HIV）的簡稱，是一種破壞免疫系統的病毒。",
        img: './images/Activity/愛滋防治_工作區域 1.jpg',
    },
    {
        title: "【社團法人高雄市女性權益促進會宣導活動】",
        text: `高雄女權會長期耕耘社區教育、教材研發與各類性別意識培力課程等，期望陪伴民眾在日常生活中落實性別平等。
                以期透過各種節日介紹與過節經驗，反思傳統習俗中的性別議題，認識多元型態的家庭與節日經驗。
                相關影片：<a href="https://reurl.cc/lDZ95v">https://reurl.cc/lDZ95v</a>`,
        img: "./images/Activity/多元家庭來過節.jpg",
    },
    {
        title: "【海科館與全促會暨社大合作推動海洋教育入館優惠】",
        text: `社團法人社區大學全國促進會與基隆國立海洋科技博物館，合作推動海洋教育、環境教育學習與體驗等。
                社大教職員與學生憑證即享入館票價優惠(一張識別證，可享四張之優惠)

                1.主題館160元、海洋劇場100元
                2.其他設施比照一般規定
                歡迎社大師生未來到海科館參觀、辦理課程活動，共同推動海洋教育。`,
        img: "./images/Activity/7.海科館摺頁-完整版.jpg",
    },
    {
        title: "臺北市教育局套書電子檔",
        text: `(一)「讓教育成為城市的榮耀系列」網址：
                <a href="https://reurl.cc/zr1q00">https://reurl.cc/zr1q00</a>（教育局網首頁/公告資訊/相關報告/臺北市教育施政成果）
                (二)「臺北市教育政策系列」網址：
                <a href="https://reurl.cc/4XrL2v">https://reurl.cc/4XrL2v</a>（教育局網首頁/公告資訊/白皮書專區）`,
        img: "./images/Activity/讓教育成為城市的榮耀.png",
    },
    {
        title: "臺北市勞動檢查處宣導短片",
        text: `為提升勞工職業安全衛生意識，北市勞動處111年針對『臨軌作業安全』製作二支數位教材：
                (1)一般作業人員例行性安全(片長31分)
                <a href="https://reurl.cc/Yv25MX">https://reurl.cc/Yv25MX</a>

                (2)臨軌施工安全(片長31分18秒)
                <a href="https://reurl.cc/yrpj1E">https://reurl.cc/yrpj1E</a>`,
        img: "./images/Activity/勞動檢查處_臨軌作業安全.gif",
    },
]

body3data.forEach((value) => {
    body3_cardBox.innerHTML += `
      <div class="body3-card swiper-slide">
        <div>
          <img src="${value.img}" alt="" class="body3-img">
        </div>
        <div>
          <h3 class="fw mb-4">${value.title}</h3>
          <p class="meta pe-5 fs-6">${value.text}</p>
        </div>
      </div>
      `
})




var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


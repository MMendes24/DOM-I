const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const topNav = document.querySelectorAll('a');
topNav[0].textContent = siteContent.nav["nav-item-1"]
topNav[1].textContent = siteContent.nav["nav-item-2"]
topNav[2].textContent = siteContent.nav["nav-item-3"]
topNav[3].textContent = siteContent.nav["nav-item-4"]
topNav[4].textContent = siteContent.nav["nav-item-5"]
topNav[5].textContent = siteContent.nav["nav-item-6"]

const headerSection = document.querySelector('cta')

const titleHeader = document.querySelector('h1')
titleHeader.textContent = siteContent.cta.h1

const headerImg = document.querySelector('#cta-img')
headerImg.setAttribute('src', siteContent.cta["img-src"])

const headerButton = document.querySelector('button')
headerButton.textContent = siteContent.cta.button

const mainContent = document.querySelectorAll('.text-content h4');
mainContent[0].textContent = siteContent["main-content"]["features-h4"]
mainContent[1].textContent = siteContent["main-content"]["about-h4"]
mainContent[2].textContent = siteContent["main-content"]["services-h4"]
mainContent[3].textContent = siteContent["main-content"]["product-h4"]
mainContent[4].textContent = siteContent["main-content"]["vision-h4"]

const mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = siteContent["main-content"]["features-content"]
mainText[1].textContent = siteContent["main-content"]["about-content"]
mainText[2].textContent = siteContent["main-content"]["services-content"]
mainText[3].textContent = siteContent["main-content"]["product-content"]
mainText[4].textContent = siteContent["main-content"]["vision-content"]

const contentImg = document.querySelector('.middle-img')
contentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"]

const contactParas = document.querySelectorAll('.contact p');
contactParas[0].textContent = siteContent.contact.address
contactParas[1].textContent = siteContent.contact.phone
contactParas[2].textContent = siteContent.contact.email;

const footerIndex = document.querySelector('footer p');
footerIndex.textContent = siteContent.footer.copyright;
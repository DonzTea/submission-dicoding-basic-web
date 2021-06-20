const baseUrl = window.location.href.replace('/index.html', '');

// * Menu Toggler

const menuToggler = document.querySelector('#menu-toggler');
let menuOpened = false;
const menu = document.querySelector('#menu');
menuToggler.addEventListener('click', () => {
  menuOpened = !menuOpened;
  if (menuOpened) {
    menuToggler.setAttribute('src', `${baseUrl}/assets/images/close.svg`);
  } else {
    menuToggler.setAttribute('src', `${baseUrl}/assets/images/menu.svg`);
  }
  menuToggler.classList.toggle('active');
  menu.classList.toggle('active');
});

// * Testimonials *

const testimonials = [
  {
    name: 'Jeney Wilson',
    profession: 'Software Developer',
    imageSource: `${baseUrl}/assets/images/profile-1.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Culbert',
    profession: 'UI / UX Designer',
    imageSource: `${baseUrl}/assets/images/profile-2.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Bradley',
    profession: 'Creative Director',
    imageSource: `${baseUrl}/assets/images/profile-3.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Emma',
    profession: 'Marketing Director',
    imageSource: `${baseUrl}/assets/images/profile-4.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Charlotte',
    profession: 'Advertising Manager',
    imageSource: `${baseUrl}/assets/images/profile-5.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Scarlett',
    profession: 'PR Director',
    imageSource: `${baseUrl}/assets/images/profile-6.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Hannah',
    profession: 'Brand / Product Manager',
    imageSource: `${baseUrl}/assets/images/profile-7.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
  {
    name: 'Abraham',
    profession: 'Art Director',
    imageSource: `${baseUrl}/assets/images/profile-8.jpg`,
    content:
      "I'am very fortunate to trust my company to allies and now my company income is increasing.",
    rate: 4,
  },
];

const createTestimonial = ({
  name,
  profession,
  imageSource,
  content,
  rate,
}) => {
  let stars = ``;
  for (let i = 0; i < rate; i++)
    stars += `<img src="${baseUrl}/assets/images/star.svg" alt="rating" />`;
  if (rate < 5) {
    const remainingStar = 5 - rate;
    for (let i = 0; i < remainingStar; i++)
      stars += `<img src="${baseUrl}/assets/images/star-outline.svg" alt="rating" />`;
  }

  const testimonial = `<div class="testimonial box-shadow">
            <img
              class="quote"
              src="${baseUrl}/assets/images/quotation-mark.svg"
              alt="quote"
            />
            <p>
              ${content}
            </p>
            <div class="interviewees">
              <div class="profile-image">
                <img src="${imageSource}" alt="profile" />
              </div>
              <div>
                <div class="profile-name">${name}</div>
                <div class="profile-job">${profession}</div>
              </div>
            </div>
            <div class="rating">
              ${stars}
            </div>
          </div>`;

  return testimonial;
};

const testimonialsElement = document.querySelector('#testimonials-content');
for (let i = 0; i < testimonials.length; i++) {
  const testimonial = testimonials[i];
  testimonialsElement.insertAdjacentHTML(
    'beforeend',
    createTestimonial(testimonial),
  );
}

const nextElement = document.querySelector('#next');
const prevElement = document.querySelector('#prev');

const testimonialCardSample = document.querySelector('.testimonial');
const testimonialCardWidth = testimonialCardSample.clientWidth;

const testimonialCardRightMargin = parseInt(
  window.getComputedStyle(testimonialCardSample).marginRight,
);
const totalTestimonialWidth = testimonialCardWidth + testimonialCardRightMargin;
const maxHorizontalTestimonialPosition =
  totalTestimonialWidth * testimonials.length;

const testimonialWrapper = document.querySelector('#testimonials-content');
const visibleTestimonialWidth = testimonialWrapper.clientWidth;
let horizontalTestimonialPosition = 0;
nextElement.addEventListener('mousedown', () => {
  if (
    maxHorizontalTestimonialPosition - horizontalTestimonialPosition >
    visibleTestimonialWidth
  ) {
    testimonialsElement.scrollTo(
      (horizontalTestimonialPosition += totalTestimonialWidth),
      0,
    );
  }
});
prevElement.addEventListener('mousedown', () => {
  if (horizontalTestimonialPosition > 0)
    testimonialsElement.scrollTo(
      (horizontalTestimonialPosition -= totalTestimonialWidth),
      0,
    );
});

window.addEventListener('resize', () => {});

// * Navigation *

const whyUsSection = document.querySelector('#why-us');
const testimonialsSection = document.querySelector('#testimonials');
const pricingSection = document.querySelector('#pricing');
const encouragementSection = document.querySelector('main > aside');

const logo = document.querySelector('#logo');
const whyUseNavigators = [...document.querySelectorAll('.why-us-navigator')];
const testimonialsNavigators = [
  ...document.querySelectorAll('.testimonials-navigator'),
];
const pricingNavigators = [...document.querySelectorAll('.pricing-navigator')];
const downloadNavigators = [
  ...document.querySelectorAll('.download-navigator'),
];

function scroll(event, element, customHeight = 0) {
  event.preventDefault();
  if (!element) return console.error(new Error('selector is not valid'));
  window.scrollTo(0, element.offsetTop + customHeight);
}

logo.addEventListener('click', (e) => scroll(e, window));
whyUseNavigators.forEach((whyUseNavigator) =>
  whyUseNavigator.addEventListener('click', (e) => {
    scroll(e, whyUsSection, -150);
    menu.classList.remove('active');
  }),
);
testimonialsNavigators.forEach((testimonialsNavigator) =>
  testimonialsNavigator.addEventListener('click', (e) => {
    scroll(e, testimonialsSection, -150);
    menu.classList.remove('active');
  }),
);
pricingNavigators.forEach((pricingNavigator) =>
  pricingNavigator.addEventListener('click', (e) => {
    scroll(e, pricingSection, -100);
    menu.classList.remove('active');
  }),
);
downloadNavigators.forEach((downloadNavigator) =>
  downloadNavigator.addEventListener('click', (e) => {
    scroll(e, encouragementSection, -100);
    menu.classList.remove('active');
  }),
);

// * Intersection Observers *

// why us
const whyUsArticles = [...document.querySelectorAll('#why-us > article')];
const whyUsLeftContents = [
  ...document.querySelectorAll('#why-us > article > div:nth-child(1)'),
];
const whyUsRightContents = [
  ...document.querySelectorAll('#why-us > article > div:nth-child(2)'),
];

const whyUsOptions = {
  threshold: 0.35,
};

for (const [index, article] of whyUsArticles.entries()) {
  const whyUsLeftContent = whyUsLeftContents[index];
  function hideToLeft(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      whyUsLeftContent.classList.remove('hidden-left');
    } else {
      whyUsLeftContent.classList.add('hidden-left');
    }
  }

  const whyUsRightContent = whyUsRightContents[index];
  function hideToRight(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      whyUsRightContent.classList.remove('hidden-right');
    } else {
      whyUsRightContent.classList.add('hidden-right');
    }
  }

  new IntersectionObserver(hideToLeft, whyUsOptions).observe(article);
  new IntersectionObserver(hideToRight, whyUsOptions).observe(article);
}

// testimonials

const testimonialItems = [...document.querySelectorAll('div.testimonial')];
const testimonialOptions = {
  threshold: 0.8,
};

for (const testimonialItem of testimonialItems) {
  function hideToBottom(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      testimonialItem.classList.remove('hidden-bottom');
    } else {
      testimonialItem.classList.add('hidden-bottom');
    }
  }

  new IntersectionObserver(hideToBottom, testimonialOptions).observe(
    testimonialsSection,
  );
}

// encouragement

const encouragementOptions = {
  threshold: 0.35,
};

const leftEncouragementContent = document.querySelector(
  'main > aside > div:nth-child(1)',
);
const rightEncouragementContent = document.querySelector(
  'main > aside > div:nth-child(2)',
);

function hideEncouragementToLeft(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    leftEncouragementContent.classList.remove('hidden-left');
  } else {
    leftEncouragementContent.classList.add('hidden-left');
  }
}

function hideEncouragementToRight(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    rightEncouragementContent.classList.remove('hidden-right');
  } else {
    rightEncouragementContent.classList.add('hidden-right');
  }
}

new IntersectionObserver(hideEncouragementToLeft, encouragementOptions).observe(
  encouragementSection,
);
new IntersectionObserver(
  hideEncouragementToRight,
  encouragementOptions,
).observe(encouragementSection);

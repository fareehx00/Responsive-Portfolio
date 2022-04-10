$(function() {
    $(".typing").typed({
      strings: ["Freelancer","Blogger","Front end Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });
  });

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq_card');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})
(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);

function sendToWhatsApp(event) {
  event.preventDefault();

  // جمع البيانات من النموذج
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const notes = document.getElementById("notes").value;

  // تنسيق الرسالة
  let message = `مرحباً، لدي استفسار عن دبلوم تحليل السلوك التطبيقي\n`;
  message += `الاسم: ${fullName}\n`;
  message += `البريد الإلكتروني: ${email}\n`;
  if (notes) {
    message += `ملاحظات: ${notes}\n`;
  }

  // ترميز الرسالة للURL
  const encodedMessage = encodeURIComponent(message);

  // فتح الواتساب مع الرسالة
  window.open(`https://wa.me/201110233325?text=${encodedMessage}`, "_blank");

  // مسح النموذج
  document.getElementById("contactForm").reset();
}

// تحديد عدد الأيام
const daysLeft = 4;

// حساب الوقت النهائي (بعد 4 أيام)
const endTime = new Date().getTime() + daysLeft * 60 * 60 * 1000;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance > 0) {
    // تحويل الزمن المتبقي إلى أيام وساعات ودقائق وثوانٍ
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض العداد
    document.getElementById(
      "countdown"
    ).innerHTML = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
  } else {
    // عند انتهاء العداد
    document.getElementById("countdown").innerHTML = "انتهى الوقت!";
  }
}

// تحديث العداد كل ثانية
setInterval(updateCountdown, 1000);

// تشغيل العداد لأول مرة
updateCountdown();

// Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom-nav');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Remove preload class after page load
window.addEventListener('load', function() {
  document.body.classList.remove('preload');
});

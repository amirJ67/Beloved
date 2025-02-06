// تنظیم زبان اولیه (انگلیسی)
let isEnglish = true;

// تغییر زبان و به‌روز رسانی تمام بخش‌ها
function toggleLanguage() {
  isEnglish = !isEnglish;

  if (isEnglish) {
    // متون انگلیسی (سبک کوشولو)
    document.getElementById("siteTitle").innerHTML = "My Quirky, Lovable <span class='special-zahra'>Zahra</span>";
    document.querySelector("header .title").innerHTML = "My Quirky, Lovable <span class='special-zahra'>Zahra</span>";
    document.querySelector("header .subtitle").innerHTML =
      "An absurdly fun adventure of love and mischief, where every heartbeat giggles at our quirky romance with <span class='special-zahra'>Zahra</span>.";
    document.querySelector("#about h2").textContent = "Our Crazy Love Story";
    document.querySelector("#about p").innerHTML =
      "In this wild universe, our paths hilariously crossed—like a cosmic prank perfectly timed. I, Amir, caught a spark in the mischievous eyes of <span class='special-zahra'>Zahra</span>, a dazzling beam that lit up my quirky world. Every moment with her is a mix of belly laughs, a dash of chaos, and a whole lot of fun, all woven into our own silly saga.<br><br>Our journey is a rollercoaster of goofy secrets and playful hugs, far beyond the ordinary. It’s a tale of bold mischief, unexpected giggles, and a love so genuine that even the stars crack a smile. Every sunrise and sunset comes with our chorus of laughter and a cheeky promise to keep the fun alive.";
    document.querySelector("#love-poem h2").textContent = "Ode to Our Crazy Love";
    document.querySelector("#love-poem p").innerHTML =
      "Beneath the starry quilt of night, where dreams dance with mischief, our hearts scribble quirky little poems of love. Each line is a playful nod to our absurd connection, etching memories in the hallway of time.<br><br>And as the moon winks at us from above, my soul can’t help but murmur your name, <span class='special-zahra'>Zahra</span>—every goofy hug and fleeting moment reminds me that you’re the spark lighting up my wonderfully wild path.";
    document.querySelector("#messages h2").textContent = "Whispers from the Heart";
    const messages = document.querySelectorAll("#messages .message p");
    if (messages.length >= 2) {
      messages[0].textContent = "\"Every heartbeat with you is like a joyride to a fun-filled paradise, where dreams and quirky reality mix into pure delight.\"";
      messages[1].textContent = "\"Your smile splashes colors over my day, turning even the simplest moment into a burst of magic.\"";
    }
    document.querySelector("#gallery h2").textContent = "Hilarious Moments Captured in Time";
    document.querySelector("#memories h2").textContent = "Silly Reminiscences";
    const memories = document.querySelectorAll("#memories .memory p");
    if (memories.length >= 2) {
      memories[0].textContent = "\"Every shared grin and cheeky touch is scribbled in our heart’s diary—a collection of laugh-out-loud moments.\"";
      memories[1].textContent = "\"In the quiet of the night, our memories softly chuckle about our quirky love that defies all odds.\"";
    }
    // تایمر
    if (document.getElementById("timerTitle")) {
      document.getElementById("timerTitle").textContent = "Time Since Our Wild First Encounter";
    }
    // فوتر
    document.querySelector("footer .footer-text").innerHTML = "Forever laughing together, Amir &amp; <span class='special-zahra'>Zahra</span>";
    document.querySelector("#langToggle").textContent = "Change Language";
  } else {
    // متون فارسی (سبک کوشولو)
    document.getElementById("siteTitle").innerHTML = "<span class='special-zahra'>زهرا</span>، معشوق با مزه‌ام";
    document.querySelector("header .title").innerHTML = "<span class='special-zahra'>زهرا</span>، معشوق با مزه‌ام";
    document.querySelector("header .subtitle").innerHTML =
      "ماجرایی دیوانه‌وار و بامزه از عشق و شیطنت، جایی که هر ضربان قلب با خنده، سرود عاشقانه‌ی <span class='special-zahra'>زهرا</span> را زمزمه می‌کند.";
    document.querySelector("#about h2").textContent = "داستان عاشقانه‌ی بامزه‌ی ما";
    document.querySelector("#about p").innerHTML =
      "در این کائنات وحشی، مسیرهای ما به شکلی کاملاً غیرمنتظره برخورد کردند—مثل شوخی حساب شده‌ی کیهانی. من، امیر، جرقه‌ای در نگاه شوخ‌طبع <span class='special-zahra'>زهرا</span> دیدم؛ نوری خیره‌کننده که دنیای عجیب و بامزه‌ام را روشن کرد. هر لحظه با او ترکیبی از خنده‌های دل‌چسب، کمی جنجال و کلی حال و هوای خوب است؛ همه در داستان کوچولوی پرماجرای ما با هم تنیده شده‌اند.<br><br>سفر ما مثل سوارکاری هیجان‌انگیز با رموز بامزه و در آغوش‌های شوخی‌آمیز است که فراتر از عادی می‌رود. این حکایت شجاعت بامزه، خنده‌های غیرمنتظره و عشقی است به آن اندازه واقعی که حتی ستاره‌ها هم لبخند می‌زنند. هر سپیده‌دم و هر شام با خنده‌های ما و قولی شوخانه برای ادامه‌ی این ماجراجویی همراه است.";
    document.querySelector("#love-poem h2").textContent = "سرودی برای عشق دیوانه‌وار ما";
    document.querySelector("#love-poem p").innerHTML =
      "زیر پتو ستاره‌ای شب، جایی که رویاها با شیطنت می‌رقصند، قلب‌هایمان چند بیت بامزه از عشق می‌نویسند. هر سطر، اشاره‌ای شوخ به پیوند عجیب و دلنشین ماست و خاطراتی را در راهروهای بی‌پایان زمان حک می‌کند.<br><br>و مثل آنکه ماه به ما چشمک می‌دهد، جان من نیز نام <span class='special-zahra'>زهرا</span> را در هر آغوش گرم و هر لحظه‌ی پرشور زمزمه می‌کند—تو همان جرقه‌ای هستی که مسیر پر جنجال من را روشن می‌سازد.";
    document.querySelector("#messages h2").textContent = "نجواهای دل";
    const messagesFa = document.querySelectorAll("#messages .message p");
    if (messagesFa.length >= 2) {
      messagesFa[0].textContent = "\"هر ضربان قلب با تو مثل سوار شدن روی وسیله‌ای بامزه به سوی بهشت است، جایی که رویا و واقعیت با هم می‌رقصند.\"";
      messagesFa[1].textContent = "\"لبخند تو، روز مرا با رنگ‌های شادی و عشق رنگ می‌کند و هر لحظه را به انفجاری از جادوی بامزه بدل می‌کند.\"";
    }
    document.querySelector("#gallery h2").textContent = "لحظات بامزه ثبت‌شده در زمان";
    document.querySelector("#memories h2").textContent = "خاطرات پرحال";
    const memoriesFa = document.querySelectorAll("#memories .memory p");
    if (memoriesFa.length >= 2) {
      memoriesFa[0].textContent = "\"هر خنده مشترک و نوازش شوخ، در دفتر خاطرات ما ثبت شده—گنجینه‌ای از لحظات خنده‌دار.\"";
      memoriesFa[1].textContent = "\"در خلوت شب، خاطرات ما به آرامی از عشقی شوخ و بامزه سخن می‌گویند که از زمان و فضا فراتر است.\"";
    }
    // تایمر
    if (document.getElementById("timerTitle")) {
      document.getElementById("timerTitle").textContent = "زمان از ابتدای ماجرای بامزه‌ی ما";
    }
    // فوتر
    document.querySelector("footer .footer-text").innerHTML = "تا آخر دنیا با هم می‌خندیم، امیر &amp; <span class='special-zahra'>زهرا</span>";
    document.querySelector("#langToggle").textContent = "تغییر زبان";
  }
}

// تایمر: محاسبه زمان سپری شده از 30 نوامبر 2024 ساعت 20:02 (از آغاز آشنایی ما)
function updateTimer() {
  const targetDate = new Date("2024-11-30T20:02:00");
  const now = new Date();
  const diff = now - targetDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (isEnglish) {
    document.getElementById("elapsedTime").textContent =
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } else {
    document.getElementById("elapsedTime").textContent =
      `${days} روز، ${hours} ساعت، ${minutes} دقیقه، ${seconds} ثانیه`;
  }
}

setInterval(updateTimer, 1000);
updateTimer();

// Smooth Scroll for Older Browsers
document.querySelectorAll('.footer-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// نمایش مودال تصویر
function showImage(imageId) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  if (imageId === "image1") {
    modalImage.src = "image1.jpg";
  } else if (imageId === "image2") {
    modalImage.src = "image2.jpg";
  } else if (imageId === "image3") {
    modalImage.src = "image3.jpg";
  } else if (imageId === "image4") {
    modalImage.src = "image4.jpg";
  }

  modalImage.style.maxWidth = "100%";
  modalImage.style.maxHeight = "100%";
  modal.classList.add("active");
}

// بستن مودال
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
}

// دکمه اسکرول به بالا با اسکرول نرم
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// جلوگیری از انتخاب متن (برای تجربه کاربری بهتر)
document.body.addEventListener("mousedown", function (event) {
  event.preventDefault();
});

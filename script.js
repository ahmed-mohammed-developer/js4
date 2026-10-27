// نجهّز كل عنصر مقارنة بشكل مستقل، حتى يمكن إضافة أكثر من معرض للصفحة
const comparisons = document.querySelectorAll("[data-comparison]");

comparisons.forEach((comparison) => {
  const range = comparison.querySelector("[data-range]");
  const valueOutput = comparison
    .closest(".comparison-card")
    .querySelector("[data-value]");

  // تحدّث هذه الدالة موضع الصورة العلوية والخط وقيمة الفاصل
  function updateComparison() {
    const position = Number(range.value);

    // حفظ الموضع في متغير CSS ليستخدمه قص الصورة والخط
    comparison.style.setProperty("--position", `${position}%`);

    // عرض الرقم للمستخدم وتحديث وصفه لقارئ الشاشة
    valueOutput.textContent = `${position}%`;
    range.setAttribute(
      "aria-valuetext",
      `الفاصل عند ${position} بالمئة`
    );
  }

  // حدث input يتكرر أثناء السحب، فيحرّك الفاصل مباشرة
  range.addEventListener("input", updateComparison);

  // تطبيق القيمة الأولية عند تحميل الصفحة
  updateComparison();
});
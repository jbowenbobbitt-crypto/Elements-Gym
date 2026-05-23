document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".appointment-form, .class-registration-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const coach = form.dataset.coach;
      const className = form.dataset.class;
      const subject = className || coach || "your request";
      const success = form.parentElement?.querySelector(".form-success");
      if (!success) return;

      success.hidden = false;
      if (className) {
        success.innerHTML =
          `<strong>Registration received!</strong> Your spot in <em>${className}</em> ` +
          "has been submitted (demo). We'll confirm your session by email within 24 hours.";
      } else {
        success.innerHTML =
          `<strong>Request received!</strong> Your appointment request with ${subject} ` +
          "has been submitted (demo). We'll confirm by email within 24 hours.";
      }

      form.reset();

      const preset = form.querySelector("[data-default]");
      if (preset?.dataset.default) {
        preset.value = preset.dataset.default;
      }

      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
});

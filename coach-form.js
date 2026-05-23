document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".appointment-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const coach = form.dataset.coach || "your coach";
      const success = form.parentElement?.querySelector(".form-success");
      if (!success) return;

      success.hidden = false;
      success.innerHTML =
        `<strong>Request received!</strong> Your appointment request with ${coach} ` +
        "has been submitted (demo). We'll confirm by email within 24 hours.";

      form.reset();

      const service = form.querySelector("[name=service]");
      if (service?.dataset.default) {
        service.value = service.dataset.default;
      }

      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
});

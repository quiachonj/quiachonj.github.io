document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const container = document.getElementById("resume-container");
  const baseUrl = document.body.getAttribute("data-baseurl") || "";
  const resumePath = isMobile? '{baseUrl}/assets/htm/resume.htm': '{baseUrl}/assets/pdf/resume.pdf';
  container.innerHTML = '<iframe src="${resumePath}" width="100%" height="800px" style="border:none;"></iframe>';
});
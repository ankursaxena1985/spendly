// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// "See how it works" video modal (landing page)                       //
// ------------------------------------------------------------------ //

(function () {
    const modal = document.getElementById("video-modal");
    if (!modal || typeof modal.showModal !== "function") return;

    const iframe = modal.querySelector("iframe");

    function openModal(event) {
        event.preventDefault();
        // Load the video only when opened, so it autoplays and isn't fetched on page load
        iframe.src = iframe.dataset.src;
        modal.showModal();
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.close();
    }

    document.querySelectorAll("[data-video-open]").forEach(function (btn) {
        btn.addEventListener("click", openModal);
    });

    modal.querySelector("[data-video-close]").addEventListener("click", closeModal);

    // Clicks on the dialog element itself (not its content) are backdrop clicks
    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });

    // Fires for the close button, backdrop click, and the Escape key
    modal.addEventListener("close", function () {
        iframe.src = "";  // unloading the iframe stops playback
        document.body.classList.remove("modal-open");
    });
})();

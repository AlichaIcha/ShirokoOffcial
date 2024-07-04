// Objek untuk menyimpan pengaturan
const settings = {
    title: "Sunaōkami Shiroko | Always happy",
    metaTitle: "Sunaōkami Shiroko|| Always happy",
    metaDescription: "Developer & Creator",
    metaKeywords: "Shiroko, profil, siapa Shiroko?",
    metaRobots: "index, follow",
    profileImage: "profile.jpg",
    name: "Sunaōkami Shiroko ",
    occupation: "Creator & Developer",
    location: "📍 Bekasi Timur, Jawa Barat, Indonesia",
    socialLinks: [
        { name: "Instagram", url: "https://instagram.com/fadlangenz" },
        { name: "WhatsApp", url: "https://wa.me/qr/RTFQEQ7MLSZCJ1" },
        { name: "YouTube", url: "https://youtube.com/@bfgsbyfadlangebzsubscribe6157" },
        { name: "Facebook", url: "https://www.facebook.com/dheri.ap.135" },
        { name: "Donasi", url: "https://saweria.co/fadlan02" },
        { name: "Github", url: "https://github.com/AlichaIcha" }
        // Tambahkan link sosial lainnya di sini
    ]
};

// Fungsi untuk mengisi konten halaman dari settings.js
function fillContent() {
    document.title = settings.title;
    document.getElementById("meta-title").setAttribute("content", settings.metaTitle);
    document.getElementById("meta-description").setAttribute("content", settings.metaDescription);
    document.getElementById("meta-keywords").setAttribute("content", settings.metaKeywords);
    document.getElementById("meta-robots").setAttribute("content", settings.metaRobots);
    document.getElementById("profile-image").setAttribute("src", settings.profileImage);
    document.querySelector(".name").textContent = settings.name;
    document.getElementById("occupation").textContent = settings.occupation;
    document.getElementById("location").innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${settings.location}`;

    const socialLinksContainer = document.getElementById("social-links");
    settings.socialLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);
        linkElement.setAttribute("target", "_blank");
        linkElement.textContent = link.name;
        socialLinksContainer.appendChild(linkElement);
    });

    // Menambahkan centang hijau
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    document.querySelector(".verified").appendChild(checkmark);
}

// Memanggil fungsi untuk mengisi konten saat halaman dimuat
fillContent();

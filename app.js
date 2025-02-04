const headerChange = document.querySelector("header");
const heroBannerChange = document.querySelector('.heroBanner');
const nextBtn = document.querySelector('#nextBtn');
const previousBtn = document.querySelector('#previousBtn');
const like = document.querySelector('#Like');
const disLike = document.querySelector('#DisLike');
const reset = document.querySelector('#Reset');
const colorFlipper = document.querySelector('.colorFlipper');
const footerChange = document.querySelector('.footer')
const faqChange = document.querySelector('.faq')
const jobsChange = document.querySelector('.Jobs')
const a_links = [headerChange, heroBannerChange, faqChange, footerChange,jobsChange]
const navChange = document.querySelector('nav');
const imageClass = document.querySelector('.Image');
const likeNumbers = document.querySelector('#likeNumbers');
const dislikeNumbers = document.querySelector('#dislikeNumbers');
const quotes = document.querySelector('.quotes');
const personName = document.querySelector('.personName');
let colorController = colorFlipper.style.backgroundColor;
const colorThemes = {
    "airCanadaTheme": {
        accent_color: "#ED152A",
        background_color: "#fff",
        font_color: "#1d1d1d",
        navBarHover_color: "#eed2ab"
    },
    "airCanadaThemeAlternate": {
        accent_color: "#eed2ab",
        background_color: "#1d1d1d",
        font_color: "#ED152A",
        navBarHover_color: "#fff"
    },
    "airCanadaTheme2": {
        accent_color: "#FFE548",
        background_color: "#fff",
        font_color: "#1d1d1d",
        navBarHover_color: "#ffb20f"
    },
    "oceanBreezeTheme": {
        accent_color: "#1E81B0", // Cool blue
        background_color: "#E3F2FD", // Light sky blue
        font_color: "#0B3954", // Deep navy blue
        navBarHover_color: "#76C7C0" // Aqua teal for hover effects
    },
    "forestGlowTheme": {
        accent_color: "#2E8B57", // Fresh green
        background_color: "#F5FFFA", // Mint cream for background
        font_color: "#2F4F4F", // Dark slate gray for text
        navBarHover_color: "#A3D9A5" // Soft pastel green for hover
    },
    "sunsetHorizonTheme": {
        accent_color: "#FF4500", // Vibrant orange-red
        background_color: "#FFDAB9", // Peach for background
        font_color: "#4B0082", // Indigo for text
        navBarHover_color: "#FF6347" // Tomato red for hover
    }

};
const siliconValleyCharacters = {
    "Richard Hendricks": {
        name: "Richard Hendricks",
        quote: "At Air Canada, I felt like I was building something meaningful, but the corporate turbulence was overwhelming.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BMTk2MDg2NjMzM15BMl5BanBnXkFtZTgwMzk0NTc5MjE@._V1_QL75_UX304_.jpg"
    },
    "Erlich Bachman": {
        name: "Erlich Bachman",
        quote: "Navigating the corporate culture at Air Canada was like trying to disrupt the airline industry with a hot dog stand.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BNTAxOTFlYjEtMTdmNi00ZTZmLWIxMDQtZmJkODZmMWNjMzUxXkEyXkFqcGc@._V1_QL75_UX642_.jpg"
    },
    "Gavin Belson": {
        name: "Gavin Belson",
        quote: "At Air Canada, I realized that making the world a better place sometimes means streamlining in-flight services.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BMDliZmQxZjYtZGFmOC00MTZhLWJjMGYtNTU1YjY1ZWRhNWI0XkEyXkFqcGc@._V1_QL75_UX1640_.jpg"
    },
    "Jared Dunn": {
        name: "Jared Dunn",
        quote: "Working at Air Canada taught me that even in the skies, it's important to stay grounded and support the team.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BMjc5NjYzMTUwNV5BMl5BanBnXkFtZTgwMzA3NTk2ODE@._V1_QL75_UX642_.jpg"
    },
    "Dinesh Chugtai": {
        name: "Dinesh Chugtai",
        quote: "The in-flight Wi-Fi at Air Canada was almost as unreliable as Gilfoyle's friendship.",
        likes: [],
        dislikes: [],
        image: "https://i.ytimg.com/vi/JNuTcsp4SvA/maxresdefault.jpg"
    },
    "Bertram Gilfoyle": {
        name: "Bertram Gilfoyle",
        quote: "Air Canada's IT infrastructure is a testament to humanity's capacity for mediocrity.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BMTk3NzAyMjY0OF5BMl5BanBnXkFtZTgwNDQ4MTUxNTE@._V1_QL75_UX1640_.jpg"
    },
    "Monica Hall": {
        name: "Monica Hall",
        quote: "Investing in Air Canada was like betting on a startup with a solid flight plan but unpredictable turbulence.",
        likes: [],
        dislikes: [],
        image: "https://m.media-amazon.com/images/M/MV5BYzMwYmRiN2UtYmFiMy00ZDZhLTkwMjEtZTVmYjA4ZTY0NzEwXkEyXkFqcGc@._V1_QL75_UX642_.jpg"
    },
    "Jian Yang": {
        name: "Jian Yang",
        quote: "I love octupuses and how Air Canada provides with 8 different ways of chinese recipe of octupus.",
        likes: [],
        dislikes: [],
        image: "https://i.ytimg.com/vi/agXDYYOA-f8/maxresdefault.jpg"
    },
    "Russ Hanneman": {
        name: "Russ Hanneman",
        quote: "Air Canada? That's the airline that put radios in cars, right?",
        likes: [],
        dislikes: [],
        image: "https://www.maxim.com/wp-content/uploads/2021/05/tres-comas-anejo-tequila-promo.jpg"
    }
};
/*
function adjustHeaderLayout() {
     if (window.matchMedia("(max-width: 768px)").matches) {
            // Mobile view: Move heroBanner inside nav
            nav.prepend(heroBannerChange);
        } else {
            // Desktop view: Move heroBanner outside nav
            headerChange.insertBefore(heroBannerChange, navChange);
        }
    }

// Run on load and resize
window.addEventListener('resize', adjustHeaderLayout);
document.addEventListener("DOMContentLoaded",adjustHeaderLayout); // Initial check
*/

function randoApplyThemeColors() {
    colorFlipper.style.backgroundColor = colorController;
    const themes = Object.keys(colorThemes);
    const randomKey = themes[Math.floor(Math.random() * themes.length)]; // e.g., "blue"
    const randomTheme = colorThemes[randomKey]; // e.g., "#1E90FF"
    document.body.style.backgroundColor = randomTheme.background_color;
    document.body.style.color = randomTheme.font_color;
    a_links.forEach(section => {
        if (section) {
            // Change all links inside the section
            section.querySelectorAll("a").forEach(link => {
                if (!headerChange.contains(link) && !faqChange.contains(link)) {
                    link.style.color = randomTheme.accent_color;
                }
            });
            section.querySelectorAll("button").forEach(button => {
                if (!colorFlipper.contains(button)){
                    button.style.backgroundColor = randomTheme.accent_color;
                }
            });
        }
    });
    navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(links => {
        links.addEventListener('mouseover', () => {
            links.style.color = randomTheme.navBarHover_color;
        });
        links.addEventListener('mouseout', () => {
            links.style.color = '';
        })
    })
    disLike.addEventListener('focus', () => {
        disLike.style.backgroundColor = randomTheme.accent_color;
    });
    disLike.addEventListener('blur', () => {
        disLike.style.backgroundColor = 'transparent';
    });
    like.addEventListener('focus', () => {
        like.style.backgroundColor = randomTheme.accent_color;
    });
    like.addEventListener('blur', () => {
        like.style.backgroundColor = 'transparent';
    });
    colorFlipper.addEventListener('mouseover', () => {
        colorFlipper.style.backgroundColor = randomTheme.accent_color;
    });
    colorFlipper.addEventListener('mouseout', () => {
        colorFlipper.style.backgroundColor = colorController;
    });
};
colorFlipper.addEventListener('click', randoApplyThemeColors);


function search() {
    const searchBar = document.querySelector('#searchBar').value.trim().toLowerCase();
    const searchItem = Array.from(document.querySelectorAll('.cards'));

    searchItem.forEach(item => {
        const searchTextinItem = item.textContent.toLowerCase();
        item.classList.toggle('hidden', !searchTextinItem.includes(searchBar));
    });
}

// Run the search function whenever the user types in the search bar
document.querySelector('#searchBar').addEventListener('input', search);
const characterKeys = Object.keys(siliconValleyCharacters);
let currentIndex = 0; // Global variable to track current character

function updateDisplayCharacter(index) {
    let character = siliconValleyCharacters[characterKeys[index]]; // Fixed object access
    imageClass.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    quotes.style.transition = "opacity 0.5s ease-in-out";
    personName.style.transition = "opacity 0.5s ease-in-out";

    imageClass.style.opacity = "0"; // Fade out
    imageClass.style.transform = "scale(0.95)"; // Slight shrink effect
    imageClass.style.transform = "translate(20px)"
    quotes.style.opacity = "0";
    personName.style.opacity = "0";
    setTimeout(() => {
        imageClass.src = character.image;
        quotes.textContent = character.quote;
        personName.textContent = character.name;
        likeNumbers.textContent = character.likes.length;
        dislikeNumbers.textContent = character.dislikes.length; // Fixed dislikes count
        imageClass.style.opacity = "1"; // Fade in
        imageClass.style.transform = "scale(1)"; // Slight grow effect
        imageClass.style.transform = "translate(-10px)"
        quotes.style.opacity = "1";
        personName.style.opacity = "1";
    }, 500);
}

// Initialize with the first character
updateDisplayCharacter(currentIndex);

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characterKeys.length; // Update index
    updateDisplayCharacter(currentIndex); // Pass updated index
});

previousBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1+ characterKeys.length) % characterKeys.length; // Update index
    updateDisplayCharacter(currentIndex); // Pass updated index
});

like.addEventListener("click", () => {
    siliconValleyCharacters[characterKeys[currentIndex]].likes.push(Date.now());
    likeNumbers.textContent = siliconValleyCharacters[characterKeys[currentIndex]].likes.length;
})
disLike.addEventListener("click", () => {
    siliconValleyCharacters[characterKeys[currentIndex]].dislikes.push(Date.now());
    dislikeNumbers.textContent = siliconValleyCharacters[characterKeys[currentIndex]].dislikes.length;
})
reset.addEventListener("click",()=>{
    siliconValleyCharacters[characterKeys[currentIndex]].dislikes = [];
    siliconValleyCharacters[characterKeys[currentIndex]].likes = [];
    dislikeNumbers.textContent = 0;
    likeNumbers.textContent = 0;
})
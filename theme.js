const passportTheme = {

    info:{

        title:"ASEAN Vocab Passport",

        subtitle:"Learn English through ASEAN Football",

        startButton:"Start Journey"

    },

    colors:{

        title:"#ffffff",

        subtitle:"#ffffff",

        buttonText:"#006A4E",

        buttonBackground:"#ffffff",

        correct:"#4CAF50",

        wrong:"#E53935"

    },

    fonts:{

        title:"Arial",

        body:"Arial"

    },

    sounds:{

        hover:null,

        click:null,

        correct:null,

        wrong:null,

        next:null,

        volume:0.5

    },

    animations:{

        hover:"shrink",

        click:"press",

        correct:"greenFlash",

        wrong:"redFlash",

        next:"fade",

        duration:800

    },

    rewards:{

        perfect:{

            title:"🏅 Passport Stamp",

            message:"Perfect Score!"

        },

        normal:{

            title:"📖 Journey Complete",

            message:"Good Job!"

        }

    },

    // =========================
    // Reward Assets
    // =========================

    reward:{

        // Background hiển thị sau khi hoàn thành
        background:"assets/images/backgrounds/reward-map.png",

        // Badge / Stamp sẽ đóng xuống
        badge:"assets/images/badges/vietnam-stamp.png",

        // Vị trí badge trên background
        position:{

            x:320,
            y:150

        }

    }

};

// =========================
// Theme Manager
// =========================

let theme = passportTheme;

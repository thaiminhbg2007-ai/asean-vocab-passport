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

    }

};

// =========================
// Theme Manager
// =========================

let theme = passportTheme;
